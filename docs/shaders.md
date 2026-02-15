## User

i eant you to read throguh all my trheejs compoetns mainly in [@ui](file:///home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui) i ahve a rpeaetd prblewm whre if i mveo abck for the apges rapidly or cause multiple concurrent darh rlaods, my brodswer runs out of memeory adn crashes - i want to amek sure all threejs objcts sued in this prjct are memroy safe and prevented from causign emmory lwakas, and all are cleaned up fromt ehy dom right afetr thiro visual sue.

i have instlaled a [@three-best-practices](file:///home/austinjxseph/GitHub/austinjxseph/ornithopter/.claude/skills/three-best-practices) skill here you coudl utlise, but alos refer the web oif you ever need to - ddo a comperehensiove audot and fine tune the perofrmance of the shders an their exzecution in thw ebsite both.

## Assistant



I'll start by loading the Three.js best practices skill and reading all the relevant components to do a comprehensive audit.

**Tool Call: Skill**
Status: Completed

Launching skill: three-best-practices

## Assistant



Now let me read all the Three.js components to understand the current state.

**Tool Call: Find `svelte/src/components/ui/*.svelte`**
Status: Completed

/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexCard.svelte
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Button.svelte

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte**
Status: Completed

```
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
    const DRUM_RADIUS = 10.0;
    const CAMERA_Z = 22;
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

        const scene = new Scene();
        const camera = new PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
        renderer.domElement.addEventListener("webglcontextlost", (e: Event) => {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        });
        renderer.domElement.addEventListener("webglcontextrestored", () => {
            animate();
        });

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
        const MESH_COUNT = Math.ceil(TWO_PI / (cardArc + 0.04));
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
                    window.location.href = project.url;
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

        // --- Animation loop ---
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

            // Active card detection
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
            container?.removeEventListener("mouseleave", onMouseLeave);
            container?.removeEventListener("click", onClick);

            if (scrollZone) {
                scrollZone.removeEventListener("wheel", onWheel);
                scrollZone.removeEventListener("touchstart", onTouchStart);
                scrollZone.removeEventListener("touchmove", onTouchMove);
                scrollZone.removeEventListener("touchend", onTouchEnd);
            }

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
```

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte**
Status: Completed

```
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
        SRGBColorSpace,
        Scene,
        ShaderMaterial,
        TextureLoader,
        Vector2,
        WebGLRenderer,
    } from "three";
    import type { Texture } from "three";

    let {
        images = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
    } = $props();

    const TWO_PI = 2 * Math.PI;

    // Config
    const CARD_WIDTH = 2.4;
    const CARD_HEIGHT = 1.6;
    const DRUM_RADIUS = 2.0;
    const CAMERA_Z = 12;
    const ROTATION_SPEED = 0.006;

    // Vertex shader — wraps each card onto a cylinder around Y-axis
    const vertexShader = `
        uniform float uRadius;
        uniform float uBaseAngle;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;

        void main() {
            // UVs stay at full scale — image doesn't distort
            vUv = uv;

            float angleOffset = position.x / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = sin(angle) * uRadius;
            // Scale geometry height but keep image anchored from center
            pos.y = position.y * uScaleY;
            pos.z = cos(angle) * uRadius;

            // Per-vertex depth: positive = facing camera, negative = behind horizon
            vDepth = pos.z;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    // Fragment shader — texture mapping
    const fragmentShader = `
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uScaleY;

        varying vec2 vUv;
        varying float vDepth;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
            vec2 st = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
            vec2 o = (rs < ri ? vec2((st.x - s.x) / 2.0, 0.0) : vec2(0.0, (st.y - s.y) / 2.0)) / st;
            return u * s / st + o;
        }

        void main() {
            // Remap V so the image stays full-size, centered — mask reveal effect
            // When uScaleY=0.5, vUv.y 0→1 maps to image 0.25→0.75 (center crop)
            float remappedV = mix(0.5 - 0.5 * uScaleY, 0.5 + 0.5 * uScaleY, vUv.y);
            vec2 maskedUv = vec2(vUv.x, remappedV);

            vec2 uv = CoverUV(maskedUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // Per-pixel dim past the horizon: darken RGB instead of alpha (avoids transparent sort overhead)
            float fade = vDepth > 0.0 ? 1.0 : 0.3;
            gl_FragColor = vec4(tex.rgb * fade, tex.a);
        }
    `;

    let container: HTMLDivElement;

    onMount(() => {
        if (!images.length || !container) return;

        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });
        } catch {
            return;
        }

        const scene = new Scene();
        const camera = new PerspectiveCamera(40, 1, 0.1, 100);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
        renderer.domElement.addEventListener("webglcontextlost", (e: Event) => {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        });
        renderer.domElement.addEventListener("webglcontextrestored", () => {
            animate();
        });

        const drum = new Group();
        drum.position.y = 0.5;
        drum.rotation.z = 10 * (Math.PI / 180);
        drum.rotation.x = 15 * (Math.PI / 180);
        scene.add(drum);

        const textureLoader = new TextureLoader();
        const materials: ShaderMaterial[] = [];

        // 16 X-segments (wrapping axis), 1 Y-segment
        const geometry = new PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 16, 1);

        // Fill drum with meshes around full 360°
        const cardCount = images.length;
        const MESH_COUNT = 5;
        const angleStep = TWO_PI / MESH_COUNT;

        // Cache textures by image index
        const textureCache = new Map<number, Texture>();
        function getTexture(imageIndex: number): Texture {
            if (textureCache.has(imageIndex))
                return textureCache.get(imageIndex)!;
            const tex = textureLoader.load(
                images[imageIndex].url,
                (loaded: Texture) => {
                    if (loaded.image) {
                        const img = loaded.image as HTMLImageElement;
                        const w = img.width || 1;
                        const h = img.height || 1;
                        for (const mat of (loaded.userData.materials ||
                            []) as ShaderMaterial[]) {
                            mat.uniforms.uImageRes.value.set(w, h);
                        }
                    }
                },
            );
            tex.minFilter = LinearFilter;
            tex.magFilter = LinearFilter;
            textureCache.set(imageIndex, tex);
            return tex;
        }

        for (let i = 0; i < MESH_COUNT; i++) {
            const imageIndex = i % cardCount;
            const baseSeatAngle = -i * angleStep;
            const texture = getTexture(imageIndex);

            const material = new ShaderMaterial({
                uniforms: {
                    uRadius: { value: DRUM_RADIUS },
                    uBaseAngle: { value: baseSeatAngle },
                    uScaleY: { value: 0.0 },
                    uTexture: { value: texture },
                    uPlaneSize: {
                        value: new Vector2(CARD_WIDTH, CARD_HEIGHT),
                    },
                    uImageRes: { value: new Vector2(1, 1) },
                },
                vertexShader,
                fragmentShader,
                side: DoubleSide,
            });

            if (!texture.userData.materials) {
                texture.userData.materials = [];
            }
            texture.userData.materials.push(material);

            const mesh = new Mesh(geometry, material);
            drum.add(mesh);
            materials.push(material);
        }

        // --- Sizing ---
        let resizeTimer: ReturnType<typeof setTimeout>;
        function updateSize() {
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }

        resizeObserver = new ResizeObserver(() => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateSize, 100);
        });
        resizeObserver.observe(container);
        requestAnimationFrame(updateSize);

        // --- Timeline-driven animation ---
        // Phase 1: Grow in (staggered per card)
        // Phase 2: Spin at full height
        // Phase 3: Collapse out (staggered per card)
        const INTRO_DUR = 0.6; // seconds — each card's grow duration
        const HOLD_DUR = 3.0; // seconds — spin at full height
        const OUTRO_DUR = 0.6; // seconds — each card's collapse duration
        const STAGGER = 0.12; // seconds — delay between each card
        const STAGGER_TOTAL = STAGGER * (MESH_COUNT - 1);

        // Full timeline: intro(staggered) → hold → outro(staggered)
        const INTRO_END = INTRO_DUR + STAGGER_TOTAL;
        const OUTRO_START = INTRO_END + HOLD_DUR;
        const TOTAL_DUR = OUTRO_START + OUTRO_DUR + STAGGER_TOTAL;

        let rotationOffset = 0;
        let isVisible = true;
        let startTime = -1;

        // Ease-in-out cubic — smooth acceleration and deceleration
        function easeInOutCubic(t: number) {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        }

        function getCardScaleY(cardIndex: number, elapsed: number): number {
            // Intro: last card opens first
            const delay = (MESH_COUNT - 1 - cardIndex) * STAGGER;
            const introT = Math.max(
                0,
                Math.min(1, (elapsed - delay) / INTRO_DUR),
            );
            if (elapsed < INTRO_END) {
                return easeInOutCubic(introT);
            }

            // Hold
            if (elapsed < OUTRO_START) {
                return 1.0;
            }

            // Outro: first card closes first, last card closes last
            const reverseDelay = (MESH_COUNT - 1 - cardIndex) * STAGGER;
            const outroT = Math.max(
                0,
                Math.min(1, (elapsed - OUTRO_START - reverseDelay) / OUTRO_DUR),
            );
            return 1.0 - easeInOutCubic(outroT);
        }

        function animate() {
            if (!isVisible) return;
            cancelAnimationFrame(animationId);

            const now = performance.now() / 1000;
            if (startTime < 0) startTime = now;
            const elapsed = now - startTime;

            // Stop loop when done — render final collapsed frame and exit
            if (elapsed >= TOTAL_DUR) {
                for (let i = 0; i < MESH_COUNT; i++) {
                    materials[i].uniforms.uScaleY.value = 0;
                }
                renderer.render(scene, camera);
                return;
            }

            animationId = requestAnimationFrame(animate);

            rotationOffset += ROTATION_SPEED;

            // Update all materials with per-card stagger
            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatAngle = -i * angleStep;
                materials[i].uniforms.uBaseAngle.value =
                    baseSeatAngle + rotationOffset;
                materials[i].uniforms.uScaleY.value = getCardScaleY(i, elapsed);
            }

            renderer.render(scene, camera);
        }

        // Pause animation when off-screen
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) animate();
                else cancelAnimationFrame(animationId);
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        animate();

        // --- Cleanup ---
        return () => {
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            geometry.dispose();
            for (const mat of materials) mat.dispose();
            textureCache.forEach((tex) => tex.dispose());
            textureCache.clear();
            renderer.dispose();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    });
