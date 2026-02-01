<!--
  Index - Homepage component with hero section and project showcase

  Full-viewport experience with sticky left panel (hero) and
  scrolling right track (project cards).

  @component
-->

<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import IndexCard from "$lib/components/IndexCard.svelte";

  // Receive projects from Prismic via parent +page.svelte
  export let projects = [];
</script>

<main class="u-layout-vflex main">
  <section class="u-layout-vflex section-hr">
    <div class="u-layout-vflex container-xl">
      <div class="u-layout-hflex inner">
        <!-- Left Panel: Hero Section (Sticky) -->
        <div class="u-layout-vflex wrap">
          <div class="u-layout-hflex text">
            <div class="u-layout-vflex heading gap-md">
              <div class="u-layout-hflex eyebrow">
                <div class="marker"></div>
                <div class="text-lg">Available for freelance work</div>
              </div>
              <h1>
                Digital Designer and Creative Developer,
                <span class="u-font-accent">obsessed</span>
                with building products bridging engineering and design. Avid
                <span class="u-font-accent">Garamond</span>
                lover and passionate Times New Roman hater.
              </h1>
              <Button active={true} buttonText="Information" />
            </div>
          </div>
        </div>

        <!-- Right Panel: Project Showcase (Scrolling) -->
        <div class="u-layout-vflex track">
          {#each projects as project}
            <IndexCard
              href="/work/{project.uid}"
              title={project.data.project_title}
              backgroundImage={project.data.thumbnail_base}
              overlayImage={project.data.thumbnail_overlay}
            />
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .inner {
    flex: 1;
    align-self: stretch;
  }

  @media screen and (max-width: 991px) {
    .inner {
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      flex-flow: column;
      max-height: none;
    }
  }

  .wrap {
    position: sticky;
    flex: 1;
    top: 0px;
    height: 100dvh;
  }

  @media screen and (max-width: 991px) {
    .wrap {
      position: relative;
      height: auto;
    }
  }

  .text {
    padding-right: var(--global--margin);
    padding-left: var(--global--margin);
    padding-top: var(--_units---abs--32);
    padding-bottom: var(--_units---abs--24);
    flex: 1;
    position: relative;
    justify-content: start;
    align-self: stretch;
    align-items: flex-start;
  }

  @media screen and (max-width: 991px) {
    .text {
      padding-top: 8rem;
      padding-bottom: 4rem;
      grid-column-gap: 3rem;
      grid-row-gap: 3rem;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }

  .track {
    padding-right: var(--global--margin);
    padding-left: var(--global--margin);
    padding-top: var(--_units---abs--32);
    padding-bottom: var(--_units---abs--16);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
    flex: 1;
    align-self: stretch;
    max-width: calc(100vh - 2 * (var(--padding--lg)));
    height: fit-content;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media screen and (max-width: 991px) {
    .track {
      grid-column-gap: var(--global--margin);
      grid-row-gap: var(--global--margin);
      flex: 1;
      max-width: none;
      padding-top: 0;
      overflow: hidden;
    }
  }

  .eyebrow {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
    color: var(--_themes---site--text--text-secondary);
    justify-content: flex-start;
    align-items: center;
  }

  .marker {
    background-color: var(--_themes---site--bg--bg-active);
    border-radius: 4px;
    width: 8px;
    height: 4px;
  }

  .heading {
    align-self: flex-end;
    max-width: 40rem;
    justify-content: flex-start;
  }
</style>
