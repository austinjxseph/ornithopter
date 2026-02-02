<script lang="ts">
  import BlockRenderer from "$lib/components/BlockRenderer.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import type { KirbyProject } from "$lib/kirby";

  export let data: {
    project: KirbyProject;
  };

  $: project = data.project;
</script>

<svelte:head>
  <title>{project.meta?.title || `${project.title} | Austin Joseph`}</title>
  <meta
    name="description"
    content={project.meta?.description || project.description}
  />
  {#if project.meta?.image}
    <meta property="og:image" content={project.meta.image} />
    <meta property="twitter:image" content={project.meta.image} />
  {/if}
  <meta
    property="og:title"
    content={project.meta?.title || project.title}
  />
  <meta
    property="og:description"
    content={project.meta?.description || project.description}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={project.meta?.title || project.title}
  />
  <meta
    name="twitter:description"
    content={project.meta?.description || project.description}
  />
</svelte:head>

<main class="u-layout-vflex main">
  <div class="u-layout-vflex inner">
    <!-- Render Kirby Blocks -->
    <div class="u-layout-vflex body">
      {#if project.blocks}
        <BlockRenderer blocks={project.blocks} />
      {/if}
    </div>

    <!-- Optional: Sidebar with metadata (uncomment if you want to use it) -->
    <!-- {#if project.metadata && project.metadata.length > 0}
      <Sidebar
        heading="Project Details"
        description=""
        metadata={project.metadata}
      />
    {/if} -->
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