</script>

<div class="drum-container" bind:this={container}></div>

<style>
    :global(c-drum) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .drum-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .drum-container :global(canvas) {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }
</style>
```

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte**
Status: Completed

```
<script lang="ts">
    import { onMount } from "svelte";
    import {
        DoubleSide,
        FogExp2,
        Group,
        LinearFilter,
        Mesh,
        NoToneMapping,
        PerspectiveCamera,
        PlaneGeometry,
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
        images = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
    } = $props();

    // Config
    const CARD_WIDTH = 2.4;
    const CARD_HEIGHT = 1.6;
    const CARD_GAP = 0.15;
    const CARD_SEGMENTS_X = 16;
    const CARD_SEGMENTS_Y = 48;
    const TWIST_AMOUNT = (Math.PI * 4) / 3; // 240° twist across the strip
    const STRIP_TILT_Z = -20 * (Math.PI / 180); // diagonal tilt in degrees — negative = top-right to bottom-left
    const ROTATION_SPEED = 0.003;
    const CAMERA_Z = 10;
    const MOUSE_TILT_AMOUNT = 0.15; // max rotation in radians from mouse
    const MOUSE_LERP = 0.05; // smoothing speed (0–1, lower = smoother)

    // Vertex shader — twists the film strip into a helix + computes normal
    const vertexShader = `
        uniform float uTwist;
        uniform float uOffset;
        uniform float uStripCenter;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;

        void main() {
            vUv = uv;

            // World-space Y of this vertex (card position + local vertex)
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            float globalY = worldPos.y;

            // Twist angle based on distance from strip center
            float angle = (globalY - uStripCenter) * uTwist + uOffset;
            float ca = cos(angle);
            float sa = sin(angle);

            // Wrap X around the helix
            float localX = position.x;
            vec3 pos;
            pos.x = ca * localX;
            pos.z = sa * localX;
            pos.y = position.y;

            // Compute twisted normal — the plane normal (0,0,1) rotated by twist angle
            vec3 twistedNormal = vec3(-sa, 0.0, ca);
            vNormal = normalize(normalMatrix * twistedNormal);

            vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
            vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;

            gl_Position = projectionMatrix * mvPos;
        }
    `;

    // Fragment shader — textured with lighting
    const fragmentShader = `
        uniform sampler2D uTexture;
        uniform vec2 uPlaneSize;
        uniform vec2 uImageRes;
        uniform float uOpacity;
        uniform vec3 uLightDir;
        uniform float uAmbient;
        uniform float uDiffuse;

        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vWorldPos;

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

            // Lighting — ambient + diffuse from directional light
            vec3 n = normalize(vNormal);
            float diff = max(dot(n, uLightDir), 0.0);
            float lighting = uAmbient + uDiffuse * diff;

            gl_FragColor = vec4(tex.rgb * lighting, uOpacity);
        }
    `;

    let container: HTMLDivElement;

    onMount(() => {
        if (!images.length || !container) return;

        const count = images.length;

        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });
        } catch {
            return;
        }

        const scene = new Scene();
        scene.fog = new FogExp2(0x000000, 0.04);

        const camera = new PerspectiveCamera(40, 1, 0.1, 100);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Light direction (normalized) — upper-right-front
        const lightDir = new Vector3(3, 4, 5).normalize();

        // Strip group — holds all cards, centered vertically
        const stripGroup = new Group();
        stripGroup.rotation.z = STRIP_TILT_Z;
        scene.add(stripGroup);

        // Calculate total strip height and center offset
        const totalHeight = count * CARD_HEIGHT + (count - 1) * CARD_GAP;
        const stripCenter = 0; // we center the group
        const twistPerUnit = TWIST_AMOUNT / totalHeight;

        // Build meshes — stacked vertically like a film strip
        const geometry = new PlaneGeometry(
            CARD_WIDTH,
            CARD_HEIGHT,
            CARD_SEGMENTS_X,
            CARD_SEGMENTS_Y,
        );
        const textureLoader = new TextureLoader();
        const materials: ShaderMaterial[] = [];
        const textures: Texture[] = [];

        for (let i = 0; i < count; i++) {
            const tex = textureLoader.load(images[i].url);
            tex.minFilter = LinearFilter;
            tex.magFilter = LinearFilter;
            textures.push(tex);

            const material = new ShaderMaterial({
                uniforms: {
                    uTwist: { value: twistPerUnit },
                    uOffset: { value: 0 },
                    uStripCenter: { value: stripCenter },
                    uTexture: { value: tex },
                    uPlaneSize: { value: new Vector2(CARD_WIDTH, CARD_HEIGHT) },
                    uImageRes: { value: new Vector2(1, 1) },
                    uOpacity: { value: 1.0 },
                    uLightDir: { value: lightDir },
                    uAmbient: { value: 0.6 },
                    uDiffuse: { value: 0.5 },
                },
                vertexShader,
                fragmentShader,
                transparent: true,
                side: DoubleSide,
            });

            // Update image resolution when texture loads
            if (!tex.userData.materials) {
                tex.userData.materials = [];
                tex.onUpdate = () => {
                    if (tex.image) {
                        const w = tex.image.width || 1;
                        const h = tex.image.height || 1;
                        for (const mat of tex.userData
                            .materials as ShaderMaterial[]) {
                            mat.uniforms.uImageRes.value.set(w, h);
                        }
                    }
                };
            }
            tex.userData.materials.push(material);

            materials.push(material);

            const mesh = new Mesh(geometry, material);

            // Stack vertically, centered around Y=0
            const yPos =
                -totalHeight / 2 +
                CARD_HEIGHT / 2 +
                i * (CARD_HEIGHT + CARD_GAP);
            mesh.position.y = yPos;

            stripGroup.add(mesh);
        }

        // Camera setup — angled to look down the helix
        function updateSize() {
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            camera.position.set(0, 0, CAMERA_Z);
            camera.lookAt(0, 0, 0);
        }

        updateSize();

        resizeObserver = new ResizeObserver(updateSize);
        resizeObserver.observe(container);

        // Mouse gyroscope tilt
        let targetTiltX = 0;
        let targetTiltY = 0;
        let currentTiltX = 0;
        let currentTiltY = 0;

        function onMouseMove(e: MouseEvent) {
            const rect = container.getBoundingClientRect();
            // Map mouse to -1..1 range relative to container center
            const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const my = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            targetTiltX = -my * MOUSE_TILT_AMOUNT;
            targetTiltY = mx * MOUSE_TILT_AMOUNT;
        }

        function onMouseLeave() {
            targetTiltX = 0;
            targetTiltY = 0;
        }

        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);

        // Animation — rotate the helix by advancing uOffset
        let rotationOffset = 0;
        let isVisible = true;

        function animate() {
            if (!isVisible) return;
            cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(animate);

            rotationOffset += ROTATION_SPEED;

            // Lerp mouse tilt
            currentTiltX += (targetTiltX - currentTiltX) * MOUSE_LERP;
            currentTiltY += (targetTiltY - currentTiltY) * MOUSE_LERP;

            // Apply mouse tilt to strip (on top of the Z tilt)
            stripGroup.rotation.x = currentTiltX;
            stripGroup.rotation.y = currentTiltY;

            // Update all materials with the new offset
            for (const mat of materials) {
                mat.uniforms.uOffset.value = rotationOffset;
            }

            renderer.render(scene, camera);
        }

        // Pause animation when off-screen
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) animate();
                else cancelAnimationFrame(animationId);
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        animate();

        // WebGL context loss handling
        renderer.domElement.addEventListener("webglcontextlost", (e: Event) => {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        });
        renderer.domElement.addEventListener("webglcontextrestored", () => {
            animate();
        });

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();
            container?.removeEventListener("mousemove", onMouseMove);
            container?.removeEventListener("mouseleave", onMouseLeave);

            geometry.dispose();
            for (const mat of materials) mat.dispose();
            for (const tex of textures) tex.dispose();
            renderer.dispose();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    });
