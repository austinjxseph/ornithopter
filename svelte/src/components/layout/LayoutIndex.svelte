<script lang="ts">
    import { onMount } from "svelte";

    let {
        eyebrow = "Available for freelance work",
        title = "",
        buttonlabel = "Get in touch",
        buttonhref = "#",
        projects = [],
    }: {
        eyebrow?: string;
        title?: string;
        buttonlabel?: string;
        buttonhref?: string;
        projects?: Array<{
            url: string;
            title: string;
            thumbnail_base: string;
            thumbnail_overlay: string;
        }>;
    } = $props();

    let trackEl: HTMLDivElement;
    let slotRoot: HTMLElement;

    const wheelId = "indexwheel-" + Math.random().toString(36).slice(2, 8);

    // Slot config
    const ROW_HEIGHT = 32;
    const TOP_OFFSET = ROW_HEIGHT; // push active row below the top fade zone
    const TWEEN_DURATION = 0.35;
    const cardCount = $derived(projects.length);
    // 3 copies for infinite scroll runway
    const slotItems = $derived(
        Array.from({ length: 3 }, () => projects).flat(),
    );

    let lastIndex = -1;
    let continuousPos = 0;

    onMount(() => {
        if (cardCount === 0) return;

        // Resolve GSAP targets from data attributes scoped to this component
        slotRoot = trackEl.closest(".section-hr")!;
        const innerEl = slotRoot.querySelector("[data-slot-inner]");
        const itemEls = slotRoot.querySelectorAll("[data-slot-item]");

        if (!innerEl || !itemEls.length) return;

        continuousPos = cardCount;

        function posToY(pos: number) {
            return -pos * ROW_HEIGHT + TOP_OFFSET;
        }

        // Set initial position instantly
        gsap.set(innerEl, { y: posToY(continuousPos) });
        updateOpacities(continuousPos);

        function updateOpacities(pos: number) {
            itemEls.forEach((el, i) => {
                const dist = i - pos;
                if (Math.abs(dist) > 3) {
                    gsap.set(el, { opacity: 0 });
                    return;
                }
                let opacity = 0;
                if (dist === -1) opacity = 0.2;
                else if (dist === 0) opacity = 1;
                else if (dist === 1) opacity = 0.4;
                else if (dist === 2) opacity = 0.15;
                else if (dist === 3) opacity = 0.05;
                gsap.to(el, {
                    opacity,
                    duration: TWEEN_DURATION,
                    ease: "power2.out",
                    overwrite: true,
                });
            });
        }

        function resetToCenter() {
            const normalised =
                ((continuousPos % cardCount) + cardCount) % cardCount;
            const centerPos = cardCount + normalised;
            if (continuousPos === centerPos) return;
            gsap.killTweensOf(innerEl);
            gsap.set(innerEl, { y: posToY(centerPos) });
            continuousPos = centerPos;
        }

        function onActiveCard(e: Event) {
            const detail = (e as CustomEvent).detail;
            const newIndex = detail?.index;
            if (newIndex == null || cardCount === 0) return;

            if (lastIndex === -1) {
                lastIndex = newIndex;
                continuousPos = cardCount + newIndex;
                gsap.set(innerEl, { y: posToY(continuousPos) });
                updateOpacities(continuousPos);
                return;
            }

            // Shortest step with wrapping
            let delta = newIndex - lastIndex;
            if (delta > cardCount / 2) delta -= cardCount;
            if (delta < -cardCount / 2) delta += cardCount;
            lastIndex = newIndex;

            // Reset to center copy if approaching boundary
            if (
                continuousPos + delta < 0 ||
                continuousPos + delta >= cardCount * 3
            ) {
                resetToCenter();
            }

            continuousPos += delta;

            // Animate scroll — overwrites any in-progress tween seamlessly
            gsap.to(innerEl, {
                y: posToY(continuousPos),
                duration: TWEEN_DURATION,
                ease: "power2.out",
                overwrite: true,
            });

            updateOpacities(continuousPos);
        }

        trackEl?.addEventListener("reel:update", onActiveCard);
        return () => {
            trackEl?.removeEventListener("reel:update", onActiveCard);
            gsap.killTweensOf(innerEl);
            gsap.killTweensOf(itemEls);
        };
    });
</script>

