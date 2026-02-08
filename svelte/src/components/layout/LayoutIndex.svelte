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

    let activeTitle = $state("");
    let trackEl: HTMLDivElement;

    const wheelId = "indexwheel-" + Math.random().toString(36).slice(2, 8);

    onMount(() => {
        function onActiveCard(e: Event) {
            const detail = (e as CustomEvent).detail;
            if (detail?.project?.title) {
                activeTitle = detail.project.title;
            }
        }

        trackEl?.addEventListener("activecard", onActiveCard);
        return () => {
            trackEl?.removeEventListener("activecard", onActiveCard);
        };
    });
</script>

<main class="main">
    <section class="section-hr">
        <div class="container-xl">
            <div class="inner" data-canvas-map>
                <div class="wrap">
                    <div class="text">
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
                            {#if activeTitle}
                                <div class="active-title">
                                    <h4>{activeTitle}</h4>
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>

                <div class="track" bind:this={trackEl}>
                    <c-indexwheel
                        id={wheelId}
                        projects={JSON.stringify(projects)}
                    ></c-indexwheel>
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
        flex-direction: row;
        align-items: flex-start;
        display: flex;
        padding-right: var(--global--margin);
        padding-left: var(--global--margin);
        padding-top: var(--_units---abs--32);
        padding-bottom: var(--_units---abs--24);
        flex: 1;
        position: relative;
        justify-content: flex-start;
        align-self: stretch;
    }

    @media screen and (max-width: 991px) {
        .text {
            padding-top: 8rem;
            padding-bottom: 4rem;
            grid-column-gap: 3rem;
            grid-row-gap: 3rem;
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

    /* Active project title */
    .active-title {
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    .active-title h4 {
        margin: 0;
        font-weight: 400;
        color: var(--_themes---site--text--text-secondary);
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

    /* Heading container */
    .heading {
        flex-direction: column;
        align-items: flex-start;
        display: flex;
        grid-column-gap: var(--gap--md);
        grid-row-gap: var(--gap--md);
        align-self: flex-end;
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
