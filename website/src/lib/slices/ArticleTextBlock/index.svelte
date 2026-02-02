<!--
  TextBlock - 4-column reverse text content slice

  Displays text content in a 4-column grid that fills from right to left.
  - 2 items: fills columns 4 and 3
  - 6 items: fills rows 2.2, 2.1, then 1.4, 1.3
  Responsive: 2 columns on tablet, 1 column on mobile.

  @component
-->

<script lang="ts">
  // Accepts slice prop from BlockRenderer (Kirby format)
  export let slice: {
    primary: {
      columns?: string;
      items?: Array<{
        content: string;
      }>;
    };
    items?: Array<{
      content: string;
    }>;
  };

  // Support both primary.items and top-level items
  $: items = slice.primary.items || slice.items || [];
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-fw py-sm">
    <div class="u-layout-vflex text gap-lg">
      <div class="grid">
        {#each items as item}
          <div class="u-layout-vflex col gap-xxs">
            <div class="text-md">
              {@html item.content}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .text {
    /* Padding removed - .section handles global margins */
  }

  .grid {
    display: grid;
    gap: var(--gap--md);
    grid-template-columns: repeat(4, 1fr);
    align-self: stretch;
    place-items: start stretch;
    direction: rtl;
  }

  .grid > * {
    direction: ltr;
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
    }
  }

  .col {
    /* Column container */
  }
</style>
