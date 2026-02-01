<script lang="ts">
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";

  export let data;
  const { page } = data;

  // Debug logging
  console.log("About page data:", page);
  console.log("About page slices:", page?.data?.slices);
</script>

<svelte:head>
  <title>{page.data.meta_title || "About | Austin Joseph"}</title>
  <meta
    name="description"
    content={page.data.meta_description ||
      "I'm a software designer & creative developer currently in London, with a strong focus on Visual & Motion Design."}
  />
  {#if page.data.meta_image?.url}
    <meta property="og:image" content={page.data.meta_image.url} />
    <meta property="twitter:image" content={page.data.meta_image.url} />
  {/if}
  <meta
    property="og:title"
    content={page.data.meta_title || "About | Austin Joseph"}
  />
  <meta
    property="og:description"
    content={page.data.meta_description ||
      "I'm a software designer & creative developer currently in London, with a strong focus on Visual & Motion Design."}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main class="u-layout-vflex main">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <SliceZone slices={page.data.slices} {components} />
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
