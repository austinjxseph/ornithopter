<svelte:options customElement={{ tag: "article-full-bleed", shadow: "none" }} />

<script>
    export let image = "";
    export let alt = "";
    export let caption = "";
</script>

<section class="u-layout-vflex section">
    <div class="u-layout-vflex container-fw">
        <div class="u-layout-vflex img">
            {#if image}
                <img src={image} {alt} loading="lazy" />
            {/if}
        </div>
        {#if caption}
            <figcaption class="text-sm caption">{caption}</figcaption>
        {/if}
    </div>
</section>

<style>
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
        padding: var(--gap--xs) var(--global--margin);
        text-align: center;
    }
</style>
