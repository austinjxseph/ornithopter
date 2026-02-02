<!--
  BlockRenderer - Renders Kirby blocks (replaces Prismic SliceZone)

  Maps block types to their corresponding Svelte components and
  passes the block content as props.

  @component
  @example
  <BlockRenderer blocks={page.blocks} />
-->

<script lang="ts">
  import type { KirbyBlock } from '$lib/kirby';

  // Import all block components (same as slices, just with Kirby data)
  import ArticleHeader from '$lib/slices/ArticleHeader/index.svelte';
  import ArticleImageBlock from '$lib/slices/ArticleImageBlock/index.svelte';
  import ArticleTextBlock from '$lib/slices/ArticleTextBlock/index.svelte';
  import ArticleNumberedGrid from '$lib/slices/ArticleNumberedGrid/index.svelte';
  import ArticleFullBleed from '$lib/slices/ArticleFullBleed/index.svelte';
  import StaticBioBlock from '$lib/slices/StaticBioBlock/index.svelte';

  // Map Kirby block types to Svelte components
  const blockComponents: Record<string, any> = {
    'article-header': ArticleHeader,
    'article-image-block': ArticleImageBlock,
    'article-text-block': ArticleTextBlock,
    'article-numbered-grid': ArticleNumberedGrid,
    'article-full-bleed': ArticleFullBleed,
    'static-bio-block': StaticBioBlock,
  };

  export let blocks: KirbyBlock[] = [];
</script>

{#each blocks as block, index}
  {#if blockComponents[block.type]}
    <svelte:component
      this={blockComponents[block.type]}
      slice={{
        primary: block.content,
        items: block.content.items || block.content.images || []
      }}
    />
  {:else}
    <div class="block-error">
      <p>Unknown block type: <code>{block.type}</code></p>
    </div>
  {/if}
{/each}

<style>
  .block-error {
    padding: 1rem;
    margin: 1rem;
    background: #fff3cd;
    border: 1px solid #ffc107;
    border-radius: 4px;
    color: #856404;
  }

  .block-error code {
    background: rgba(0,0,0,0.1);
    padding: 0.125rem 0.25rem;
    border-radius: 2px;
  }
</style>
