<!--
  ImageBlock - Flexible multi-column image grid slice

  Displays images in user-selected columns (1-4).
  Responsive: 2 columns on tablet, 1 column on mobile.
  Supports optional captions.

  @component
-->

<script lang="ts">
  import { PrismicImage } from "@prismicio/svelte";

  export let slice;

  const columns = slice.primary.columns || "2";
  const items = slice.items || [];
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-fw py-sm">
    <div class="grid grid-cols-{columns}">
      {#each items as item}
        <div class="u-layout-vflex img-container">
          <div class="u-layout-vflex img">
            {#if item.image?.url}
              <img src={item.image.url.split('?')[0]} alt={item.image.alt || ""} loading="lazy" />
            {/if}
          </div>
          {#if item.caption}
            <figcaption class="text-sm caption">{item.caption}</figcaption>
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
    grid-template-columns: repeat(var(--cols), 1fr);
    align-self: stretch;
    /* Padding removed - .section handles global margins */
  }

  .grid-cols-1 {
    --cols: 1;
  }

  .grid-cols-2 {
    --cols: 2;
  }

  .grid-cols-3 {
    --cols: 3;
  }

  .grid-cols-4 {
    --cols: 4;
  }

  @media screen and (max-width: 991px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 479px) {
    .grid {
      grid-template-columns: 1fr;
    }
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