</script>

<div class="helix-wrapper">
    <div class="helix-vignette top"></div>
    <div class="helix-container" bind:this={container}></div>
    <div class="helix-vignette bottom"></div>
</div>

<style>
    :global(c-helix) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .helix-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .helix-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .helix-container :global(canvas) {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }

    .helix-vignette {
        position: absolute;
        left: 0;
        right: 0;
        height: 15%;
        z-index: 2;
        pointer-events: none;
    }

    .helix-vignette.top {
        top: 0;
        background: linear-gradient(
            to bottom,
            var(--_themes---site--bg--bg-primary) 0%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 80%,
                    transparent
                )
                40%,
            transparent 100%
        );
    }

    .helix-vignette.bottom {
        bottom: 0;
        height: 50%;
        background: linear-gradient(
            to top,
            var(--_themes---site--bg--bg-primary) 0%,
            var(--_themes---site--bg--bg-primary) 20%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 80%,
                    transparent
                )
                55%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 30%,
                    transparent
                )
                80%,
            transparent 100%
        );
    }
</style>
```

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte**
Status: Completed

```
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

        const scene = new Scene();
        const camera = new PerspectiveCamera(45, 1, 0.1, 1000);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
        renderer.domElement.addEventListener("webglcontextlost", (e: Event) => {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        });
        renderer.domElement.addEventListener("webglcontextrestored", () => {
            animate();
        });

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
                            new CustomEvent("reel-navigate", {
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

        // --- Animation loop ---
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
            const host = container?.closest("c-reel");
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
            container?.removeEventListener("mouseleave", onMouseLeave);
            container?.removeEventListener("click", onClick);

            if (scrollZone) {
                scrollZone.removeEventListener("wheel", onWheel);
                scrollZone.removeEventListener("touchstart", onTouchStart);
                scrollZone.removeEventListener("touchmove", onTouchMove);
                scrollZone.removeEventListener("touchend", onTouchEnd);
            }

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
```

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte**
Status: Completed

```
<script lang="ts">
    import { onMount } from "svelte";
    import {
        AmbientLight,
        DirectionalLight,
        DoubleSide,
        FogExp2,
        Group,
        LinearFilter,
        Mesh,
        MeshStandardMaterial,
        NoToneMapping,
        PerspectiveCamera,
        PlaneGeometry,
        SRGBColorSpace,
        Scene,
        TextureLoader,
        WebGLRenderer,
    } from "three";
    import type { Texture } from "three";

    let {
        images = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
    } = $props();

    const config = {
        radius: 1.1,
        cardWidth: 1.65,
        cardHeight: 1.15,
        baseRotationSpeed: 0.006,
        portraitSpeedMultiplier: 1.3,
        tiltLoopSpeed: 0.005,
        tiltLimit: Math.PI,
        baseTilt: {
            tiltX: 0.65,
            tiltZ: 0.25,
        },
        landscape: {
            cameraZ: 9,
            masterRotationZ: 0,
        },
        portrait: {
            cameraZ: 12,
            masterRotationZ: 75 * (Math.PI / 180),
        },
    };

    let container: HTMLDivElement;

    onMount(() => {
        if (!images.length || !container) return;

        const count = images.length;

        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
                alpha: true,
            });
        } catch {
            return;
        }

        const scene = new Scene();
        scene.fog = new FogExp2(0x000000, 0.06);

        const camera = new PerspectiveCamera(35, 1, 0.1, 100);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // Scene hierarchy: orientationGroup > tiltWrapper > mainGroup > meshes
        const orientationGroup = new Group();
        scene.add(orientationGroup);

        const tiltWrapper = new Group();
        orientationGroup.add(tiltWrapper);

        const mainGroup = new Group();
        tiltWrapper.add(mainGroup);

        // Lighting
        const ambient = new AmbientLight(0xffffff, 0.6);
        scene.add(ambient);

        const dirLight = new DirectionalLight(0xffffff, 1.2);
        dirLight.position.set(3, 4, 5);
        scene.add(dirLight);

        // Build meshes
        const geometry = new PlaneGeometry(1, 1);
        const textureLoader = new TextureLoader();
        const materials: MeshStandardMaterial[] = [];
        const textures: Texture[] = [];

        for (let i = 0; i < count; i++) {
            const tex = textureLoader.load(images[i].url);
            tex.minFilter = LinearFilter;
            tex.magFilter = LinearFilter;
            textures.push(tex);

            const material = new MeshStandardMaterial({
                map: tex,
                side: DoubleSide,
                roughness: 0.7,
                metalness: 0.05,
            });
            materials.push(material);

            const mesh = new Mesh(geometry, material);
            const angle = (i / count) * Math.PI * 2;
            const x = Math.sin(angle) * config.radius;
            const z = Math.cos(angle) * config.radius;

            mesh.position.set(x, 0, z);
            mesh.rotation.y = angle + Math.PI / 2;
            mesh.scale.set(config.cardWidth, config.cardHeight, 1);

            mainGroup.add(mesh);
        }

        // Animation state
        let loopValue = -config.tiltLimit;
        let loopDirection = 1;
        let absoluteRotation = 0;
        let currentRotationSpeed = config.baseRotationSpeed;

        function updateOrientation() {
            if (!container) return;
            const { width, height } = container.getBoundingClientRect();
            if (width === 0 || height === 0) return;

            const isPortrait = width / height < 1;
            const settings = isPortrait ? config.portrait : config.landscape;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            camera.position.set(0, 0, settings.cameraZ);
            camera.lookAt(0, 0, 0);

            const calculatedOffsetV =
                (config.radius * Math.sin(config.baseTilt.tiltX)) / 2.2;
            orientationGroup.position.y = calculatedOffsetV;
            orientationGroup.rotation.z = settings.masterRotationZ;

            currentRotationSpeed = isPortrait
                ? config.baseRotationSpeed * config.portraitSpeedMultiplier
                : config.baseRotationSpeed;
        }

        updateOrientation();

        resizeObserver = new ResizeObserver(updateOrientation);
        resizeObserver.observe(container);

        // Animation loop
        function animate() {
            animationId = requestAnimationFrame(animate);

            loopValue += config.tiltLoopSpeed * loopDirection;
            if (loopValue >= config.tiltLimit) {
                loopValue = config.tiltLimit;
                loopDirection = -1;
            } else if (loopValue <= -config.tiltLimit) {
                loopValue = -config.tiltLimit;
                loopDirection = 1;
            }

            absoluteRotation += currentRotationSpeed;

            tiltWrapper.rotation.y = loopValue;
            tiltWrapper.rotation.x = config.baseTilt.tiltX;
            tiltWrapper.rotation.z = config.baseTilt.tiltZ;

            mainGroup.rotation.y = absoluteRotation - loopValue;

            renderer.render(scene, camera);
        }

        animate();

        // WebGL context loss handling
        renderer.domElement.addEventListener("webglcontextlost", (e: Event) => {
            e.preventDefault();
            cancelAnimationFrame(animationId);
        });
        renderer.domElement.addEventListener("webglcontextrestored", () => {
            animate();
        });

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();

            geometry.dispose();
            for (const mat of materials) mat.dispose();
            for (const tex of textures) tex.dispose();
            renderer.dispose();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        };
    });
