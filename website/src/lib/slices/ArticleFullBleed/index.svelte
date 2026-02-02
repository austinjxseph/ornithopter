<!--
  FullWidthImage - Full-width hero image slice

  Displays a single full-width image with optional caption.
  No column logic, always full width.

  @component
-->

<script lang="ts">
  import type { KirbyImage } from "$lib/kirby";

  // Accepts slice prop from BlockRenderer (Kirby format)
  export let slice: {
    primary: {
      image: KirbyImage | null;
      caption?: string;
    };
    items?: any[];
  };

  $: image = slice.primary.image;
  $: caption = slice.primary.caption || '';
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-fw">
    <div class="u-layout-vflex img">
      {#if image?.url}
        <img src={image.url} alt={image.alt || ""} loading="lazy" />
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
