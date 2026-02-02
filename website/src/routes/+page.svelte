<script lang="ts">
  import Index from "$lib/components/pages/Index.svelte";
  import type { KirbyHome, KirbyProject } from "$lib/kirby";

  export let data: {
    home: KirbyHome;
    projects: KirbyProject[];
  };
</script>

<svelte:head>
  <title>Austin Joseph, a Design Engineer based in London</title>
  <meta
    name="description"
    content="Design Engineer focused on brand and web, obsessed with building experiences bridging engineering and design."
  />
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
  ></script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
  ></script>
  <script src="https://unpkg.com/split-type@0.3.4/umd/index.min.js"></script>
  <script src="/js/script.js"></script>
  <script src="/js/ix.js"></script>
  <script src="/js/motion.js"></script>
</svelte:head>

<Index home={data.home} projects={data.projects} />