</script>

<div class="star-container" bind:this={container}></div>

<style>
    :global(c-asterisk) {
        display: block;
        width: 100%;
        height: 100%;
    }

    .star-container {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .star-container :global(canvas) {
        display: block;
        width: 100% !important;
        height: 100% !important;
    }
</style>
```

## Assistant

Now let me also read the Preloader component and the main.ts / register.ts files to understand how components are mounted/unmounted.

**Tool Call: Find `svelte/src/components/global/Preloader.svelte`**
Status: Completed

/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/global/Preloader.svelte

**Tool Call: Find `svelte/src/{main,register}.ts`**
Status: Completed

/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/register.ts
/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/main.ts

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/global/Preloader.svelte**
Status: Completed

```
<script lang="ts">
    import { onMount } from "svelte";

    let {
        title = "",
        images = [],
    }: {
        title?: string;
        images?: Array<{ url: string; alt?: string }>;
    } = $props();

    let preloaderEl = $state<HTMLElement>();
    let footerEl = $state<HTMLElement>();
    let progress = $state(0);

    onMount(() => {
        const gsap = (window as any).gsap;
        if (!gsap) return;

        // Drum timeline: intro(0.6+0.48) + hold(3.0) + outro(0.6+0.48) ≈ 5.16s
        const TOTAL_DURATION = 5.16;

        // GSAP proxy — updates $state on each tick
        const proxy = { value: 0 };
        const updateProgress = () => {
            progress = proxy.value;
        };

        const tl = gsap.timeline();

        // --- Progress bar animation ---

        // Segment 1: 0 → 12%
        tl.to(proxy, {
            value: 12,
            duration: TOTAL_DURATION * 0.15,
            ease: "power2.inOut",
            onUpdate: updateProgress,
        });

        // Segment 2: 12 → 60%
        tl.to(proxy, {
            value: 60,
            duration: TOTAL_DURATION * 0.25,
            ease: "power2.inOut",
            onUpdate: updateProgress,
        });

        // Segment 3: 60 → 84%
        tl.to(proxy, {
            value: 84,
            duration: TOTAL_DURATION * 0.3,
            ease: "power2.inOut",
            onUpdate: updateProgress,
        });

        // Segment 4: 84 → 100%
        tl.to(proxy, {
            value: 100,
            duration: TOTAL_DURATION * 0.25,
            ease: "power2.inOut",
            onUpdate: updateProgress,
        });

        // --- Exit sequence ---

        // Fade out title + progress bar
        tl.to(footerEl, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.out",
            delay: 0.15,
        });

        // Fade out preloader bg, then signal Barba to reveal main content
        tl.to(preloaderEl, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            onStart: () => {
                // Signal page to start revealing main content (overlaps with fade-out)
                window.dispatchEvent(new CustomEvent("preloader-done"));
            },
            onComplete: () => {
                // Remove the custom element — triggers Svelte unmount
                const host = preloaderEl?.closest("c-preloader");
                if (host) host.remove();
            },
        });

        return () => {
            tl.kill();
        };
    });
