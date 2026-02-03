<svelte:options customElement={{ tag: "index-card", shadow: "open" }} />

<script>
    export let href = "#";
    export let title = "";
    export let backgroundimage = "";
    export let overlayimage = "";
</script>

<a {href} class="card u-inline-block">
    <div class="card-overlay">
        {#if overlayimage}
            <img src={overlayimage} alt="" loading="lazy" />
        {/if}
    </div>
    <div class="card-bg">
        {#if backgroundimage}
            <img src={backgroundimage} alt="" loading="lazy" />
        {/if}
    </div>
    <div class="u-layout-hflex card-text">
        <div class="u-layout-vflex card-heading">
            <h4>{title}</h4>
        </div>
    </div>
</a>

<style>
    @import url('/assets/css/variables.css');
    @import url('/assets/css/styles.css');
    .card {
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
        .card {
            min-height: 100vw;
            overflow: clip;
        }
    }

    .card-bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        aspect-ratio: 4 / 5;
        width: 100%;
    }

    .card-bg :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-overlay {
        z-index: 2;
        aspect-ratio: 1;
        height: 100%;
        position: absolute;
    }

    .card-overlay :global(img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-text {
        z-index: 2;
        aspect-ratio: 1;
        justify-content: space-between;
        align-self: stretch;
        align-items: flex-end;
        padding: 1.5rem;
        position: relative;
    }

    @media screen and (max-width: 991px) {
        .card-text {
            padding: 0.5rem;
        }
    }

    .card-heading {
        max-width: 20rem;
    }

    @media screen and (max-width: 991px) {
        .card-heading {
            max-width: none;
        }
    }
</style>
