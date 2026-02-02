<!--
  Bio - Bio section with staggered images and content

  Two-column layout with staggered image gallery on left and
  scrollable content (intro, bio, and flexible item sections) on right.

  @component
-->

<script lang="ts">
  import type { KirbyImage } from "$lib/kirby";

  // Accepts slice prop from BlockRenderer (Kirby format)
  export let slice: {
    primary: {
      heading?: string;
      content?: string;
      images?: KirbyImage[];
      items?: Array<{
        type: 'header' | 'row';
        heading: string;
        subtitle: string;
        index: string;
        description: string;
      }>;
      // Legacy Prismic fields
      bio_heading?: any;
      bio_content?: any;
      bio_images?: Array<{ image: any }>;
      bio_items?: Array<{
        item_type: string;
        item_heading: string;
        item_subtitle: string;
        item_index: string;
        item_description: any;
      }>;
    };
    items?: any[];
  };

  const primary = slice?.primary || {};

  // Support both Kirby format and legacy Prismic format
  $: heading = primary.heading || '';
  $: content = primary.content || '';
  $: images = primary.images || (primary.bio_images?.map((i: any) => i.image ? { url: i.image.url, alt: i.image.alt } : null).filter(Boolean)) || [];

  // Normalize items from either format
  $: rawItems = primary.items || primary.bio_items?.map((item: any) => ({
    type: item.item_type === 'header' ? 'header' : 'row',
    heading: item.item_heading || '',
    subtitle: item.item_subtitle || '',
    index: item.item_index || '',
    description: item.item_description || '',
  })) || [];

  // Group items by section (header starts a new group)
  type ItemGroup = {
    heading: string;
    description: string;
    rows: typeof rawItems;
  };

  function groupItems(items: typeof rawItems): ItemGroup[] {
    const groups: ItemGroup[] = [];
    let currentGroup: ItemGroup | null = null;

    for (const item of items) {
      if (item.type === 'header') {
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = {
          heading: item.heading || '',
          description: item.description || '',
          rows: [],
        };
      } else if (currentGroup) {
        currentGroup.rows.push(item);
      }
    }

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }

  $: groupedItems = groupItems(rawItems);
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-xl py-xl">
    <div class="u-layout-hflex inner">
      <!-- Left Panel: Staggered Images -->
      <div class="u-layout-vflex col img">
        {#each images as image, i}
          <div class="u-layout-hflex img-row">
            <div class="image">
              {#if image?.url}
                <img src={image.url} alt={image.alt || ""} loading="lazy" />
              {/if}
            </div>
          </div>
        {/each}
      </div>

      <!-- Right Panel: Content -->
      <div class="u-layout-vflex col body">
        <!-- Bio Heading + Content -->
        <div class="u-layout-vflex page-header">
          {#if heading}
            <div class="heading">
              {@html heading}
            </div>
          {/if}

          {#if content}
            <div class="u-layout-vflex content">
              {@html content}
            </div>
          {/if}
        </div>

        <!-- Dynamic Sections -->
        {#each groupedItems as group}
          <div class="u-layout-vflex group">
            <h3 class="u-font-accent group-heading">{group.heading}</h3>
            {#if group.description}
              <div class="group-description">
                {@html group.description}
              </div>
            {/if}
            {#each group.rows as row}
              <div class="u-layout-vflex item">
                <div class="u-layout-vflex item-header">
                  {#if row.index}
                    <!-- Education-style: heading + index on same line -->
                    <div class="u-layout-hflex item-row-between">
                      <p class="item-heading">{row.heading}</p>
                      <p class="item-index">{row.index}</p>
                    </div>
                  {:else if row.heading}
                    <p class="item-heading">{row.heading}</p>
                  {/if}
                  {#if row.subtitle}
                    <p class="item-subtitle">{row.subtitle}</p>
                  {/if}
                </div>
                {#if row.description}
                  <div class="u-layout-hflex item-row">
                    <div class="item-description">
                      {@html row.description}
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .inner {
    width: 100%;
    gap: var(--padding--xl);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 991px) {
    .inner {
      grid-template-columns: 1fr;
      gap: var(--gap--xxl);
    }
  }

  @media screen and (min-width: 1600px) {
    .inner {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* Left column - Images */
  .col.img {
    flex: 1;
    gap: var(--gap--md);
    max-width: 600px;
    max-height: 600px;
    min-height: 1px;
    min-width: 1px;
    align-self: stretch;
  }

  @media screen and (max-width: 991px) {
    .col.img {
      max-width: none;
      max-height: none;
      width: 100%;
    }
  }

  @media screen and (min-width: 1600px) {
    .col.img {
      grid-column: span 2;
    }
  }

  .img-row {
    flex: 1;
    min-height: 1px;
    min-width: 1px;
    justify-content: flex-end;
    width: 100%;
  }

  .img-row:nth-child(1) {
    padding-right: 0;
  }

  .img-row:nth-child(2) {
    padding-right: 80px;
  }

  .img-row:nth-child(3) {
    padding-right: 160px;
  }

  @media screen and (max-width: 991px) {
    .img-row:nth-child(2),
    .img-row:nth-child(3) {
      padding-right: 0;
    }
  }

  .image {
    flex: 1;
    height: 100%;
    min-height: 1px;
    min-width: 1px;
    background-color: var(--_themes---neutrals--100);
  }

  .image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Right column - Content */
  .col.body {
    flex: 1;
    max-width: 500px;
    min-height: 1px;
    min-width: 1px;
    gap: var(--padding--xl);
  }

  @media screen and (max-width: 991px) {
    .col.body {
      max-width: none;
      width: 100%;
    }
  }

  .page-header {
    gap: var(--gap--xxl);
    width: 100%;
  }

  .heading {
    max-width: 480px;
  }

  .heading :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--h3--font-size);
    line-height: var(--h3--line-height);
    letter-spacing: var(--h3--letter-spacing);
    color: var(--_themes---site--text--text-primary);
    text-shadow: 4px 4px 60px black;
  }

  .heading :global(em) {
    font-family: var(--typeface--secondary);
    font-style: normal;
  }

  .content {
    gap: var(--gap--md);
  }

  .content :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-primary);
  }

  .group {
    gap: var(--gap--lg);
    width: 100%;
  }

  .group-heading {
    font-family: var(--typeface--secondary);
    font-size: var(--h3--font-size);
    line-height: var(--h3--line-height);
    letter-spacing: var(--h3--letter-spacing);
    color: var(--_themes---site--text--text-primary);
    max-width: 480px;
    text-shadow: 4px 4px 60px black;
    font-weight: 400;
    font-style: normal;
  }

  .group-description :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-primary);
  }

  .item {
    gap: var(--gap--md);
    width: 100%;
  }

  .item-header {
    gap: var(--gap--xxs);
    width: 100%;
  }

  .item-heading {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: 1.2;
    color: var(--_themes---site--text--text-primary);
  }

  .item-subtitle {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-secondary);
  }

  .item-row {
    width: 100%;
  }

  .item-row-between {
    width: 100%;
    justify-content: space-between;
  }

  .item-description {
    flex: 1;
  }

  .item-description :global(p) {
    font-family: var(--typeface--primary);
    font-size: var(--paragraph--font-size-s);
    line-height: var(--paragraph--line-height-s);
    letter-spacing: var(--paragraph--letter-spacing);
    color: var(--_themes---site--text--text-primary);
  }
</style>
