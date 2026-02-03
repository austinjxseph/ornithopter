<svelte:options customElement={{ tag: "index-card", shadow: "none" }} />

<script>
    export let href = "#";
    export let title = "";
    export let backgroundimage = "";
    export let overlayimage = "";
</script>

<a {href} class="c-indexcard">
    <div class="c-indexcard_overlay">
        {#if overlayimage}
            <img src={overlayimage} alt="" loading="lazy" />
        {/if}
    </div>
    <div class="c-indexcard_bg">
        {#if backgroundimage}
            <img src={backgroundimage} alt="" loading="lazy" />
        {/if}
    </div>
    <div class="c-indexcard_text">
        <div class="c-indexcard_heading">
            <h4>{title}</h4>
        </div>
    </div>
</a>

<style>
    .c-indexcard {
        aspect-ratio: 1;
        object-fit: cover;
        flex-flow: column;
        flex: 1;
        justify-content: flex-end;
        align-self: stretch;
        align-items: flex-start;
        width: 100%;
        display: flex;
        position: relative;
        overflow: clip;
    }

    @media screen and (max-width: 991px) {
        .c-indexcard {
            min-height: 100vw;
            overflow: clip;
        }
    }

    .c-indexcard_bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        aspect-ratio: 4 / 5;
        width: 100%;
    }

    .c-indexcard_bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .c-indexcard_overlay {
        z-index: 2;
        aspect-ratio: 1;
        height: 100%;
        position: absolute;
    }

    .c-indexcard_overlay img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .c-indexcard_text {
        z-index: 2;
        aspect-ratio: 1;
        justify-content: space-between;
        align-self: stretch;
        align-items: flex-end;
        padding: 1.5rem;
        position: relative;
        display: flex;
    }

    @media screen and (max-width: 991px) {
        .c-indexcard_text {
            padding: 0.5rem;
        }
    }

    .c-indexcard_heading {
        max-width: 20rem;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 991px) {
        .c-indexcard_heading {
            max-width: none;
        }
    }
</style>
