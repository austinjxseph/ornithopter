<script lang="ts">
    import { onMount } from "svelte";
    import * as THREE from "three";

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

    // --- Card & drum geometry ---
    const CARD_WIDTH = 6;
    const CARD_HEIGHT = 6;
    const CARD_SEGMENTS = 32;
    const DRUM_RADIUS = 12.0;
    const CAMERA_Z = 18;
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
    const LERP_SPEED = 0.08;

    let container: HTMLDivElement;
    let isMobile = $state(false);

    function smoothstep(edge0: number, edge1: number, x: number): number {
        const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
        return t * t * (3 - 2 * t);
    }

    // Vertex shader - wraps each card onto the drum cylinder
    const vertexShader = `
        uniform float uRadius;
        uniform float uCardHeight;
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

        if (isMobile || !projects.length) {
            return () => {
                window.removeEventListener("resize", checkMobile);
            };
        }

        // --- Three.js setup ---
        let renderer: THREE.WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;

        try {
            renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true,
            });
        } catch {
            isMobile = true;
            return () => {
                window.removeEventListener("resize", checkMobile);
            };
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = CAMERA_Z;

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.NoToneMapping;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        container.appendChild(renderer.domElement);

        const drum = new THREE.Group();
        scene.add(drum);

        const textureLoader = new THREE.TextureLoader();
        const materials: THREE.ShaderMaterial[] = [];
        const meshes: THREE.Mesh[] = [];
        const targetOpacities: number[] = [];

        const geometry = new THREE.PlaneGeometry(
            CARD_WIDTH,
            CARD_HEIGHT,
            CARD_SEGMENTS,
            CARD_SEGMENTS,
        );

        // --- Fill drum with meshes around full 360° ---
        const cardCount = projects.length;
        const cardArc = CARD_HEIGHT / DRUM_RADIUS;
        // Calculate how many meshes fill the drum, then compute perfect angleStep
        const MESH_COUNT = Math.ceil((2 * Math.PI) / (cardArc + 0.04));
        const angleStep = (2 * Math.PI) / MESH_COUNT;

        // Cache textures by project index (only cardCount textures loaded)
        const textureCache = new Map<number, THREE.Texture>();
        function getTexture(projectIndex: number): THREE.Texture {
            if (textureCache.has(projectIndex))
                return textureCache.get(projectIndex)!;
            const tex = textureLoader.load(
                projects[projectIndex].thumbnail_base,
            );
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            textureCache.set(projectIndex, tex);
            return tex;
        }

        for (let i = 0; i < MESH_COUNT; i++) {
            const projectIndex = i % cardCount;
            const project = projects[projectIndex];
            const baseSeatAngle = -i * angleStep;
            const texture = getTexture(projectIndex);

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    uRadius: { value: DRUM_RADIUS },
                    uCardHeight: { value: CARD_HEIGHT },
                    uBaseAngle: { value: baseSeatAngle },
                    uTexture: { value: texture },
                    uPlaneSize: {
                        value: new THREE.Vector2(CARD_WIDTH, CARD_HEIGHT),
                    },
                    uImageRes: { value: new THREE.Vector2(1, 1) },
                    uOpacity: { value: 1.0 },
                },
                vertexShader,
                fragmentShader,
                transparent: true,
                side: THREE.DoubleSide,
            });

            texture.onUpdate = () => {
                if (texture.image) {
                    material.uniforms.uImageRes.value.set(
                        texture.image.width || 1,
                        texture.image.height || 1,
                    );
                }
            };

            const mesh = new THREE.Mesh(geometry, material);
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

        // --- Raycaster for hover/click ---
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let hoveredMeshIndex = -1;
        let isAnyHovered = false;

        function onMouseMove(e: MouseEvent) {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(meshes);

            // Only hit visible (front-facing) cards
            const hit = intersects.find((i) => {
                const idx = (i.object as THREE.Mesh).userData.meshIndex;
                return materials[idx].uniforms.uOpacity.value > 0.1;
            });

            if (hit) {
                hoveredMeshIndex = (hit.object as THREE.Mesh).userData
                    .meshIndex;
                isAnyHovered = true;
                container.style.cursor = "pointer";
            } else {
                hoveredMeshIndex = -1;
                isAnyHovered = false;
                container.style.cursor = "default";
            }
        }

        function onClick(e: MouseEvent) {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(meshes);

            const hit = intersects.find((i) => {
                const idx = (i.object as THREE.Mesh).userData.meshIndex;
                return materials[idx].uniforms.uOpacity.value > 0.1;
            });

            if (hit) {
                const project = (hit.object as THREE.Mesh).userData.project;
                if (project?.url) {
                    window.location.href = project.url;
                }
            }
        }

        container.addEventListener("mousemove", onMouseMove);
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

        // --- Animation loop ---
        const TWO_PI = 2 * Math.PI;

        function animate() {
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
                // Find nearest card center
                const normAngle = ((drumAngle % TWO_PI) + TWO_PI) % TWO_PI;
                // Biased rounding: need 60% progress to advance to next card
                const nearestSlot = Math.floor(normAngle / angleStep + 0.4);
                const baseRevolutions = Math.round(drumAngle / TWO_PI) * TWO_PI;
                snapTarget = baseRevolutions + nearestSlot * angleStep;

                // Pick shortest path
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

            // Phase 3: Update meshes
            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatAngle = -i * angleStep;
                const currentAngle = baseSeatAngle + drumAngle;
                materials[i].uniforms.uBaseAngle.value = currentAngle;

                // Visibility culling: cos of the normalized angle
                const normAngle = ((currentAngle % TWO_PI) + TWO_PI) % TWO_PI;
                // Angle 0 = front, PI = back
                const cosAngle = Math.cos(normAngle);
                const visibility = smoothstep(-0.2, 0.3, cosAngle);

                // Combine visibility with hover
                let opacityTarget: number;
                if (visibility < 0.01) {
                    opacityTarget = 0;
                } else if (!isAnyHovered) {
                    opacityTarget = visibility;
                } else if (i === hoveredMeshIndex) {
                    opacityTarget = visibility;
                } else {
                    opacityTarget = visibility * HOVER_OPACITY;
                }

                targetOpacities[i] = opacityTarget;

                // Lerp opacity
                const current = materials[i].uniforms.uOpacity.value;
                materials[i].uniforms.uOpacity.value +=
                    (targetOpacities[i] - current) * LERP_SPEED;
            }

            // Active card detection
            const normAngle = ((drumAngle % TWO_PI) + TWO_PI) % TWO_PI;
            const activeMeshIndex =
                Math.round(normAngle / angleStep) % MESH_COUNT;
            const activeProjectIndex = activeMeshIndex % cardCount;

            if (
                activeProjectIndex !== lastActiveIndex &&
                projects[activeProjectIndex]
            ) {
                lastActiveIndex = activeProjectIndex;
                const host = container?.closest("c-indexwheel");
                if (host) {
                    host.dispatchEvent(
                        new CustomEvent("activecard", {
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

        // Fire initial activecard event
        requestAnimationFrame(() => {
            const host = container?.closest("c-indexwheel");
            if (host && projects[0]) {
                lastActiveIndex = 0;
                host.dispatchEvent(
                    new CustomEvent("activecard", {
                        bubbles: true,
                        detail: { project: projects[0], index: 0 },
                    }),
                );
            }
        });

        // --- Cleanup ---
        return () => {
            window.removeEventListener("resize", checkMobile);
            cancelAnimationFrame(animationId);

            if (resizeObserver) resizeObserver.disconnect();

            container?.removeEventListener("mousemove", onMouseMove);
            container?.removeEventListener("click", onClick);

            if (scrollZone) {
                scrollZone.removeEventListener("wheel", onWheel);
                scrollZone.removeEventListener("touchstart", onTouchStart);
                scrollZone.removeEventListener("touchmove", onTouchMove);
                scrollZone.removeEventListener("touchend", onTouchEnd);
            }

            // Dispose Three.js resources
            geometry.dispose();
            for (const mat of materials) {
                mat.dispose();
            }
            textureCache.forEach((tex) => tex.dispose());
            textureCache.clear();
            renderer.dispose();

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
    :global(c-indexwheel) {
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
