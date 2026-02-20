<script lang="ts">
    import { onMount } from "svelte";

    let {
        rootpath = "/",
        links = [],
    }: {
        rootpath?: string;
        links?: Array<{ label: string; href: string }>;
    } = $props();

    let navState = $state("closed");

    function toggleNavigation() {
        navState = navState === "open" ? "closed" : "open";
        document.body.style.overflow = navState === "open" ? "hidden" : "";
        if (window.lenis) {
            navState === "open" ? window.lenis.stop() : window.lenis.start();
        }
    }

    onMount(() => {
        function closeNav() {
            navState = "closed";
            document.body.style.overflow = "";
        }
        window.addEventListener("navigation:exit", closeNav);
        return () => window.removeEventListener("navigation:exit", closeNav);
    });
</script>

<header
    data-nav-state={navState}
    data-nav-element="navbar"
    class="c-header_navbar"
>
    <div class="c-header_vignette"></div>
    <div class="c-header_inner">
        <button
            data-nav-element="overlay"
            aria-hidden="true"
            class="c-header_overlay"
            onclick={toggleNavigation}
        ></button>

        <a href={rootpath} aria-label="Go Back Home" class="c-header_logo">
            Austin Joseph
        </a>

        <ul role="list" class="c-header_drawer">
            <div class="c-header_edge">
                <div class="c-header_edge-shine"></div>
            </div>
            <li class="c-header_links">
                {#each links as link}
                    <a href={link.href} class="c-header_link">
                        <h3>{link.label}</h3>
                    </a>
                {/each}
            </li>
        </ul>

        <button
            data-nav-element="menu"
            class="c-header_menu"
            onclick={toggleNavigation}
        >
            <div class="c-header_marker"></div>
            <div>Menu</div>
        </button>
    </div>
</header>

<style>
    .c-header_vignette {
        position: absolute;
        inset: 0;
        height: 12vh;
        background: linear-gradient(
            to bottom,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 40%,
                    transparent
                )
                0%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 15%,
                    transparent
                )
                30%,
            transparent 60%
        );
        z-index: 2;
        pointer-events: none;
    }

    .c-header_navbar {
        z-index: 3;
        padding: 1rem var(--global--margin);
        color: var(--_themes---site--text--text-primary);
        font-size: var(--h4--font-size);
        line-height: var(--h4--line-height);
        border-bottom: 1px solid #0000;
        align-self: stretch;
        transition: all 0.3s;
        position: fixed;
        inset: 0% 0% auto;
        display: flex;
        flex-direction: column;
    }

    .c-header_inner {
        max-width: var(--max-width--xl);
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        flex: 1;
        grid-template-rows: auto;
        grid-template-columns: 1fr 1fr;
        grid-auto-columns: 1fr;
        justify-content: space-between;
        align-self: stretch;
        align-items: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
    }

    .c-header_link {
        grid-column-gap: 4px;
        grid-row-gap: 4px;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        padding-bottom: 4px;
        display: flex;
        position: relative;
        overflow: hidden;
        opacity: 1;
        transition: opacity 0.2s;
        font-size: 32px;
        line-height: 1.4em;
        letter-spacing: -0.02em;
    }

    .c-header_links:hover .c-header_link {
        opacity: 0.2;
    }

    .c-header_links:hover .c-header_link:hover {
        opacity: 1;
    }

    .c-header_overlay {
        z-index: 3;
        opacity: 0;
        display: none;
        background-color: rgba(0, 0, 0, 0.6);
        height: 100dvh;
        width: 100vw;
        transition: opacity 0.3s;
        position: absolute;
        inset: 0%;
        border: none;
        cursor: pointer;
    }

    .c-header_logo {
        z-index: 5;
        position: relative;
    }

    .c-header_drawer {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxl);
        justify-content: center;
        align-items: flex-end;
        box-sizing: border-box;
        width: 30vw;
        max-width: 400px;
        height: 100dvh;
        max-height: 100dvh;
        padding: var(--global--margin);
        background-color: var(--_themes---site--bg--bg-secondary);
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        list-style: none;
        margin: 0;
    }

    .c-header_edge {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 1px;
        background: rgba(255, 255, 255, 0.08);
        overflow: hidden;
        pointer-events: none;
    }

    .c-header_edge-shine {
        position: absolute;
        left: 0;
        width: 3px;
        height: 120px;
        background: radial-gradient(
            ellipse at center,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.4) 40%,
            transparent 100%
        );
        filter: blur(0.5px);
        animation: edgeSweep 7s linear infinite;
    }

    @keyframes edgeSweep {
        0% {
            bottom: -120px;
            opacity: 0;
        }
        2% {
            opacity: 1;
        }
        /* sweep takes ~5s (71% of 7s) */
        71% {
            bottom: 100%;
            opacity: 1;
        }
        73% {
            opacity: 0;
        }
        /* pause for ~2s */
        100% {
            bottom: -120px;
            opacity: 0;
        }
    }

    .c-header_marker {
        background-color: #fff;
        border-radius: 24px;
        width: 18px;
        height: 4px;
        transition:
            width 0.3s,
            background-color 0.15s;
    }

    .c-header_links {
        gap: 8px;
        flex-flow: column;
        justify-content: center;
        align-items: flex-end;
        display: flex;
    }

    .c-header_menu {
        background-color: transparent;
        position: relative;
        grid-column-gap: 0.75rem;
        grid-row-gap: 0.75rem;
        flex-flow: row;
        justify-content: flex-end;
        align-items: center;
        display: flex;
        cursor: pointer;
        border: none;
        color: inherit;
        font-size: inherit;
    }

    [data-nav-element="menu"] {
        z-index: 9;
    }

    [data-nav-state="closed"] .c-header_drawer {
        pointer-events: none;
        transform: translateX(100%);
    }

    [data-nav-state="open"] .c-header_drawer {
        pointer-events: auto;
        transform: translateX(0%);
    }

    [data-nav-state="open"] .c-header_overlay {
        opacity: 100%;
        display: block;
    }

    [data-nav-state="closed"] .c-header_overlay {
        opacity: 0%;
        display: none;
    }

    [data-nav-state="open"] .c-header_marker {
        width: 6px;
        background-color: #e83452;
    }

    @media screen and (max-width: 991px) {
        .c-header_navbar {
            font-size: var(--paragraph--font-size-s);
        }

        .c-header_inner {
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 0;
            padding-right: 0;
            display: flex;
        }

        .c-header_drawer {
            width: 70vw;
            max-width: 600px;
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
    }
</style>
