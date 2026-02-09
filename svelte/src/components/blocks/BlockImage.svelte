<script lang="ts">
    let {
        images = [],
        spacing = "stack",
    }: {
        images?: Array<{ url: string; alt?: string; caption?: string }>;
        spacing?: "stack" | "trim";
    } = $props();
</script>

<section class="section">
    <div class="container-fw py-sm" class:pt-0={spacing === "trim"}>
        <div class="grid">
            {#each images as item}
                <figure class="figure">
                    <div class="img-wrap">
                        {#if item.url}
                            <img
                                src={item.url}
                                alt={item.alt || ""}
                                loading="lazy"
                            />
                        {/if}
                    </div>
                    {#if item.caption}
                        <figcaption class="caption text-sm">
                            {item.caption}
                        </figcaption>
                    {/if}
                </figure>
            {/each}
        </div>
    </div>
</section>

<style>
    .grid {
        display: grid;
        gap: var(--gap--md);
        grid-template-columns: 1fr;
        align-self: stretch;
    }

    .figure {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
        margin: 0;
    }

    .img-wrap {
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }

    .img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .caption {
        color: var(--_themes---site--text--text-secondary);
        padding-top: var(--gap--xxs);
    }
</style>