</script>

<div class="preloader" bind:this={preloaderEl}>
    <div class="preloader-canvas">
        <c-drum images={JSON.stringify(images)}></c-drum>
    </div>

    <div class="preloader-footer" bind:this={footerEl}>
        {#if title}
            <h4>{@html title}</h4>
        {/if}

        <div class="progress-row">
            <div class="progress-bar">
                <div class="progress-thumb" style="width: {progress}%"></div>
            </div>
            <p class="progress-pct">{Math.round(progress)}%</p>
        </div>
    </div>
</div>

<style>
    :global(c-preloader) {
        display: block;
        position: fixed;
        inset: 0;
        z-index: 9999;
        pointer-events: none;
    }

    .preloader {
        width: 100%;
        height: 100%;
        background: var(--_themes---site--bg--bg-primary, #020508);
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: auto;
    }

    .preloader-canvas {
        width: 100%;
        height: 80%;
    }

    .preloader-footer {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        right: 2rem;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    h4 {
        font-family: var(--h4--font-family, var(--typeface--primary));
        font-size: var(--h4--font-size, 1rem);
        line-height: var(--h4--line-height, 1.3em);
        letter-spacing: var(--h4--letter-spacing, 0);
        font-weight: 400;
        color: var(--_themes---neutrals--white, #fff);
        margin: 0;
    }

    h4 :global(em),
    h4 :global(i),
    h4 :global(span) {
        font-size: 1rem;
        font-family: var(--typeface--tertiary);
        font-style: italic;
    }

    .progress-row {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .progress-bar {
        width: 400px;
        height: 2px;
        background: rgba(255, 255, 255, 0.2);
        position: relative;
        overflow: hidden;
    }

    .progress-thumb {
        height: 100%;
        width: 0%;
        background: var(--_themes---neutrals--white, #fff);
        will-change: width;
    }

    .progress-pct {
        font-family: var(--typeface--primary, "Inter Display", sans-serif);
        font-size: 0.75rem;
        color: var(--_themes---neutrals--white, #fff);
        margin: 0;
        min-width: 3ch;
        text-align: right;
        font-variant-numeric: tabular-nums;
    }
</style>
```

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/register.ts**
Status: Completed

```
import { mount, unmount } from 'svelte';
import type { Component } from 'svelte';

/**
 * Registers a Svelte 5 component as a custom element.
 *
 * Supports two methods of passing props:
 * 1. Attributes on the element (with automatic JSON parsing)
 * 2. A sibling <script type="application/json" data-for="[id]"> element
 */
export function registerSvelteElement(
  tag: string,
  ComponentClass: Component<any>,
  propNames: string[] = []
) {
  class SvelteElement extends HTMLElement {
    private _component: Record<string, any> | null = null;

    connectedCallback() {
      // Guard against double-mounting
      if (this._component) return;

      // Clear any existing content
      this.innerHTML = '';

      // Try to get props from a sibling script tag first (avoids attribute duplication)
      let props: Record<string, any> = {};
      const id = this.getAttribute('id');

      if (id) {
        const script = document.querySelector(`script[data-for="${id}"]`);
        if (script) {
          try {
            props = JSON.parse(script.textContent || '{}');
            script.remove();
          } catch (e) {
            console.warn(`Failed to parse JSON props for #${id}:`, e);
          }
        }
      }

      // Fallback to attributes if no script tag props found
      if (Object.keys(props).length === 0) {
        for (const name of propNames) {
          const attr = this.getAttribute(name);
          if (attr !== null) {
            // Try to parse as JSON (for arrays/objects), fall back to string
            try {
              props[name] = JSON.parse(attr);
            } catch {
              props[name] = attr;
            }
          }
        }
      }

      // Mount the Svelte 5 component
      this._component = mount(ComponentClass, {
        target: this,
        props
      });
    }

    disconnectedCallback() {
      if (this._component) {
        unmount(this._component);
        this._component = null;
      }
    }
  }

  customElements.define(tag, SvelteElement);
}
```

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/main.ts**
Status: Completed

```
/**
 * Svelte Web Components Entry Point
 *
 * Uses manual wrapper pattern with Svelte 5 mount/unmount API
 * to avoid timing issues with shadow: "none" custom elements
 */

import { registerSvelteElement } from "./register";

// Global components
import Header from "./components/global/Header.svelte";
import Footer from "./components/global/Footer.svelte";
import Preloader from "./components/global/Preloader.svelte";

// Layout components
import LayoutIndex from "./components/layout/LayoutIndex.svelte";
import LayoutAbout from "./components/layout/LayoutAbout.svelte";
import Layout404 from "./components/layout/Layout404.svelte";

// UI components
import Button from "./components/ui/Button.svelte";
import IndexCard from "./components/ui/IndexCard.svelte";
import Asterisk from "./components/ui/Asterisk.svelte";
import Helix from "./components/ui/Helix.svelte";
import Drum from "./components/ui/Drum.svelte";
import Reel from "./components/ui/Reel.svelte";

// Block components
import BlockHeader from "./components/blocks/BlockHeader.svelte";
import BlockImage from "./components/blocks/BlockImage.svelte";
import BlockText from "./components/blocks/BlockText.svelte";
import BlockGrid from "./components/blocks/BlockGrid.svelte";
import BlockFullBleed from "./components/blocks/BlockFullBleed.svelte";

// Register global components
registerSvelteElement("c-header", Header, ["rootpath", "links"]);
registerSvelteElement("c-footer", Footer, ["fixed", "links"]);
registerSvelteElement("c-preloader", Preloader, ["title", "images"]);

// Register layout components
registerSvelteElement("l-home", LayoutIndex, [
  "eyebrow",
  "title",
  "buttonlabel",
  "buttonhref",
  "projects",
]);

// Register UI components
registerSvelteElement("c-button", Button, ["href", "label", "active"]);
registerSvelteElement("c-indexcard", IndexCard, [
  "href",
  "title",
  "backgroundimage",
  "overlayimage",
]);
registerSvelteElement("c-asterisk", Asterisk, ["images"]);
registerSvelteElement("c-helix", Helix, ["images"]);
registerSvelteElement("c-drum", Drum, ["images"]);
registerSvelteElement("c-reel", Reel, ["projects"]);

// Register block components
registerSvelteElement("b-header", BlockHeader, [
  "title",
  "description",
  "layout",
]);
registerSvelteElement("b-img", BlockImage, ["images", "spacing"]);
registerSvelteElement("b-text", BlockText, ["columns", "items"]);
registerSvelteElement("b-grid", BlockGrid, ["columns", "items"]);
registerSvelteElement("b-fullbleed", BlockFullBleed, [
  "image",
  "alt",
  "caption",
]);

registerSvelteElement("l-about", LayoutAbout, ["images", "items"]);

registerSvelteElement("l-404", Layout404, [
  "title",
  "message",
  "buttonlabel",
  "buttonhref",
]);

console.log("Svelte components loaded");
```

## Assistant



Now I have a complete picture of all 5 Three.js components. Let me do a thorough audit before making changes.Here's my comprehensive audit findings across all 5 Three.js components:

## Memory Leak Audit Results

### Critical Issues (present in ALL components):

1. **No guard against re-mounting / double animation loops** — When navigating rapidly (e.g. with Barba.js page transitions), `connectedCallback` fires on re-insert but there's no protection against the `onMount` closure running while a previous instance's resources haven't been fully GC'd. The `register.ts` does guard against double-mount of the Svelte component, but the Three.js resources inside `onMount` have no "already disposed" flag, so if `unmount` is called but the RAF callback fires one last time before cancellation takes effect, the renderer is used after disposal.

2. **`cancelAnimationFrame` race condition** — In every component, the pattern is `animationId = requestAnimationFrame(animate)` at the top of `animate()`, but cleanup calls `cancelAnimationFrame(animationId)`. If the RAF callback is already queued and executes between `cancelAnimationFrame` and the actual frame, the renderer renders after disposal. Need a `disposed` flag.

3. **WebGL context event listeners never removed** — Every component adds `webglcontextlost` and `webglcontextrestored` listeners to `renderer.domElement` but never removes them in cleanup.

4. **Scene children not removed before dispose** — Geometries and materials are disposed, but meshes are never removed from the scene/group. The scene graph still references them. The renderer is disposed, but the scene object and its children tree remain in memory until GC — and if anything else holds a reference to the scene, it leaks everything.

5. **`texture.userData.materials` creates circular-ish references** — Textures hold references to materials via `userData.materials`, and materials hold references to textures via uniforms. This doesn't prevent GC in theory, but it's messy.

### Per-Component Issues:

**Drum.svelte:**
- `resizeTimer` (setTimeout) is never cleared on cleanup — timer could fire after dispose
- No `IntersectionObserver` disconnect guard (it does disconnect, but the animate function can still be called from the restored event)

**Helix.svelte:**
- Context loss listeners added AFTER `animate()` starts — if context is lost during setup, it's missed
- No `disposed` flag means `webglcontextrestored` handler restarts animation on a disposed renderer

**Asterisk.svelte:**
- No `IntersectionObserver` — animates continuously even when off-screen (wastes GPU)
- No `disposed` flag on context restored handler
- Lights (AmbientLight, DirectionalLight) are never disposed

**Reel.svelte:**
- Nearly identical to IndexWheel — same issues
- Animation loop runs unconditionally (no IntersectionObserver pause)

**IndexWheel.svelte:**
- Animation loop runs unconditionally (no IntersectionObserver pause) — both this and Reel are drum carousels that always animate even when scrolled out of view

### Shader Performance Issues:

6. **`transparent: true` on materials that don't need alpha blending** — Helix uses `transparent: true` but computes `uOpacity` that is always 1.0. IndexWheel/Reel do need it for hover effects but could benefit from disabling it when opacity is 1.0.

7. **Camera far plane too large** — IndexWheel and Reel use `far: 1000` but the scene is only ~30 units deep. This wastes depth buffer precision.

Now let me fix all of these. I'll work through each component systematically.### Fixing IndexWheel.svelte

Key fixes:
- Add `disposed` flag to prevent post-cleanup rendering
- Add IntersectionObserver to pause when off-screen
- Remove scene children before disposing
- Remove context loss event listeners in cleanup
- Clear texture.userData.materials references
- Tighten camera far plane

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
```
                window.removeEventListener("resize", checkMobile);
            };
        }

        let disposed = false;

        const scene = new Scene();
        const camera = new PerspectiveCamera(45, 1, 0.1, 50);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```


## Assistant

Now add context loss handler cleanup and the `disposed` guard:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
```
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
        renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);

        const drum = new Group();
        scene.add(drum);

```


## Assistant

Now add IntersectionObserver to pause animation when off-screen, and add the `disposed` guard to the animate loop:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
```
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

```


## Assistant

Now fix the cleanup function to be comprehensive:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
```
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
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
```
                scrollZone.removeEventListener("touchmove", onTouchMove);
                scrollZone.removeEventListener("touchend", onTouchEnd);
            }

            renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
            renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);

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
```


## Assistant

### Fixing Drum.svelte

Key fixes:
- Add `disposed` flag
- Clear resize timer on cleanup
- Named context loss handlers + removal
- Clear scene children
- Clear texture.userData.materials
- Force context loss
- Guard animate against disposed state

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```

        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;
        let disposed = false;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```
            return;
        }

        const scene = new Scene();
        const camera = new PerspectiveCamera(40, 1, 0.1, 30);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```


**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```
        renderer.setClearColor(0x000000, 0);
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
        renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);

        const drum = new Group();
        drum.position.y = 0.5;
        drum.rotation.z = 10 * (Math.PI / 180);
```


## Assistant

Now fix the animate function to guard against disposed state:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```
            return 1.0 - easeInOutCubic(outroT);
        }

        function animate() {
            if (!isVisible || disposed) return;
            cancelAnimationFrame(animationId);

            const now = performance.now() / 1000;
            if (startTime < 0) startTime = now;
```


## Assistant

Now fix the IntersectionObserver to also check disposed:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```
        // Pause animation when off-screen
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !disposed) animate();
                else cancelAnimationFrame(animationId);
            },
            { threshold: 0 },
        );
