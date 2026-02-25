<script lang="ts">
    let { image = "", alt = "", caption = "" } = $props();
</script>

<section class="section-fw">
    <figure class="figure">
        <div class="img-wrap">
            {#if image}
                <img src={image} {alt} />
            {/if}
        </div>
        {#if caption}
            <figcaption class="caption text-sm">{caption}</figcaption>
        {/if}
    </figure>
</section>

<style>
    .figure {
        display: flex;
        flex-direction: column;
        width: 100%;
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
        padding: var(--gap--xs) var(--global--margin);
        text-align: center;
    }
</style>
