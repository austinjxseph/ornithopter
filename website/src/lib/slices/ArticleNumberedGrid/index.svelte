<!--
  NumberedGrid - Flexible numbered grid slice

  Displays items in user-selected columns (2-4) with auto-numbering.
  Responsive: 2 columns on tablet, 1 column on mobile.
  Optional numbered headings (01), (02), (03)...

  @component
-->

<script lang="ts">
  import { PrismicRichText } from "@prismicio/svelte";

  export let slice;

  const columns = slice.primary.columns || "4";
  const showNumbers = slice.primary.show_numbers ?? true;
  const items = slice.items || [];
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-fw py-sm">
    <div class="u-layout-vflex grid-container">
      <div class="grid grid-cols-{columns}">
        {#each items as item, index}
          <div class="u-layout-vflex cell gap-xxs">
            {#if showNumbers}
              <h5>({String(index + 1).padStart(2, "0")})</h5>
            {:else if item.heading}
              <h5>{item.heading}</h5>
            {/if}
            <div class="text-md">
              <PrismicRichText field={item.description} />
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .grid-container {
    /* Padding removed - .section handles global margins */
  }

  .grid {
    display: grid;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(var(--cols), 1fr);
    align-self: stretch;
    place-items: start stretch;
    direction: rtl;
  }

  .grid > :global(*) {
    direction: ltr;
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
      direction: ltr;
    }
  }

  @media screen and (max-width: 479px) {
    .grid {
      grid-template-columns: 1fr;
      grid-column-gap: 32px;
      grid-row-gap: 32px;
      direction: ltr;
    }
  }

  .cell {
    /* Grid cell container */
  }
</style>
