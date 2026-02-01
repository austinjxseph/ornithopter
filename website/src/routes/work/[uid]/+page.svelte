<script lang="ts">
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";
  import Sidebar from "$lib/components/Sidebar.svelte";

  export let data;
  const { project } = data;
</script>

<svelte:head>
  <title
    >{project.data.meta_title ||
      `${project.data.project_title} | Austin Joseph`}</title
  >
  <meta
    name="description"
    content={project.data.meta_description || project.data.project_description}
  />
  {#if project.data.social_share_image?.url}
    <meta property="og:image" content={project.data.social_share_image.url} />
    <meta
      property="twitter:image"
      content={project.data.social_share_image.url}
    />
  {/if}
  <meta
    property="og:title"
    content={project.data.meta_title || project.data.project_title}
  />
  <meta
    property="og:description"
    content={project.data.meta_description || project.data.project_description}
  />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={project.data.meta_title || project.data.project_title}
  />
  <meta
    name="twitter:description"
    content={project.data.meta_description || project.data.project_description}
  />
</svelte:head>

<main class="u-layout-vflex main">
  <div class="u-layout-vflex inner">
    <!-- Render Prismic Slices -->
    <div class="u-layout-vflex body">
      <SliceZone slices={project.data.slices2} {components} />
    </div>

    <!-- Optional: Sidebar with metadata (uncomment if you want to use it) -->
    <!-- {#if project.data.metadata?.length > 0}
      <Sidebar
        heading="Project Details"
        description=""
        metadata={project.data.metadata}
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
