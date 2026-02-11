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
    const DRUM_RADIUS = 4.0;
    const CAMERA_Z = 10;
    const ROTATION_SPEED = 0.003;
    const MOUSE_TILT = 0.15;
    const MOUSE_LERP = 0.05;

    // Vertex shader — wraps each card onto a cylinder around Y-axis
    const vertexShader = `
        uniform float uRadius;
        uniform float uBaseAngle;

        varying vec2 vUv;

        void main() {
            vUv = uv;

            float angleOffset = position.x / uRadius;
            float angle = uBaseAngle + angleOffset;

            vec3 pos;
            pos.x = sin(angle) * uRadius;
            pos.y = position.y;
            pos.z = cos(angle) * uRadius;

            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
    `;

    // Fragment shader — texture mapping
    const fragmentShader = `
        uniform sampler2D uTexture;
        uniform vec2 uImageRes;
        uniform vec2 uPlaneSize;

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
            gl_FragColor = tex;
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
        renderer.domElement.addEventListener("webglcontextlost", (e) => {
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

        // 16 X-segments (wrapping axis), 1 Y-segment
        const geometry = new PlaneGeometry(CARD_WIDTH, CARD_HEIGHT, 16, 1);

        // Fill drum with meshes around full 360°
        const cardCount = images.length;
        const cardArc = CARD_WIDTH / DRUM_RADIUS;
        const MESH_COUNT = Math.ceil(TWO_PI / (cardArc + 0.04));
        const angleStep = TWO_PI / MESH_COUNT;

        // Cache textures by image index
        const textureCache = new Map<number, Texture>();
        function getTexture(imageIndex: number): Texture {
            if (textureCache.has(imageIndex))
                return textureCache.get(imageIndex)!;
            const tex = textureLoader.load(images[imageIndex].url);
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

            // Set uImageRes when texture loads
            if (!texture.userData.materials) {
                texture.userData.materials = [];
                texture.onUpdate = () => {
                    if (texture.image) {
                        const w = texture.image.width || 1;
                        const h = texture.image.height || 1;
                        for (const mat of texture.userData
                            .materials as ShaderMaterial[]) {
                            mat.uniforms.uImageRes.value.set(w, h);
                        }
                    }
                };
            }
            texture.userData.materials.push(material);

            const mesh = new Mesh(geometry, material);
            drum.add(mesh);
            materials.push(material);
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

        // --- Mouse parallax tilt ---
        let targetTiltX = 0;
        let targetTiltY = 0;
        let currentTiltX = 0;
        let currentTiltY = 0;

        function onMouseMove(e: MouseEvent) {
            const rect = container.getBoundingClientRect();
            const mx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            const my = ((e.clientY - rect.top) / rect.height) * 2 - 1;
            targetTiltX = -my * MOUSE_TILT;
            targetTiltY = mx * MOUSE_TILT;
        }

        function onMouseLeave() {
            targetTiltX = 0;
            targetTiltY = 0;
        }

        container.addEventListener("mousemove", onMouseMove);
        container.addEventListener("mouseleave", onMouseLeave);

        // --- Animation — auto-rotate by advancing uBaseAngle ---
        let rotationOffset = 0;
        let isVisible = true;

        function animate() {
            if (!isVisible) return;
            animationId = requestAnimationFrame(animate);

            rotationOffset += ROTATION_SPEED;

            // Lerp mouse tilt
            currentTiltX += (targetTiltX - currentTiltX) * MOUSE_LERP;
            currentTiltY += (targetTiltY - currentTiltY) * MOUSE_LERP;
            drum.rotation.x = currentTiltX;
            drum.rotation.y = currentTiltY;

            // Update all materials with rotation
            for (let i = 0; i < MESH_COUNT; i++) {
                const baseSeatAngle = -i * angleStep;
                materials[i].uniforms.uBaseAngle.value =
                    baseSeatAngle + rotationOffset;
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
            container?.removeEventListener("mousemove", onMouseMove);
            container?.removeEventListener("mouseleave", onMouseLeave);

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
