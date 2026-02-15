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
        scene.fog = new FogExp2(0x000000, 0.06);

        const camera = new PerspectiveCamera(35, 1, 0.1, 30);

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = NoToneMapping;
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
        renderer.domElement.addEventListener(
            "webglcontextrestored",
            onContextRestored,
        );

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

        // Cleanup
        return () => {
            disposed = true;
            cancelAnimationFrame(animationId);
            if (resizeObserver) resizeObserver.disconnect();
            intersectionObserver.disconnect();

            renderer.domElement.removeEventListener(
                "webglcontextlost",
                onContextLost,
            );
            renderer.domElement.removeEventListener(
                "webglcontextrestored",
                onContextRestored,
            );

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