<main class="main">
    <section class="section-hr">
        <div class="container-xl">
            <div class="inner" data-canvas-map>
                <div class="wrap">
                    <div class="text">
                        {#if projects.length}
                            <div class="slot">
                                <div
                                    class="slot-marker"
                                    style="height: {ROW_HEIGHT}px; margin-top: {TOP_OFFSET}px"
                                >
                                    <div class="slot-marker-pip"></div>
                                </div>
                                <div class="slot-window">
                                    <div class="slot-inner" data-slot-inner>
                                        {#each slotItems as project, i}
                                            <a
                                                href={project.url}
                                                class="slot-item"
                                                data-slot-item
                                                style="height: {ROW_HEIGHT}px"
                                            >
                                                {project.title}
                                            </a>
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        {/if}
                        <div class="heading">
                            <div class="eyebrow">
                                <div class="marker"></div>
                                <div class="eyebrow-text">{eyebrow}</div>
                            </div>
                            <h1>
                                {@html title}
                            </h1>
                            <c-button
                                label={buttonlabel}
                                href={buttonhref}
                                active
                            ></c-button>
                        </div>
                    </div>
                </div>

                <div class="track" bind:this={trackEl}>
                    <c-reel id={wheelId}></c-reel>
                    {@html `<script type="application/json" data-for="${wheelId}">${JSON.stringify({ projects }).replace(/<\//g, "<\\/")}<\/script>`}
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    /* Host element - make custom element stretch full width */
    :global(l-home) {
        display: block;
        width: 100%;
        flex: 1;
        align-self: stretch;
    }

    /* Main container */
    .main {
        flex-direction: column;
        align-items: center;
        width: 100%;
        display: flex;
    }

    /* Section */
    .section-hr {
        background-color: var(--_themes---site--bg--bg-primary);
        color: var(--_themes---site--text--text-primary);
        flex-direction: column;
        justify-content: center;
        align-self: stretch;
        align-items: center;
        display: flex;
        position: relative;
    }

    /* Container */
    .container-xl {
        max-width: var(--max-width--xl);
        flex-direction: column;
        flex: 1;
        align-items: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        display: flex;
    }

    /* Inner layout - horizontal flex, single viewport height */
    .inner {
        flex-direction: row;
        align-items: flex-start;
        display: flex;
        flex: 1;
        align-self: stretch;
        height: 100dvh;
        overflow: hidden;
    }

    @media screen and (max-width: 991px) {
        .inner {
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            flex-flow: column;
            max-height: none;
        }
    }

    /* Left panel - full viewport height */
    .wrap {
        flex-direction: column;
        align-items: flex-start;
        display: flex;
        flex: 1;
        height: 100dvh;
    }

    @media screen and (max-width: 991px) {
        .wrap {
            position: relative;
            height: auto;
        }
    }

    /* Text container */
    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding-right: var(--global--margin);
        padding-left: var(--global--margin);
        padding-top: var(--_units---abs--32);
        padding-bottom: var(--_units---abs--24);
        flex: 1;
        position: relative;
        align-self: stretch;
    }

    @media screen and (max-width: 991px) {
        .text {
            padding-top: 8rem;
            padding-bottom: 4rem;
            gap: 3rem;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    /* Right panel - canvas track */
    .track {
        display: flex;
        flex: 1;
        align-self: stretch;
        max-width: calc(100dvh - 2 * var(--padding--lg));
        padding-right: 48px;
        position: relative;
        height: 100dvh;
    }

    @media screen and (max-width: 991px) {
        .track {
            flex: 1;
            max-width: none;
            height: auto;
            padding-right: var(--global--margin);
            padding-left: var(--global--margin);
            overflow: hidden;
        }
    }

    /* Slot title list */
    .slot {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        position: relative;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }

    /* Marker column — same height as one row, centers the pip vertically */
    .slot-marker {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }

    .slot-marker-pip {
        background-color: var(--_themes---site--text--text-primary);
        border-radius: 24px;
        width: 18px;
        height: 4px;
    }

    /* Scrolling window — fades top and bottom */
    .slot-window {
        overflow: hidden;
        height: 160px;
        position: relative;
        mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            #000 20%,
            #000 25%,
            transparent 100%
        );
        -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            #000 20%,
            #000 25%,
            transparent 100%
        );
    }

    .slot-inner {
        display: flex;
        flex-direction: column;
        will-change: transform;
    }

    .slot-item {
        display: flex;
        align-items: center;
        font-size: var(--h4--font-size, 1.25rem);
        font-weight: 400;
        color: var(--_themes---site--text--text-primary);
        text-decoration: none;
        white-space: nowrap;
        opacity: 0;
    }

    @media screen and (max-width: 991px) {
        .slot {
            display: none;
        }
    }

    /* Eyebrow */
    .eyebrow {
        flex-direction: row;
        align-items: center;
        display: flex;
        grid-column-gap: 8px;
        grid-row-gap: 8px;
        color: var(--_themes---site--text--text-secondary);
        justify-content: flex-start;
    }

    .eyebrow-text {
        font-size: var(--paragraph--font-size-l);
        line-height: var(--paragraph--line-height-l);
    }

    /* Green marker dot */
    .marker {
        background-color: var(--_themes---site--bg--bg-active);
        border-radius: 4px;
        width: 8px;
        height: 4px;
    }

    /* Heading container - row 3, aligned to bottom */
    .heading {
        flex-direction: column;
        align-items: flex-start;
        display: flex;
        gap: var(--gap--md);
        align-self: start;
        max-width: 40rem;
        justify-content: flex-start;
    }

    /* H1 styling */
    h1 {
        font-family: var(--h1--font-family);
        font-size: var(--h1--font-size);
        line-height: var(--h1--line-height);
        letter-spacing: var(--h1--letter-spacing);
        margin-top: 0;
        margin-bottom: 0;
        font-weight: 400;
    }

    /* Italic accent text within h1 */
    h1 :global(em),
    h1 :global(i),
    h1 :global(.u-font-accent),
    h1 :global(span) {
        font-family: var(--typeface--tertiary);
        font-style: italic;
    }
</style>
