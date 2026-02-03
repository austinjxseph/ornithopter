<script lang="ts">
    let {
        images = [],
    }: {
        images?: Array<{ url: string; alt?: string; caption?: string }>;
    } = $props();
</script>

<section class="section">
    <div class="container-fw py-sm">
        <div class="b-ib_grid">
            {#each images as item}
                <figure class="b-ib_figure">
                    <div class="b-ib_img">
                        {#if item.url}
                            <img
                                src={item.url}
                                alt={item.alt || ""}
                                loading="lazy"
                            />
                        {/if}
                    </div>
                    {#if item.caption}
                        <figcaption class="b-ib_caption text-sm">
                            {item.caption}
                        </figcaption>
                    {/if}
                </figure>
            {/each}
        </div>
    </div>
</section>

<style>
    .b-ib_grid {
        display: grid;
        gap: var(--gap--md);
        grid-template-columns: 1fr;
        align-self: stretch;
    }

    .b-ib_figure {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
        margin: 0;
    }

    .b-ib_img {
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }

    .b-ib_img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .b-ib_caption {
        color: var(--_themes---site--text--text-secondary);
        padding-top: var(--gap--xxs);
    }
</style>
