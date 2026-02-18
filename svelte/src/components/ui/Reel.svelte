<script lang="ts">
    import { onMount } from "svelte";
    import {
        DoubleSide,
        Group,
        LinearFilter,
        Mesh,
        NoToneMapping,
        PerspectiveCamera,
        PlaneGeometry,
        Raycaster,
        SRGBColorSpace,
        Scene,
        ShaderMaterial,
        TextureLoader,
        Vector2,
        Vector3,
        WebGLRenderer,
    } from "three";
    import type { Texture } from "three";

    let {
        projects = [],
    }: {
        projects?: Array<{
            url: string;
            title: string;
            thumbnail_base: string;
            thumbnail_overlay: string;
        }>;
    } = $props();

    // --- Constants ---
    const TWO_PI = 2 * Math.PI;

    // --- Card & drum geometry ---
    const CARD_WIDTH = 6;
    const CARD_HEIGHT = 6;
    const DRUM_RADIUS = 8;
    const CAMERA_Z = 20;
    const MOBILE_BREAKPOINT = 991;

    // --- Interaction tuning ---
    const WHEEL_SENSITIVITY = 0.0003;
    const TOUCH_SENSITIVITY = 0.004;
    const FRICTION = 0.92;
    const SNAP_THRESHOLD = 0.0005;
    const SNAP_LERP = 0.08;
    const SNAP_EPSILON = 0.001;
    const IDLE_DELAY = 120;

    // --- Visual tuning ---
    const HOVER_OPACITY = 0.2;
    const LERP_SPEED = 0.2;

    // --- Pre-allocated reusable objects ---
    const _hitPoint = new Vector3();

    let container = $state<HTMLDivElement>();
    let isMobile = $state(false);

    function smoothstep(edge0: number, edge1: number, x: number): number {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }

    // Vertex shader - wraps each card onto the drum cylinder
    const vertexShader = `
        uniform float uRadius;
        uniform float uBaseAngle;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            float angleOffset = position.y / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = position.x;
            pos.y = sin(angle) * uRadius;
            pos.z = cos(angle) * uRadius;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    // Fragment shader - texture with opacity
    const fragmentShader = `
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;

        varying vec2 vUv;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            vec2 uv = CoverUV(vUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);
            gl_FragColor = vec4(tex.rgb, uOpacity);
        }
    `;

    function checkMobile() {
        isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    }

    onMount(() => {
        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (isMobile || !projects.length || !container) {
            return () => {
                window.removeEventListener("resize", checkMobile);
            };
        }

        // --- Three.js setup ---
        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });
        } catch {
            isMobile = true;
            return () => {
                window.removeEventListener("resize", checkMobile);
            };
        }

        let disposed = false;

        const scene = new Scene();
        const camera = new PerspectiveCamera(45, 1, 0.1, 50);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
        function onContextLost(e: Event) {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        }
        function onContextRestored() {
            if (!disposed) animate();
        }
        renderer.domElement.addEventListener("webglcontextlost", onContextLost);
        renderer.domElement.addEventListener(
            "webglcontextrestored",
            onContextRestored,
        );

        const drum = new Group();
        scene.add(drum);

        const textureLoader = new TextureLoader();
        const materials: ShaderMaterial[] = [];
        const meshes: Mesh[] = [];
        const targetOpacities: number[] = [];

        // 1 X-segment (flat), 16 Y-segments (for cylinder wrap)
        const geometry = new PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 1, 16);

        // --- Fill drum with meshes around full 360° ---
        const cardCount = projects.length;
        const cardArc = CARD_HEIGHT / DRUM_RADIUS;
        const rawCount = Math.ceil(TWO_PI / (cardArc + 0.04));
        // Round DOWN to nearest multiple of cardCount so each project appears equally
        // and cards never overlap (rounding up would squeeze too many into the circumference)
        const MESH_COUNT = Math.max(
            cardCount,
            Math.floor(rawCount / cardCount) * cardCount,
        );
        const angleStep = TWO_PI / MESH_COUNT;

        // Cache textures by project index (only cardCount textures loaded)
        const textureCache = new Map<number, Texture>();
        function getTexture(projectIndex: number): Texture {
            if (textureCache.has(projectIndex))
                return textureCache.get(projectIndex)!;
            const tex = textureLoader.load(
                projects[projectIndex].thumbnail_base,
            );
            tex.minFilter = LinearFilter;
            tex.magFilter = LinearFilter;
            textureCache.set(projectIndex, tex);
            return tex;
        }

        for (let i = 0; i < MESH_COUNT; i++) {
            const projectIndex = i % cardCount;
            const project = projects[projectIndex];
            const baseSeatAngle = -i * angleStep;
            const texture = getTexture(projectIndex);

            const material = new ShaderMaterial({
                uniforms: {
                    uRadius: { value: DRUM_RADIUS },
                    uBaseAngle: { value: baseSeatAngle },
                    uTexture: { value: texture },
                    uPlaneSize: {
                        value: new Vector2(CARD_WIDTH, CARD_HEIGHT),
                    },
                    uImageRes: { value: new Vector2(1, 1) },
                    uOpacity: { value: 1.0 },
                },
                vertexShader,
                fragmentShader,
                transparent: true,
                side: DoubleSide,
            });

            // Set uImageRes for all materials sharing this texture
            if (!texture.userData.materials) {
                texture.userData.materials = [];
                texture.onUpdate = () => {
                    if (texture.image) {
                        const img = texture.image as HTMLImageElement;
                        const w = img.width || 1;
                        const h = img.height || 1;
                        for (const mat of texture.userData
                            .materials as ShaderMaterial[]) {
                            mat.uniforms.uImageRes.value.set(w, h);
                        }
                    }
                };
            }
            texture.userData.materials.push(material);

            const mesh = new Mesh(geometry, material);
            mesh.userData = {
                meshIndex: i,
                projectIndex,
                project,
                baseSeatAngle,
            };

            drum.add(mesh);
            materials.push(material);
            meshes.push(mesh);
            targetOpacities.push(1.0);
        }

        // --- Sizing ---
        function updateSize() {
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(container);
        requestAnimationFrame(updateSize);

        // --- Hover/click via analytical cylinder hit test ---
        // The raycaster can't work here because the vertex shader warps
        // geometry on the GPU — all meshes share the same CPU bounding box.
        // Instead we cast a ray against the mathematical cylinder (Y-Z plane,
        // radius = DRUM_RADIUS) and compute which card slot the hit angle
        // falls into.
        const raycaster = new Raycaster();
        const mouseNDC = new Vector2();
        let hoveredMeshIndex = -1;
        let isAnyHovered = false;
        let lastMouseEvent: MouseEvent | null = null;

        function hitTestDrum(e: MouseEvent): number {
            if (!container) return -1;
            const rect = container.getBoundingClientRect();
            mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouseNDC, camera);
            const origin = raycaster.ray.origin;
            const dir = raycaster.ray.direction;

            // Intersect ray with cylinder: y² + z² = R²
            const a = dir.y * dir.y + dir.z * dir.z;
            const b = 2 * (origin.y * dir.y + origin.z * dir.z);
            const c =
                origin.y * origin.y +
                origin.z * origin.z -
                DRUM_RADIUS * DRUM_RADIUS;
            const discriminant = b * b - 4 * a * c;

            if (discriminant < 0) return -1;

            const t = (-b - Math.sqrt(discriminant)) / (2 * a);
            if (t < 0) return -1;

            _hitPoint.copy(origin).addScaledVector(dir, t);

            // Check x bounds (card width)
            if (Math.abs(_hitPoint.x) > CARD_WIDTH / 2) return -1;

            // Get the angle of the hit point on the drum
            const hitAngle = Math.atan2(_hitPoint.y, _hitPoint.z);

            // Find which mesh slot this angle falls into
            const halfArc = CARD_HEIGHT / 2 / DRUM_RADIUS;

            let bestIndex = -1;
            let bestDist = Infinity;

            for (let i = 0; i < MESH_COUNT; i++) {
                if (!meshes[i].visible) continue;
                const cardCenter = materials[i].uniforms.uBaseAngle.value;

                // Angular distance (wrapped to [-PI, PI])
                let diff = hitAngle - cardCenter;
                diff =
                    ((((diff + Math.PI) % TWO_PI) + TWO_PI) % TWO_PI) - Math.PI;

                if (Math.abs(diff) < halfArc && Math.abs(diff) < bestDist) {
                    bestDist = Math.abs(diff);
                    bestIndex = i;
                }
            }

            return bestIndex;
        }

        function updateHover(e: MouseEvent) {
            const hit = hitTestDrum(e);
            if (hit >= 0) {
                hoveredMeshIndex = hit;
                isAnyHovered = true;
                container!.style.cursor = "pointer";
            } else {
                hoveredMeshIndex = -1;
                isAnyHovered = false;
                container!.style.cursor = "default";
            }
        }

        function onMouseMove(e: MouseEvent) {
            lastMouseEvent = e;
            updateHover(e);
        }

        function onMouseLeave() {
            lastMouseEvent = null;
            hoveredMeshIndex = -1;
            isAnyHovered = false;
            if (container) container.style.cursor = "default";
        }

        function onClick(e: MouseEvent) {
            const hit = hitTestDrum(e);
            if (hit >= 0) {
                const project = meshes[hit].userData.project;
                if (project?.url) {
                    const host = container?.closest("c-reel");
                    if (host) {
                        host.dispatchEvent(
                            new CustomEvent("reel:exit", {
                                bubbles: true,
                                detail: { url: project.url, project },
                            }),
                        );
                    }
                }
            }
        }

        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);
        container.addEventListener("click", onClick);

        // --- Wheel/touch scroll capture ---
        const scrollZone = container.closest(
            "[data-canvas-map]",
        ) as HTMLElement | null;

        let drumAngle = 0;
        let drumVelocity = 0;
        let isSnapping = false;
        let snapTarget = 0;
        let lastInteractionTime = 0;
        let lastActiveIndex = -1;
        let touchLastY = 0;

        function onWheel(e: WheelEvent) {
            e.preventDefault();
            drumVelocity += e.deltaY * WHEEL_SENSITIVITY;
            isSnapping = false;
            lastInteractionTime = performance.now();
        }

        function onTouchStart(e: TouchEvent) {
            touchLastY = e.touches[0].clientY;
            drumVelocity = 0;
            isSnapping = false;
            lastInteractionTime = performance.now();
        }

        function onTouchMove(e: TouchEvent) {
            e.preventDefault();
            const y = e.touches[0].clientY;
            const deltaY = touchLastY - y;
            drumVelocity = deltaY * TOUCH_SENSITIVITY;
            drumAngle += drumVelocity;
            touchLastY = y;
            lastInteractionTime = performance.now();
        }

        function onTouchEnd() {
            lastInteractionTime = performance.now();
        }

        if (scrollZone) {
            scrollZone.addEventListener("wheel", onWheel, { passive: false });
            scrollZone.addEventListener("touchstart", onTouchStart, {
                passive: true,
            });
            scrollZone.addEventListener("touchmove", onTouchMove, {
                passive: false,
            });
            scrollZone.addEventListener("touchend", onTouchEnd);
        }

        // --- Visibility-based pause ---
        let isVisible = true;
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !disposed) animate();
                else cancelAnimationFrame(animationId);
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        // --- Animation loop ---
        function animate() {
            if (disposed || !isVisible) return;
            animationId = requestAnimationFrame(animate);

            const now = performance.now();

            // Phase 1: Inertia
            if (!isSnapping) {
                drumAngle += drumVelocity;
                drumVelocity *= FRICTION;
            }

            // Phase 2: Snap detection
            if (
                !isSnapping &&
                Math.abs(drumVelocity) < SNAP_THRESHOLD &&
                now - lastInteractionTime > IDLE_DELAY
            ) {
                const normAngle = ((drumAngle % TWO_PI) + TWO_PI) % TWO_PI;
                const nearestSlot = Math.floor(normAngle / angleStep + 0.4);
                const baseRevolutions = Math.round(drumAngle / TWO_PI) * TWO_PI;
                snapTarget = baseRevolutions + nearestSlot * angleStep;

                if (Math.abs(snapTarget - drumAngle) > TWO_PI / 2) {
                    snapTarget += drumAngle > snapTarget ? TWO_PI : -TWO_PI;
                }

                isSnapping = true;
                drumVelocity = 0;
            }

            // Phase 2b: Snap lerp
            if (isSnapping) {
                drumAngle += (snapTarget - drumAngle) * SNAP_LERP;
                if (Math.abs(snapTarget - drumAngle) < SNAP_EPSILON) {
                    drumAngle = snapTarget;
                    isSnapping = false;
                }
            }

            // Re-poll hover when drum is moving but mouse hasn't moved
            if (
                lastMouseEvent &&
                (Math.abs(drumVelocity) > 0.0001 || isSnapping)
            ) {
                updateHover(lastMouseEvent);
            }

            // Active card detection — current drum position drives both
            // the visual highlight and the title list event
            const drumNormAngle = ((drumAngle % TWO_PI) + TWO_PI) % TWO_PI;
            const activeMeshIndex =
                Math.round(drumNormAngle / angleStep) % MESH_COUNT;
            const activeProjectIndex = activeMeshIndex % cardCount;

            // Phase 3: Update meshes
            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatAngle = -i * angleStep;
                const currentAngle = baseSeatAngle + drumAngle;
                materials[i].uniforms.uBaseAngle.value = currentAngle;

                const normAngle = ((currentAngle % TWO_PI) + TWO_PI) % TWO_PI;
                const cosAngle = Math.cos(normAngle);
                const visibility = smoothstep(0.3, 0.6, cosAngle);

                meshes[i].visible = visibility > 0.01;

                let opacityTarget: number;
                if (!meshes[i].visible) {
                    opacityTarget = 0;
                } else if (isAnyHovered) {
                    opacityTarget =
                        i === hoveredMeshIndex
                            ? visibility
                            : visibility * HOVER_OPACITY;
                } else {
                    opacityTarget =
                        i === activeMeshIndex
                            ? visibility
                            : visibility * HOVER_OPACITY;
                }

                targetOpacities[i] = opacityTarget;

                const current = materials[i].uniforms.uOpacity.value;
                materials[i].uniforms.uOpacity.value +=
                    (targetOpacities[i] - current) * LERP_SPEED;
            }

            if (
                activeProjectIndex !== lastActiveIndex &&
                projects[activeProjectIndex]
            ) {
                lastActiveIndex = activeProjectIndex;
                const host = container?.closest("c-reel");
                if (host) {
                    host.dispatchEvent(
                        new CustomEvent("reel:update", {
                            bubbles: true,
                            detail: {
                                project: projects[activeProjectIndex],
                                index: activeProjectIndex,
                            },
                        }),
                    );
                }
            }

            renderer.render(scene, camera);
        }

        animate();

        // Fire initial reel:update event
        requestAnimationFrame(() => {
            const host = container?.closest("c-reel");
            if (host && projects[0]) {
                lastActiveIndex = 0;
                host.dispatchEvent(
                    new CustomEvent("reel:update", {
                        bubbles: true,
                        detail: { project: projects[0], index: 0 },
                    }),
                );
            }
        });

        // --- Cleanup ---
        return () => {
            disposed = true;
            window.removeEventListener("resize", checkMobile);
            cancelAnimationFrame(animationId);

            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            container?.removeEventListener("mousemove", onMouseMove);
            container?.removeEventListener("mouseleave", onMouseLeave);
            container?.removeEventListener("click", onClick);

            if (scrollZone) {
                scrollZone.removeEventListener("wheel", onWheel);
                scrollZone.removeEventListener("touchstart", onTouchStart);
                scrollZone.removeEventListener("touchmove", onTouchMove);
                scrollZone.removeEventListener("touchend", onTouchEnd);
            }

            renderer.domElement.removeEventListener(
                "webglcontextlost",
                onContextLost,
            );
            renderer.domElement.removeEventListener(
                "webglcontextrestored",
                onContextRestored,
            );

            // Remove scene children to break references
            drum.clear();
            scene.clear();

            // Dispose GPU resources
            geometry.dispose();
            for (const mat of materials) {
                mat.dispose();
            }
            textureCache.forEach((tex) => {
                tex.userData.materials = null;
                tex.dispose();
            });
            textureCache.clear();
            materials.length = 0;
            meshes.length = 0;

            renderer.dispose();
            renderer.forceContextLoss();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    });
</script>

{#if isMobile}
    <div class="mobile-fallback">
        {#each projects as project}
            <c-indexcard
                href={project.url}
                title={project.title}
                backgroundimage={project.thumbnail_base}
                overlayimage={project.thumbnail_overlay}
            ></c-indexcard>
        {/each}
    </div>
{:else}
    <div class="canvas-container" bind:this={container}></div>
{/if}

<style>
    :global(c-reel) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .canvas-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .canvas-container :global(canvas) {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }

    .mobile-fallback {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;
    }

    @media screen and (max-width: 991px) {
        .mobile-fallback {
            gap: var(--global--margin);
        }
    }
</style>
