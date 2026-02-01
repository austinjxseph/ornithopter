<!--
  ArticleHeader - Project/article title and description header

  Displays article title (h2) and long-form description text.
  Uses 4-column grid layout on desktop, stacked on mobile.
  Reusable across different content types (projects, blog posts, case studies).

  @component
  @example
  <ArticleHeader
    title="Designing an app for language therapy of children with Autism Spectrum Disorder."
    description="We partnered with a specialist autism training centre in Chennai, India to build an app..."
  />
-->

<script lang="ts">
  /**
   * Article/project title
   */
  export let title: string;

  /**
   * Long-form description text
   */
  export let description: string;
</script>

<header class="u-layout-vflex header">
  <div class="u-layout-vflex heading u-span-2">
    <h2>{title}</h2>
  </div>
  <div class="u-layout-vflex text gap-lg">
    <div class="u-layout-hflex row">
      <div class="u-layout-vflex col gap-xxs">
        <p class="text-md">{description}</p>
      </div>
    </div>
  </div>
</header>

<style>
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: var(--gap--md);
    padding-left: var(--global--margin);
    padding-right: var(--global--margin);
    padding-top: var(--padding--xl);
    padding-bottom: var(--padding--md);
    align-self: stretch;
  }

  @media screen and (max-width: 991px) {
    .header {
      padding-left: var(--global--margin);
      padding-right: var(--global--margin);
      display: flex;
      flex-direction: column;
      gap: var(--gap--xl);
      max-width: none;
      padding-top: var(--padding--xl);
      padding-bottom: var(--padding--sm);
      position: relative;
      top: 0;
    }
  }

  .heading {
    grid-column: span 2;
    max-width: 36rem;
  }

  @media screen and (max-width: 991px) {
    .heading {
      max-width: none;
    }
  }

  .text {
    /* Inherits grid positioning */
  }

  .row {
    align-self: stretch;
  }

  .col {
    /* Text column container */
  }
</style>
