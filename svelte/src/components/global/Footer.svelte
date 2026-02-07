<script lang="ts">
    let {
        fixed = false,
        links = [],
    }: {
        fixed?: boolean;
        links?: Array<{ icon?: string; label?: string; href?: string }>;
    } = $props();

    const currentYear = new Date().getFullYear();

    let time = $state("");

    function updateTime() {
        const now = new Date();
        time = now
            .toLocaleTimeString("en-GB", {
                timeZone: "Europe/London",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            })
            .toUpperCase();
    }

    $effect(() => {
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    });
</script>

<footer class="c-footer" class:abs={fixed}>
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
            <div class="c-footer_location">
                <span class="c-footer_location-label">London, England</span>
                <span class="c-footer_location-time">[{time}]</span>
            </div>
            <ul role="list" class="c-footer_row">
                {#each links as link}
                    <li>
                        <a
                            href={link.href}
                            class="c-footer_link"
                            title={link.label}
                            target="_blank"
                            rel="noopener noreferrer"
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
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 24px;
    }

    @media screen and (max-width: 991px) {
        .c-footer_inner {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
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

    .c-footer_row:last-child {
        justify-content: flex-end;
    }

    .c-footer_location {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .c-footer_location-label {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        color: var(--_themes---site--text--text-primary);
    }

    .c-footer_location-time {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        color: var(--_themes---site--text--text-secondary);
    }

    @media screen and (max-width: 991px) {
        .c-footer_location {
            display: none;
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
