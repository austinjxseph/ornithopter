<script>
  import { page } from "$app/stores";
  import "../lib/styles/variables.css";
  import "../lib/styles/normalize.css";
  import "../lib/styles/styles.css";
  import "../lib/styles/keyframes.css";

  // Import components
  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";

  // Import motion utilities
  import "../lib/scripts/motion.js";
</script>

<div class="page">
  <Header />
  <main class="u-layout-vflex main">
    <slot />
  </main>
  <Footer fixed={$page.url.pathname === "/"} />
</div>
