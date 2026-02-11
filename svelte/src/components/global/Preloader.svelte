<script lang="ts">
    let {
        images = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
    } = $props();
</script>

<div class="preloader">
    <div class="preloader-canvas">
        <c-drum images={JSON.stringify(images)}></c-drum>
    </div>
</div>

<style>
    :global(c-preloader) {
        display: block;
    }

    .preloader {
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: var(--_themes---site--bg--bg-primary, #000);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .preloader-canvas {
        width: 100%;
        height: 80%;
    }
</style>
