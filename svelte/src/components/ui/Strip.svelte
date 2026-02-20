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
    const CARD_SCALE = 2;
    const CARD_WIDTH = 3.2 * CARD_SCALE;
    const CARD_HEIGHT = 4.2 * CARD_SCALE;
    const CARD_GAP = 0.28;
    const CARD_SPACING = CARD_HEIGHT + CARD_GAP;
    const DEPTH_TAPER = 0.22;
    const TAPER_RANGE = CARD_SPACING * 4;

    const CAMERA_X = 4;
    const CAMERA_Y = 0;
    const CAMERA_Z = 8;
    const CAMERA_FOV = 80;

    // Strip tilt — recedes hard into Z for perspective warp
    const STRIP_TILT_X = -30 * (Math.PI / 180);
    const STRIP_OFFSET_Y = 0;
    const STRIP_CURVE_STRENGTH = 2;
    const STRIP_CURVE_EXP = 0.08;
    const STRIP_CURVE_RANGE = CARD_SPACING * 5;

    const WHEEL_SENSITIVITY = 0.004;
    const TOUCH_SENSITIVITY = 0.008;
    const FRICTION = 0.91;
    const SNAP_THRESHOLD = 0.003;
    const SNAP_LERP = 0.1;
    const SNAP_EPSILON = 0.0015;
    const IDLE_DELAY = 100;
    const ACTIVE_SWITCH_HYSTERESIS = CARD_SPACING * 0.08;

    const HOVER_OPACITY = 0.2;
    const LERP_SPEED = 0.18;

    const MOBILE_BREAKPOINT = 991;

    let container = $state<HTMLDivElement>();
    let isMobile = $state(false);

    function checkMobile() {
        isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    }

    const vertexShader = `
        uniform float uSeatY;
        uniform float uViewCenterY;
        uniform float uCurveStrength;
        uniform float uCurveExp;
        uniform float uCurveRange;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            vec3 pos = position;
            float stripY = uSeatY + pos.y;
            float relY = stripY - uViewCenterY;
            float clampedRelY = clamp(relY, -uCurveRange, uCurveRange);
            float curveExp = exp(-clampedRelY * uCurveExp);

            pos.z += uCurveStrength * (curveExp - 1.0);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

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

    onMount(() => {
        checkMobile();
        window.addEventListener("resize", checkMobile);

        if (isMobile || !projects.length || !container) {
            return () => {
                window.removeEventListener("resize", checkMobile);
            };
        }

        let renderer: WebGLRenderer;
        let animationId = 0;
        let isAnimating = false;
        let resizeObserver: ResizeObserver | null = null;
        let disposed = false;

        try {
            renderer = new WebGLRenderer({ antialias: true, alpha: true });
        } catch {
            isMobile = true;
            return () => {
                window.removeEventListener("resize", checkMobile);
            };
        }

        const scene = new Scene();
        const camera = new PerspectiveCamera(CAMERA_FOV, 1, 0.1, 60);
        camera.position.set(CAMERA_X, CAMERA_Y, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        container.appendChild(renderer.domElement);

        function onContextLost(e: Event) {
            e.preventDefault();
            stopLoop();
        }
        function onContextRestored() {
            if (!disposed && isVisible) startLoop();
        }
        renderer.domElement.addEventListener("webglcontextlost", onContextLost);
        renderer.domElement.addEventListener(
            "webglcontextrestored",
            onContextRestored,
        );

        const stripGroup = new Group();
        stripGroup.rotation.x = STRIP_TILT_X;
        stripGroup.position.y = STRIP_OFFSET_Y;
        scene.add(stripGroup);

        const textureLoader = new TextureLoader();
        const materials: ShaderMaterial[] = [];
        const meshes: Mesh[] = [];
        const targetOpacities: number[] = [];

        const geometry = new PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 1, 16);

        const cardCount = projects.length;
        const visibleCards = Math.ceil((CAMERA_Z * 2) / CARD_SPACING) + 4;
        const MESH_COUNT = Math.max(
            cardCount * 3,
            Math.ceil(visibleCards / cardCount) * cardCount,
        );
        const STRIP_LENGTH = MESH_COUNT * CARD_SPACING;
        const halfStrip = STRIP_LENGTH / 2;

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
            const texture = getTexture(projectIndex);
            // Cards stacked vertically along Y
            const baseSeatY =
                -halfStrip + CARD_SPACING * 0.5 + i * CARD_SPACING;

            const material = new ShaderMaterial({
                uniforms: {
                    uTexture: { value: texture },
                    uPlaneSize: { value: new Vector2(CARD_WIDTH, CARD_HEIGHT) },
                    uImageRes: { value: new Vector2(1, 1) },
                    uOpacity: { value: 1.0 },
                    uSeatY: { value: baseSeatY },
                    uViewCenterY: { value: 0.0 },
                    uCurveStrength: { value: STRIP_CURVE_STRENGTH },
                    uCurveExp: { value: STRIP_CURVE_EXP },
                    uCurveRange: { value: STRIP_CURVE_RANGE },
                },
                vertexShader,
                fragmentShader,
                transparent: true,
                side: DoubleSide,
            });

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
            mesh.position.y = baseSeatY;
            mesh.userData = {
                meshIndex: i,
                projectIndex,
                project: projects[projectIndex],
                baseSeatY,
            };

            stripGroup.add(mesh);
            materials.push(material);
            meshes.push(mesh);
            targetOpacities.push(1.0);
        }

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

        // --- Hover / click via Raycaster ---
        const raycaster = new Raycaster();
        const mouseNDC = new Vector2();
        let hoveredMeshIndex = -1;
        let isAnyHovered = false;
        let lastMouseEvent: MouseEvent | null = null;

        function updateHover(e: MouseEvent) {
            if (!container) return;
            const rect = container.getBoundingClientRect();
            mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouseNDC, camera);
            const hits = raycaster.intersectObjects(meshes);

            if (hits.length > 0) {
                const hit = hits[0].object as Mesh;
                hoveredMeshIndex = hit.userData.meshIndex;
                isAnyHovered = true;
                container.style.cursor = "pointer";
            } else {
                hoveredMeshIndex = -1;
                isAnyHovered = false;
                container.style.cursor = "default";
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
            if (!container) return;
            const rect = container.getBoundingClientRect();
            mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

            raycaster.setFromCamera(mouseNDC, camera);
            const hits = raycaster.intersectObjects(meshes);
            if (hits.length > 0) {
                const mesh = hits[0].object as Mesh;
                const project = mesh.userData.project;
                if (project?.url) {
                    const host = container.closest("c-strip");
                    if (host) {
                        host.dispatchEvent(
                            new CustomEvent("strip:exit", {
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

        // --- Scroll capture (Y-axis strip: wheel deltaY scrolls vertically) ---
        const scrollZone = container.closest(
            "[data-canvas-map]",
        ) as HTMLElement | null;

        let stripOffset = 0;
        let stripVelocity = 0;
        let isSnapping = false;
        let snapTarget = 0;
        let snapMeshIndex = -1;
        let lastInteractionTime = 0;
        let lastActiveIndex = -1;
        let lastActiveMeshIndex = -1;
        let touchLastY = 0;

        function wrapY(baseSeatY: number, offset: number): number {
            return (
                ((((baseSeatY + offset + halfStrip) % STRIP_LENGTH) +
                    STRIP_LENGTH) %
                    STRIP_LENGTH) -
                halfStrip
            );
        }

        function getNearestMesh(offset: number, centreY: number) {
            let bestIndex = 0;
            let bestWorldY = 0;
            let bestDist = Infinity;

            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatY = meshes[i].userData.baseSeatY as number;
                const worldY = wrapY(baseSeatY, offset);
                const dist = Math.abs(worldY - centreY);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIndex = i;
                    bestWorldY = worldY;
                }
            }

            return { index: bestIndex, worldY: bestWorldY, dist: bestDist };
        }

        function onWheel(e: WheelEvent) {
            e.preventDefault();
            stripVelocity += e.deltaY * WHEEL_SENSITIVITY;
            isSnapping = false;
            lastInteractionTime = performance.now();
        }

        function onTouchStart(e: TouchEvent) {
            touchLastY = e.touches[0].clientY;
            stripVelocity = 0;
            isSnapping = false;
            lastInteractionTime = performance.now();
        }

        function onTouchMove(e: TouchEvent) {
            e.preventDefault();
            const y = e.touches[0].clientY;
            const deltaY = touchLastY - y;
            stripVelocity = deltaY * TOUCH_SENSITIVITY;
            stripOffset += stripVelocity;
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

        let isVisible = true;
        function startLoop() {
            if (disposed || !isVisible || isAnimating) return;
            isAnimating = true;
            animationId = requestAnimationFrame(animate);
        }
        function stopLoop() {
            if (!isAnimating) return;
            cancelAnimationFrame(animationId);
            animationId = 0;
            isAnimating = false;
        }

        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !disposed) startLoop();
                else stopLoop();
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        function animate() {
            if (disposed || !isVisible) {
                isAnimating = false;
                return;
            }
            animationId = requestAnimationFrame(animate);

            const now = performance.now();

            // Viewport centre in world Y — used for snap target and active card
            raycaster.setFromCamera(new Vector2(0, 0), camera);
            const _r = raycaster.ray;
            const _t = -_r.origin.z / _r.direction.z;
            const viewCentreY = _r.origin.y + _t * _r.direction.y;

            if (!isSnapping) {
                stripOffset += stripVelocity;
                stripVelocity *= FRICTION;
            }

            if (
                !isSnapping &&
                Math.abs(stripVelocity) < SNAP_THRESHOLD &&
                now - lastInteractionTime > IDLE_DELAY
            ) {
                const nearest = getNearestMesh(stripOffset, viewCentreY);
                snapMeshIndex = nearest.index;
                snapTarget = stripOffset + (viewCentreY - nearest.worldY);
                isSnapping = true;
                stripVelocity = 0;
            }

            if (isSnapping) {
                stripOffset += (snapTarget - stripOffset) * SNAP_LERP;
                if (Math.abs(snapTarget - stripOffset) < SNAP_EPSILON) {
                    stripOffset = snapTarget;
                    isSnapping = false;
                    snapMeshIndex = -1;
                }
            }

            if (
                lastMouseEvent &&
                (Math.abs(stripVelocity) > 0.001 || isSnapping)
            ) {
                updateHover(lastMouseEvent);
            }

            let activeIndex = 0;
            let closestDist = Infinity;

            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatY = meshes[i].userData.baseSeatY as number;
                const worldY = wrapY(baseSeatY, stripOffset);
                meshes[i].position.y = worldY;
                meshes[i].position.z = 0;
                meshes[i].rotation.x = 0;
                materials[i].uniforms.uSeatY.value = worldY;
                materials[i].uniforms.uViewCenterY.value = viewCentreY;

                const dist = Math.abs(worldY - viewCentreY);
                if (dist < closestDist) {
                    closestDist = dist;
                    activeIndex = i;
                }

                const taperT = Math.min(dist / TAPER_RANGE, 1);
                const scaleX = 1 - DEPTH_TAPER * taperT;
                meshes[i].scale.set(scaleX, 1, 1);
            }

            if (isSnapping && snapMeshIndex >= 0) {
                activeIndex = snapMeshIndex;
            } else if (lastActiveMeshIndex >= 0) {
                const lastDist = Math.abs(
                    (meshes[lastActiveMeshIndex].position.y as number) -
                        viewCentreY,
                );
                if (
                    activeIndex !== lastActiveMeshIndex &&
                    closestDist > lastDist - ACTIVE_SWITCH_HYSTERESIS
                ) {
                    activeIndex = lastActiveMeshIndex;
                    closestDist = lastDist;
                }
            }
            lastActiveMeshIndex = activeIndex;

            const activeProjectIndex = meshes[activeIndex].userData
                .projectIndex as number;

            for (let i = 0; i < MESH_COUNT; i++) {
                let opacityTarget: number;
                if (isAnyHovered) {
                    opacityTarget =
                        i === hoveredMeshIndex ? 1.0 : HOVER_OPACITY;
                } else {
                    opacityTarget = i === activeIndex ? 1.0 : HOVER_OPACITY;
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
                const host = container?.closest("c-strip");
                if (host) {
                    host.dispatchEvent(
                        new CustomEvent("strip:update", {
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

        startLoop();

        requestAnimationFrame(() => {
            const host = container?.closest("c-strip");
            if (host && projects[0]) {
                lastActiveIndex = 0;
                host.dispatchEvent(
                    new CustomEvent("strip:update", {
                        bubbles: true,
                        detail: { project: projects[0], index: 0 },
                    }),
                );
            }
        });

        return () => {
            disposed = true;
            window.removeEventListener("resize", checkMobile);
            stopLoop();

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

            stripGroup.clear();
            scene.clear();

            geometry.dispose();
            for (const mat of materials) mat.dispose();
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
    :global(c-strip) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .canvas-container {
        width: 100%;
        height: 100%;
        position: relative;
        background: var(--_themes---site--bg--bg-primary, #020508);
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
