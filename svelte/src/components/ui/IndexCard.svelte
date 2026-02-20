<script lang="ts">
    let {
        href = "#",
        title = "",
        backgroundimage = "",
        overlayimage = "",
    } = $props();
</script>

<a {href} class="indexcard">
    <div class="overlay">
        {#if overlayimage}
            <img src={overlayimage} alt="" loading="eager" />
        {/if}
    </div>
    <div class="bg">
        {#if backgroundimage}
            <img src={backgroundimage} alt="" loading="eager" />
        {/if}
    </div>
    <div class="text">
        <div class="heading">
            <h4>{title}</h4>
        </div>
    </div>
</a>

<style>
    /* Host element - make custom element stretch full width */
    :global(c-indexcard) {
        display: block;
        width: 100%;
        align-self: stretch;
    }

    .indexcard {
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
        .indexcard {
            min-height: 100vw;
            overflow: clip;
        }
    }

    .bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        aspect-ratio: 4 / 5;
        width: 100%;
    }

    .bg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .overlay {
        z-index: 2;
        aspect-ratio: 1;
        height: 100%;
        position: absolute;
    }

    .overlay img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .text {
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
        .text {
            padding: 0.5rem;
        }
    }

    .heading {
        max-width: 20rem;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 991px) {
        .heading {
            max-width: none;
        }
    }
</style>
