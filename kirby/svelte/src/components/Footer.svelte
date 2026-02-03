<svelte:options customElement={{ tag: "c-footer", shadow: "none" }} />

<script>
    export let fixed = null;
    export let links = "[]";

    let parsedLinks = [];
    const currentYear = new Date().getFullYear();

    // Handle boolean attribute - presence of attribute means true
    $: isFixed = fixed !== null && fixed !== false && fixed !== "false";

    $: {
        try {
            parsedLinks = JSON.parse(links);
        } catch (e) {
            parsedLinks = [];
        }
    }
</script>

<footer class="c-footer" class:abs={isFixed}>
    <div class="c-footer_vignette"></div>
    <div class="c-footer_component">
        <div class="c-footer_inner">
            <div class="c-footer_row copyright">
                <div class="u-text-secondary">
                    <div class="text-sm">
                        © <span>{currentYear}</span> Austin Joseph.
                    </div>
                </div>
            </div>
            <ul role="list" class="c-footer_row">
                {#each parsedLinks as link}
                    <li>
                        <a
                            href={link.href}
                            class="c-footer_link"
                            title={link.label}
                        >
                            {#if link.icon}
                                <img
                                    src={link.icon}
                                    width="24"
                                    height="24"
                                    alt={link.label}
                                />
                            {:else}
                                <span>{link.label}</span>
                            {/if}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</footer>

<style>
    .c-footer {
        flex-flow: column;
        justify-content: center;
        align-self: stretch;
        align-items: flex-start;
        display: flex;
        position: relative;
        width: 100%;
    }

    .c-footer.abs {
        position: fixed;
        inset: auto 0% 0%;
        z-index: 10;
    }

    @media screen and (max-width: 991px) {
        .c-footer.abs {
            position: relative;
        }
    }

    .c-footer_vignette {
        position: absolute;
        inset: 0;
        min-height: 10vh;
        background: linear-gradient(
            to top,
            var(--_themes---site--bg--bg-primary) 0%,
            color-mix(
                    in srgb,
                    var(--_themes---site--bg--bg-primary) 80%,
                    transparent
                )
                40%,
            transparent 100%
        );
        z-index: 0;
        pointer-events: none;
    }

    .c-footer_component {
        padding: 1.2rem var(--global--margin);
        flex-flow: column;
        justify-content: center;
        align-self: stretch;
        align-items: flex-start;
        display: flex;
        position: relative;
    }

    .c-footer_inner {
        max-width: var(--max-width--xl);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
        flex-flow: row;
        justify-content: space-between;
        align-self: stretch;
        align-items: center;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
    }

    @media screen and (max-width: 991px) {
        .c-footer_inner {
            grid-column-gap: 12px;
            grid-row-gap: 12px;
            flex-flow: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    .c-footer_row {
        grid-column-gap: 0.75rem;
        grid-row-gap: 0.75rem;
        flex-flow: row;
        justify-content: flex-start;
        align-items: center;
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 991px) {
        .c-footer_row {
            padding-left: 0;
        }
    }

    @media screen and (max-width: 991px) {
        .c-footer_row.copyright {
            grid-column-gap: 0.25rem;
            grid-row-gap: 0.25rem;
            flex-flow: column;
            justify-content: flex-start;
            align-items: flex-start;
        }
    }

    .c-footer_link {
        display: block;
        position: relative;
        overflow: hidden;
    }

    .u-text-secondary {
        color: var(--_themes---site--text--text-secondary);
    }

    .text-sm {
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
    }
</style>
