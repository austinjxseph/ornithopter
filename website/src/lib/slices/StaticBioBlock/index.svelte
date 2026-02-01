<!--
  Bio - Bio section with staggered images and content

  Two-column layout with staggered image gallery on left and
  scrollable content (intro, bio, and flexible item sections) on right.

  @component
-->

<script lang="ts">
  import { PrismicRichText, PrismicImage } from "@prismicio/svelte";

  export let slice;

  // Debug logging
  console.log("StaticBioBlock slice data:", slice);

  const primary = slice?.primary || {};
  const images = primary.bio_images || [];
  const items = primary.bio_items || [];

  // Group items by section (header starts a new group)
  type ItemGroup = {
    heading: string;
    description: any;
    rows: typeof items;
  };

  function groupItems(items: typeof primary.bio_items): ItemGroup[] {
    const groups: ItemGroup[] = [];
    let currentGroup: ItemGroup | null = null;

    for (const item of items) {
      if (item.item_type === "header") {
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = {
          heading: item.item_heading || "",
          description: item.item_description || null,
          rows: [],
        };
      } else if (item.item_type === "cell" && currentGroup) {
        currentGroup.rows.push(item);
      }
    }

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }

  const groupedItems = groupItems(items);
</script>

<section class="u-layout-vflex section">
  <div class="u-layout-vflex container-xl py-xl">
    <div class="u-layout-hflex inner">
      <!-- Left Panel: Staggered Images -->
      <div class="u-layout-vflex col img">
        {#each images as item, i}
          <div class="u-layout-hflex {i + 1}">
            <div class="image">
              {#if item.image?.url}
                <img src={item.image.url.split('?')[0]} alt={item.image.alt || ""} loading="lazy" />
              {/if}
            </div>
          </div>
        {/each}
      </div>

      <!-- Right Panel: Content -->
      <div class="u-layout-vflex col body">
        <!-- Bio Heading + Content -->
        <div class="u-layout-vflex page-header">
          {#if primary.bio_heading}
            <div class="heading">
              <PrismicRichText field={primary.bio_heading} />
            </div>
          {/if}

          {#if primary.bio_content}
            <div class="u-layout-vflex content">
              <PrismicRichText field={primary.bio_content} />
            </div>
          {/if}
        </div>

        <!-- Dynamic Sections -->
        {#each groupedItems as group}
          <div class="u-layout-vflex group">
            <h3 class="u-font-accent group-heading">{group.heading}</h3>
            {#if group.description && group.description.length > 0}
              <div class="group-description">
                <PrismicRichText field={group.description} />
              </div>
            {/if}
            {#each group.rows as row}
              <div class="u-layout-vflex item">
                <div class="u-layout-vflex item-header">
                  {#if row.item_index}
                    <!-- Education-style: heading + index on same line -->
                    <div class="u-layout-hflex item-row-between">
                      <p class="item-heading">{row.item_heading}</p>
                      <p class="item-index">{row.item_index}</p>
                    </div>
                  {:else if row.item_heading}
                    <p class="item-heading">{row.item_heading}</p>
                  {/if}
                  {#if row.item_subtitle}
                    <p class="item-subtitle">{row.item_subtitle}</p>
                  {/if}
                </div>
                {#if row.item_description && row.item_description.length > 0}
                  <div class="u-layout-hflex item-row">
                    <div class="item-description">
                      <PrismicRichText field={row.item_description} />
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

  .col.img > div {
    flex: 1;
    min-height: 1px;
    min-width: 1px;
    justify-content: flex-end;
    width: 100%;
  }

  .col.img > div:nth-child(1) {
    padding-right: 0;
  }

  .col.img > div:nth-child(2) {
    padding-right: 80px;
  }

  .col.img > div:nth-child(3) {
    padding-right: 160px;
  }

  @media screen and (max-width: 991px) {
    .col.img > div:nth-child(2),
    .col.img > div:nth-child(3) {
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
