<script lang="ts">
  import BlockRenderer from "$lib/components/BlockRenderer.svelte";
  import type { KirbyPage } from "$lib/kirby";

  export let data: {
    page: KirbyPage;
  };

  $: page = data.page;
</script>

<svelte:head>
  <title>{page.meta?.title || "About | Austin Joseph"}</title>
  <meta
    name="description"
    content={page.meta?.description ||
      "I'm a software designer & creative developer currently in London, with a strong focus on Visual & Motion Design."}
  />
  {#if page.meta?.image}
    <meta property="og:image" content={page.meta.image} />
    <meta property="twitter:image" content={page.meta.image} />
  {/if}
  <meta
    property="og:title"
    content={page.meta?.title || "About | Austin Joseph"}
  />
  <meta
    property="og:description"
    content={page.meta?.description ||
      "I'm a software designer & creative developer currently in London, with a strong focus on Visual & Motion Design."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="u-layout-vflex main">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <BlockRenderer blocks={page.blocks} />
    </div>
  </div>
</main>

<style>
  .inner {
    align-self: stretch;
  }

  .body {
    align-self: stretch;
  }
</style>
