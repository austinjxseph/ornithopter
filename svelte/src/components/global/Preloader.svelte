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