```


## Assistant

Now fix the cleanup to be comprehensive:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```
        animate();

        // --- Cleanup ---
        return () => {
            disposed = true;
            cancelAnimationFrame(animationId);
            clearTimeout(resizeTimer);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
            renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);

            // Remove scene children to break references
            drum.clear();
            scene.clear();

            // Dispose GPU resources
            geometry.dispose();
            for (const mat of materials) mat.dispose();
            textureCache.forEach((tex) => {
                tex.userData.materials = null;
                tex.dispose();
            });
            textureCache.clear();
            materials.length = 0;

            renderer.dispose();
            renderer.forceContextLoss();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
```


## Assistant

### Fixing Helix.svelte

Key fixes:
- Add `disposed` flag
- Move context loss handlers before `animate()` call
- Named handlers for removal
- Clear scene children
- Clear texture.userData.materials
- Force context loss
- Tighten camera far plane

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```

        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;
        let disposed = false;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```

        const scene = new Scene();
        scene.fog = new FogExp2(0x000000, 0.04);

        const camera = new PerspectiveCamera(40, 1, 0.1, 30);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
```


## Assistant

Now add context loss handlers right after the container append (before any animate call), and replace the old ones at the bottom:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
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
        renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);

        // Light direction (normalized) — upper-right-front
        const lightDir = new Vector3(3, 4, 5).normalize();

        // Strip group — holds all cards, centered vertically
