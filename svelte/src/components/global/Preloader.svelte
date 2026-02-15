<script lang="ts">
    import { onMount } from "svelte";

    let {
        title = "",
        images = [],
    }: {
        title?: string;
        images?: Array<{ url: string; alt?: string }>;
    } = $props();

    let preloaderEl: HTMLElement;
    let footerEl: HTMLElement;
    let thumbEl: HTMLElement;
    let pctEl: HTMLElement;
    let progressObj = { value: 0 };

    onMount(() => {
        const gsap = (window as any).gsap;
        if (!gsap) return;

        // Hide only main content until preloader is done
        // Header/footer stay visible (preloader bg covers them anyway)
        const mainEl = document.querySelector(".page > main.main");
        if (mainEl) {
            gsap.set(mainEl, { opacity: 0 });
        }

        // Drum timeline: intro(0.6+0.48) + hold(3.0) + outro(0.6+0.48) ≈ 5.16s
        const TOTAL_DURATION = 5.16;

        const tl = gsap.timeline();

        // --- Progress bar animation ---

        // Segment 1: 0 → 12%
        tl.to(progressObj, {
            value: 12,
            duration: TOTAL_DURATION * 0.15,
            ease: "power2.inOut",
            onUpdate: updateDisplay,
        });

        // Segment 2: 12 → 60%
        tl.to(progressObj, {
            value: 60,
            duration: TOTAL_DURATION * 0.25,
            ease: "power2.inOut",
            onUpdate: updateDisplay,
        });

        // Segment 3: 60 → 84%
        tl.to(progressObj, {
            value: 84,
            duration: TOTAL_DURATION * 0.3,
            ease: "power2.inOut",
            onUpdate: updateDisplay,
        });

        // Segment 4: 84 → 100%
        tl.to(progressObj, {
            value: 100,
            duration: TOTAL_DURATION * 0.25,
            ease: "power2.inOut",
            onUpdate: updateDisplay,
        });

        // --- Exit sequence ---

        // Fade out title + progress bar
        tl.to(footerEl, {
            opacity: 0,
            duration: 0.25,
            ease: "power2.out",
            delay: 0.15,
        });

        // Fade out preloader bg, fade in main content simultaneously
        tl.to(preloaderEl, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                // Remove the custom element — triggers Svelte unmount
                // which calls Drum's cleanup (geometry, materials, textures, renderer)
                const host = preloaderEl.closest("c-preloader");
                if (host) host.remove();
            },
        });

        // Fade in main content overlapping with preloader fade
        if (mainEl) {
            tl.to(
                mainEl,
                {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                },
                "<0.1",
            );
        }

        function updateDisplay() {
            const v = Math.round(progressObj.value);
            if (thumbEl) thumbEl.style.width = progressObj.value + "%";
            if (pctEl) pctEl.textContent = v + "%";
        }

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
                <div class="progress-thumb" bind:this={thumbEl}></div>
            </div>
            <p class="progress-pct" bind:this={pctEl}>0%</p>
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
