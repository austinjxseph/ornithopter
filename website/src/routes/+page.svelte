<script>
  import Index from "$lib/components/pages/Index.svelte";

  export let data;
</script>

<svelte:head>
  <title>Austin Joseph, a Design Engineer based in London</title>
  <meta
    name="description"
    content="Design Engineer focused on brand and web, obsessed with building experiences bridging engineering and design."
  />
  <script
    src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67a7f3d67329e4f8c06e55ab"
    type="text/javascript"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></script>
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

<Index projects={data.projects} />