```


## Assistant

Now fix the animate function to check disposed:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
        let rotationOffset = 0;
        let isVisible = true;

        function animate() {
            if (!isVisible || disposed) return;
            cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(animate);

            rotationOffset += ROTATION_SPEED;
```


## Assistant

Fix IntersectionObserver to check disposed:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
        // Pause animation when off-screen
        const intersectionObserver = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible && !disposed) animate();
                else cancelAnimationFrame(animationId);
            },
            { threshold: 0 },
        );
```


## Assistant

Now remove the old inline context loss handlers and fix cleanup:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
        intersectionObserver.observe(container);

        animate();

        // Cleanup
        return () => {
            disposed = true;
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();
            container?.removeEventListener("mousemove", onMouseMove);
            container?.removeEventListener("mouseleave", onMouseLeave);

            renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
            renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);

            // Remove scene children to break references
            stripGroup.clear();
            scene.clear();

            // Dispose GPU resources
            geometry.dispose();
            for (const mat of materials) mat.dispose();
            for (const tex of textures) {
                tex.userData.materials = null;
                tex.dispose();
            }
            materials.length = 0;
            textures.length = 0;

            renderer.dispose();
            renderer.forceContextLoss();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
```


## Assistant

### Fixing Reel.svelte

Same pattern as IndexWheel — add `disposed` flag, IntersectionObserver, named context handlers, comprehensive cleanup.

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
```
                window.removeEventListener("resize", checkMobile);
            };
        }

        let disposed = false;

        const scene = new Scene();
        const camera = new PerspectiveCamera(45, 1, 0.1, 50);
        camera.position.set(0, 0, CAMERA_Z);
        camera.lookAt(0, 0, 0);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
```


**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
```
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
        renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);

        const drum = new Group();
        scene.add(drum);

```


## Assistant

Add IntersectionObserver and disposed guard to animate:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
```
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

```


## Assistant

