<svelte:options
    customElement={{ tag: "article-image-block", shadow: "none" }}
/>

<script>
    export let images = "[]"; // JSON string of [{url, alt, caption}]

    let parsedImages = [];

    $: {
        try {
            parsedImages = JSON.parse(images);
        } catch (e) {
            parsedImages = [];
        }
    }
</script>

<section class="u-layout-vflex section">
    <div class="u-layout-vflex container-fw py-sm">
        <div class="grid">
            {#each parsedImages as item}
                <div class="u-layout-vflex img-container">
                    <div class="u-layout-vflex img">
                        {#if item.url}
                            <img
                                src={item.url}
                                alt={item.alt || ""}
                                loading="lazy"
                            />
                        {/if}
                    </div>
                    {#if item.caption}
                        <figcaption class="text-sm caption">
                            {item.caption}
                        </figcaption>
                    {/if}
                </div>
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

    .img-container {
        gap: var(--gap--xxs);
    }

    .img {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        flex-flow: column;
        justify-content: flex-start;
        align-self: stretch;
        align-items: stretch;
        overflow: hidden;
    }

    .img :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .caption {
        color: var(--_themes---site--text--text-secondary);
        padding-top: var(--gap--xxs);
    }
</style>
