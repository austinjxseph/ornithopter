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

    function closeNavigation() {
        navState = "closed";
        document.body.style.overflow = "";
        if (window.lenis) {
            window.lenis.start();
        }
    }

    function toggleNavigation() {
        navState = navState === "open" ? "closed" : "open";
        document.body.style.overflow = navState === "open" ? "hidden" : "";
        if (window.lenis) {
            navState === "open" ? window.lenis.stop() : window.lenis.start();
        }
    }

    onMount(() => {
        window.addEventListener("navigation:exit", closeNavigation);
        return () =>
            window.removeEventListener("navigation:exit", closeNavigation);
    });
</script>

<header data-nav-state={navState} data-nav-element="navbar" class="navbar">
    <div class="vignette"></div>
    <div class="inner">
        <button
            data-nav-element="overlay"
            aria-hidden="true"
            class="overlay"
            onclick={closeNavigation}
        ></button>

        <a href={rootpath} aria-label="Go Back Home" class="logo">
            Austin Joseph
        </a>

        <ul role="list" class="drawer" onclick={closeNavigation}>
            <div class="edge">
                <div class="edge-shine"></div>
            </div>
            <li class="links">
                {#each links as link}
                    <a href={link.href} class="link">
                        <h3>{link.label}</h3>
                    </a>
                {/each}
            </li>
        </ul>

        <button data-nav-element="menu" class="menu" onclick={toggleNavigation}>
            <div class="marker"></div>
            <div>Menu</div>
        </button>
    </div>
</header>

<style>
    .vignette {
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

    .navbar {
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

    .inner {
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

    .link {
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

    .links:hover .link {
        opacity: 0.2;
    }

    .links:hover .link:hover {
        opacity: 1;
    }

    .overlay {
        z-index: 3;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        display: block;
        background-color: rgba(0, 0, 0, 0.78);
        height: 100dvh;
        width: 100vw;
        transition:
            opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
            visibility 0s linear 0.2s;
        position: absolute;
        inset: 0%;
        border: none;
        cursor: pointer;
    }

    .logo {
        z-index: 5;
        position: relative;
    }

    .drawer {
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
        max-width: 600px;
        height: 100dvh;
        max-height: 100dvh;
        padding: var(--global--margin);
        background: linear-gradient(
            to left,
            var(--_themes---site--bg--bg-primary) 0%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 84%,
                    transparent
                )
                24%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 44%,
                    transparent
                )
                54%,
            transparent 100%
        );
        opacity: 0;
        visibility: hidden;
        transition:
            opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
            visibility 0s linear 0.2s;
        list-style: none;
        margin: 0;
    }

    .edge {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 3px;
        overflow: hidden;
        pointer-events: none;
    }

    .edge-shine {
        position: absolute;
        right: 0;
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

    .marker {
        background-color: #fff;
        border-radius: 24px;
        width: 18px;
        height: 4px;
        transition:
            width 0.3s,
            background-color 0.15s;
    }

    .links {
        gap: 8px;
        flex-flow: column;
        justify-content: center;
        align-items: flex-end;
        display: flex;
    }

    .menu {
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

    [data-nav-state="closed"] .drawer {
        pointer-events: none;
        opacity: 0;
        visibility: hidden;
    }

    [data-nav-state="open"] .drawer {
        pointer-events: auto;
        opacity: 1;
        visibility: visible;
        transition-timing-function:
            cubic-bezier(0.25, 0.46, 0.45, 0.94), linear;
        transition-delay: 0s, 0s;
    }

    [data-nav-state="open"] .overlay {
        opacity: 100%;
        visibility: visible;
        pointer-events: auto;
        transition-timing-function:
            cubic-bezier(0.25, 0.46, 0.45, 0.94), linear;
        transition-delay: 0s, 0s;
    }

    [data-nav-state="closed"] .overlay {
        opacity: 0%;
        visibility: hidden;
        pointer-events: none;
    }

    [data-nav-state="open"] .marker {
        width: 6px;
        background-color: #e83452;
    }

    @media screen and (max-width: 991px) {
        .navbar {
            font-size: var(--paragraph--font-size-s);
        }

        .inner {
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
            padding-left: 0;
            padding-right: 0;
            display: flex;
        }

        .drawer {
            width: 70vw;
            max-width: 600px;
            padding-top: 3rem;
            padding-bottom: 3rem;
        }
    }
</style>