Now fix the cleanup:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
```
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
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
```
                scrollZone.removeEventListener("touchmove", onTouchMove);
                scrollZone.removeEventListener("touchend", onTouchEnd);
            }

            renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
            renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);

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
```


## Assistant

### Fixing Asterisk.svelte

This one has the most issues — no IntersectionObserver at all (always animates), lights not disposed, no disposed flag.

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte
```

        let renderer: WebGLRenderer;
        let animationId: number;
        let resizeObserver: ResizeObserver | null = null;
        let disposed = false;

        try {
            renderer = new WebGLRenderer({
                antialias: true,
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte
```

        const scene = new Scene();
        scene.fog = new FogExp2(0x000000, 0.06);

        const camera = new PerspectiveCamera(35, 1, 0.1, 30);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
```


## Assistant

Add context loss handlers and IntersectionObserver right after container append:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte
```
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
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
        renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);

        // Scene hierarchy: orientationGroup > tiltWrapper > mainGroup > meshes
        const orientationGroup = new Group();
        scene.add(orientationGroup);

```


## Assistant

Now add IntersectionObserver and fix the animate function:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte
```

        resizeObserver = new ResizeObserver(updateOrientation);
        resizeObserver.observe(container);

        // Pause animation when off-screen
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

        // Animation loop
        function animate() {
            if (!isVisible || disposed) return;
            animationId = requestAnimationFrame(animate);

            loopValue += config.tiltLoopSpeed * loopDirection;
            if (loopValue >= config.tiltLimit) {
```


## Assistant

Now fix the cleanup — remove old context handlers and add comprehensive disposal including lights:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Asterisk.svelte
```
        }

        animate();

        // Cleanup
        return () => {
            disposed = true;
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            renderer.domElement.removeEventListener("webglcontextlost", onContextLost);
            renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);

            // Remove scene children to break references
            mainGroup.clear();
            tiltWrapper.clear();
            orientationGroup.clear();
            scene.clear();

            // Dispose GPU resources
            geometry.dispose();
            for (const mat of materials) mat.dispose();
            for (const tex of textures) tex.dispose();
            materials.length = 0;
            textures.length = 0;

            renderer.dispose();
            renderer.forceContextLoss();

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
```


## Assistant

### Shader Performance Optimization

Now let me look at the shaders for performance opportunities. Let me re-read the skill's shader-specific rules for guidance.

**Tool Call: Find `.claude/skills/three-best-practices/rules/shader-*.md`**
Status: Completed

/home/austinjxseph/GitHub/austinjxseph/ornithopter/.claude/skills/three-best-practices/rules/shader-mobile.md

**Tool Call: Read /home/austinjxseph/GitHub/austinjxseph/ornithopter/.claude/skills/three-best-practices/rules/shader-mobile.md**
Status: Completed

````
# Shader Optimization for Mobile

> Source: [100 Three.js Tips - Utsubo](https://www.utsubo.com/blog/threejs-best-practices-100-tips)

Mobile GPUs have specific constraints that require careful shader optimization.

## Use `mediump` Precision

Mobile processes `mediump` ~2x faster than `highp`:

```glsl
precision mediump float;

// Or per-variable
mediump vec3 color;
highp float depth; // Use highp only when necessary
```

## Minimize Varying Variables

Keep under 3 varyings for mobile GPUs by packing data:

```glsl
// BAD: 5 varyings
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vColor;
varying float vAlpha;

// GOOD: 2 varyings with packed data
varying vec4 vPositionAlpha; // xyz = position, w = alpha
varying vec4 vNormalUv;      // xy = normal.xy, zw = uv
// Reconstruct normal.z in fragment shader
```

## Replace Conditionals with `mix()` and `step()`

Branching is expensive on mobile GPUs:

```glsl
// BAD: Conditional
if (value > 0.5) {
  color = colorA;
} else {
  color = colorB;
}

// GOOD: Branchless
color = mix(colorB, colorA, step(0.5, value));
```

## Pack Data into RGBA Channels

Reduces texture fetches by 75%:

```glsl
// BAD: 4 texture fetches
float value1 = texture2D(tex1, uv).r;
float value2 = texture2D(tex2, uv).r;
float value3 = texture2D(tex3, uv).r;
float value4 = texture2D(tex4, uv).r;

// GOOD: 1 texture fetch
vec4 data = texture2D(dataTex, uv);
float value1 = data.r;
float value2 = data.g;
float value3 = data.b;
float value4 = data.a;
```

## Avoid Dynamic Loops

Use fixed loop bounds to enable compiler optimization:

```glsl
// BAD: Dynamic loop
for (int i = 0; i < numLights; i++) {
  // ...
}

// GOOD: Fixed loop with early exit
#define MAX_LIGHTS 4
for (int i = 0; i < MAX_LIGHTS; i++) {
  if (i >= numLights) break;
  // ...
}
```

## Avoid `discard`

Use `alphaTest` instead:

```javascript
// Instead of discard in shader
material.alphaTest = 0.5;
material.transparent = false; // Avoid transparent sorting
```

## Use TSL for Cross-Platform

TSL automatically optimizes for the target platform:

```javascript
import { color, positionLocal, sin, time } from 'three/tsl';

const material = new THREE.MeshStandardNodeMaterial();
material.colorNode = color(1, 0, 0).mul(sin(time).mul(0.5).add(0.5));
```

## Precompute on CPU

Move constant calculations out of shaders:

```javascript
// CPU: Compute once
const inverseViewMatrix = camera.matrixWorld.clone();
material.uniforms.uInverseView = { value: inverseViewMatrix };

// Update only when camera moves
camera.addEventListener('change', () => {
  material.uniforms.uInverseView.value.copy(camera.matrixWorld);
});
```

## Mobile Shader Checklist

- [ ] Use `mediump` precision by default
- [ ] Limit varyings to 3 or fewer
- [ ] Pack data into vec4 where possible
- [ ] Replace conditionals with mix/step
- [ ] Use fixed loop bounds
- [ ] Pack multiple values into single texture
- [ ] Avoid `discard`, use `alphaTest`
- [ ] Precompute constants on CPU
- [ ] Use TSL for automatic optimization
````

**Tool Call: Find `.claude/skills/three-best-practices/rules/render-*.md`**
Status: Completed

/home/austinjxseph/GitHub/austinjxseph/ornithopter/.claude/skills/three-best-practices/rules/render-delta-time.md

## Assistant

The shaders in this project are already fairly lean. Let me apply the key optimizations:

1. **Add `precision mediump float`** to all fragment shaders (the vertex shaders can stay highp since Three.js defaults to it and position precision matters)
2. **Replace the conditional in Helix's fragment shader** with a branchless `mix`/`step`
3. **Replace the conditional in Drum's fragment shader** with branchless `mix`/`step`

Let me also check if any shaders unnecessarily use `transparent: true`:

Looking at the components:
- **IndexWheel**: `transparent: true` — needed for opacity hover effects
- **Reel**: `transparent: true` — needed for opacity hover effects  
- **Helix**: `transparent: true` — but `uOpacity` is always 1.0, so it's unnecessary overhead
- **Drum**: no `transparent` — good, uses RGB fade instead of alpha
- **Asterisk**: uses `MeshStandardMaterial` not custom shaders

Let me apply the shader optimizations:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/IndexWheel.svelte
```
    `;

    // Fragment shader - texture with opacity
    const fragmentShader = `
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;
```


**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Reel.svelte
```
    `;

    // Fragment shader - texture with opacity
    const fragmentShader = `
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uOpacity;
```


## Assistant

Now fix Drum's fragment shader — add mediump and replace the conditional with branchless:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```
    `;

    // Fragment shader — texture mapping
    const fragmentShader = `
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;
        uniform float uScaleY;
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Drum.svelte
```

            vec2 uv = CoverUV(maskedUv, uPlaneSize, uImageRes);
            vec4 tex = texture2D(uTexture, uv);

            // Per-pixel dim past the horizon: branchless (avoids GPU branch divergence)
            float fade = mix(0.3, 1.0, step(0.0, vDepth));
            gl_FragColor = vec4(tex.rgb * fade, tex.a);
        }
    `;

```


## Assistant

Now fix Helix's fragment shader — add mediump and remove unnecessary `transparent: true`:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
    `;

    // Fragment shader — textured with lighting
    const fragmentShader = `
        precision mediump float;

        uniform sampler2D uTexture;
        uniform vec2 uPlaneSize;
        uniform vec2 uImageRes;
        uniform vec3 uLightDir;
        uniform float uAmbient;
        uniform float uDiffuse;

        varying vec2 vUv;
        varying vec3 vNormal;

        vec2 CoverUV(vec2 u, vec2 s, vec2 i) {
            float rs = s.x / s.y;
            float ri = i.x / i.y;
```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
            vec3 n = normalize(vNormal);
            float diff = max(dot(n, uLightDir), 0.0);
            float lighting = uAmbient + uDiffuse * diff;

            gl_FragColor = vec4(tex.rgb * lighting, tex.a);
        }
    `;

    let container: HTMLDivElement;
```


## Assistant



Now I need to also update the Helix material creation to remove the unused `uOpacity` uniform and the unused `vWorldPos` varying from the vertex shader, and remove `transparent: true`:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
        uniform float uStripCenter;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
            vUv = uv;

```


Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
            // Compute twisted normal — the plane normal (0,0,1) rotated by twist angle
            vec3 twistedNormal = vec3(-sa, 0.0, ca);
            vNormal = normalize(normalMatrix * twistedNormal);

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    // Fragment shader — textured with lighting
```


## Assistant

Now remove `uOpacity` from the material uniforms and `transparent: true`:

**Tool Call: Edit `/home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte`**
Status: Completed

Diff: /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte
```
                    uStripCenter: { value: stripCenter },
                    uTexture: { value: tex },
                    uPlaneSize: { value: new Vector2(CARD_WIDTH, CARD_HEIGHT) },
                    uImageRes: { value: new Vector2(1, 1) },
                    uLightDir: { value: lightDir },
                    uAmbient: { value: 0.6 },
                    uDiffuse: { value: 0.5 },
                },
                vertexShader,
                fragmentShader,
                side: DoubleSide,
            });

            // Update image resolution when texture loads
```


## Assistant

Also need to remove the unused `Vector3` import from Helix since `vWorldPos` is gone... wait, `lightDir` still uses it. Let me check.

**Tool Call: grep "Vector3" /home/austinjxseph/GitHub/austinjxseph/ornithopter/svelte/src/components/ui/Helix.svelte**
Status: Completed

17:        Vector3,
159:        const lightDir = new Vector3(3, 4, 5).normalize();

## Assistant

Good, `Vector3` is still needed for `lightDir`. Now let me build to verify everything compiles.
