<svelte:options customElement={{ tag: "ar-fullbleed", shadow: "none" }} />

<script>
    export let image = "";
    export let alt = "";
    export let caption = "";
</script>

<section class="section-fw">
    <figure class="b-fb_figure">
        <div class="b-fb_img">
            {#if image}
                <img src={image} {alt} loading="lazy" />
            {/if}
        </div>
        {#if caption}
            <figcaption class="b-fb_caption text-sm">{caption}</figcaption>
        {/if}
    </figure>
</section>

<style>
    .b-fb_figure {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
    }

    .b-fb_img {
        aspect-ratio: 16 / 9;
        overflow: hidden;
    }

    .b-fb_img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .b-fb_caption {
        color: var(--_themes---site--text--text-secondary);
        padding: var(--gap--xs) var(--global--margin);
        text-align: center;
    }
</style>
