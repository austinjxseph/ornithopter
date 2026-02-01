<!--
  Sidebar - Article metadata display component

  Displays heading, description, and up to 4 numbered metadata items.
  Used for project details like role, timeline, team, tools.
  Auto-numbers items with (01), (02), (03), (04) format.

  @component
  @example
  <Sidebar
    heading="Project Details"
    description="A comprehensive overview of the project scope and team."
    metadata={[
      { label: 'Role', value: 'Lead Designer & Developer' },
      { label: 'Timeline', value: 'Q3 2022' },
      { label: 'Team', value: '3 designers, 2 developers' },
      { label: 'Tools', value: 'Figma, Android Studio, Java' }
    ]}
  />
-->

<script lang="ts">
  interface MetadataItem {
    label: string;
    value: string;
  }

  /**
   * Sidebar heading
   */
  export let heading: string = '';

  /**
   * Sidebar description text
   */
  export let description: string = '';

  /**
   * Array of metadata items (max 4, auto-numbered)
   */
  export let metadata: MetadataItem[] = [];
</script>

<aside class="u-layout-vflex aside">
  {#if heading || description}
    <div class="u-layout-hflex header">
      {#if heading}
        <div class="u-layout-vflex heading">
          <h2>{heading}</h2>
        </div>
      {/if}
      {#if description}
        <div class="u-layout-vflex text gap-lg">
          <div class="u-layout-hflex row">
            <div class="u-layout-vflex col gap-xxs">
              <p class="text-md">{description}</p>
            </div>
          </div>
        </div>
      {/if}
    </div>
  {/if}

  {#if metadata.length > 0}
    <div class="u-layout-vflex grid">
      {#each metadata.slice(0, 4) as item, index}
        <div class="u-layout-vflex cell gap-xxs">
          <h5>({String(index + 1).padStart(2, '0')})</h5>
          <div class="text-md">{item.value}</div>
        </div>
      {/each}
    </div>
  {/if}
</aside>

<style>
  .aside {
    /* Container for sidebar */
  }

  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--gap--md);
    padding-left: var(--global--margin);
    padding-right: var(--global--margin);
    padding-top: var(--padding--xl);
    padding-bottom: var(--padding--md);
    align-self: stretch;
  }

  @media screen and (max-width: 991px) {
    .header {
      display: flex;
      flex-direction: column;
      gap: var(--gap--xl);
      max-width: none;
      padding-top: var(--padding--xl);
      padding-bottom: var(--padding--sm);
      position: relative;
      top: 0;
    }
  }

  .heading {
    grid-column: span 2;
    max-width: 36rem;
  }

  @media screen and (max-width: 991px) {
    .heading {
      max-width: none;
    }
  }

  .text {
    /* Inherits grid positioning */
  }

  .row {
    align-self: stretch;
  }

  .col {
    /* Text column container */
  }

  .grid {
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-columns: 1fr;
    align-self: stretch;
    place-items: start stretch;
    display: grid;
    direction: rtl;
  }

  .grid > :global(*) {
    direction: ltr;
  }

  @media screen and (max-width: 991px) {
    .grid {
      grid-column-gap: 32px;
      grid-row-gap: 32px;
      grid-template-columns: 1fr;
      direction: ltr;
    }
  }

  .cell {
    /* Grid cell container */
  }
</style>
