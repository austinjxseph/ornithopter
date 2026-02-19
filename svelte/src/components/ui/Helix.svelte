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

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
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

            gl_FragColor = vec4(tex.rgb * lighting, tex.a);
        }
    `;

    let container: HTMLDivElement;

    onMount(() => {
        if (!images.length || !container) return;

        const count = images.length;

        let renderer: WebGLRenderer;
        let animationId = 0;
        let isAnimating = false;
        let resizeObserver: ResizeObserver | null = null;
        let disposed = false;

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

        const camera = new PerspectiveCamera(40, 1, 0.1, 30);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
        renderer.outputColorSpace = SRGBColorSpace;
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);

        // WebGL context loss handling
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
                    uLightDir: { value: lightDir },
                    uAmbient: { value: 0.6 },
                    uDiffuse: { value: 0.5 },
                },
                vertexShader,
                fragmentShader,
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

        function animate() {
            if (!isVisible || disposed) {
                isAnimating = false;
                return;
            }
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
                if (isVisible && !disposed) startLoop();
                else stopLoop();
            },
            { threshold: 0 },
        );
        intersectionObserver.observe(container);

        startLoop();

        // Cleanup
        return () => {
            disposed = true;
            stopLoop();
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();
            container?.removeEventListener("mousemove", onMouseMove);
            container?.removeEventListener("mouseleave", onMouseLeave);

            renderer.domElement.removeEventListener(
                "webglcontextlost",
                onContextLost,
            );
            renderer.domElement.removeEventListener(
                "webglcontextrestored",
                onContextRestored,
            );

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
