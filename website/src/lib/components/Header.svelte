<script>
  import { onMount } from "svelte";

  export let rootPath = "/";

  let navState = "closed";
  let navbarElement;

  function toggleNavigation() {
    navState = navState === "open" ? "closed" : "open";
    document.body.style.overflow = navState === "open" ? "hidden" : "";
  }

  onMount(() => {
    // Any additional setup if needed
  });
</script>

<header
  bind:this={navbarElement}
  data-nav-state={navState}
  data-nav-element="navbar"
  class="u-layout-vflex navbar"
>
  <div class="u-layout-hflex inner">
    <button
      data-nav-element="overlay"
      aria-hidden="true"
      class="overlay"
      on:click={toggleNavigation}
    ></button>

    <a href={rootPath} aria-label="Go Back Home" class="logo u-inline-block">
      Austin Joseph
    </a>

    <ul role="list" class="drawer u-list-unstyled">
      <li class="links">
        <a href="#" class="link u-inline-block">
          <h3>Sandbox</h3>
        </a>
        <a href="#" class="link u-inline-block">
          <h3>Gallery</h3>
        </a>
        <a href="#" class="link u-inline-block">
          <h3>About</h3>
        </a>
        <a href="#" class="link u-inline-block">
          <h3>Resume</h3>
        </a>
      </li>
    </ul>

    <button
      data-nav-element="menu"
      class="menu u-inline-block"
      on:click={toggleNavigation}
    >
      <div class="marker"></div>
      <div>Menu</div>
    </button>
  </div>
</header>

<style>
  .navbar {
    z-index: 3;
    padding: 1rem var(--global--margin);
    color: var(--_themes---site--text--text-primary);
    font-size: var(--h4--font-size);
    line-height: var(--h4--line-height);
    border-bottom: 1px solid #0000;
    align-self: stretch;
    transition: all 0.3s;
    position: fixed;
    inset: 0% 0% auto;
  }

  .inner {
    max-width: var(--max-width--xl);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    flex: 1;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 1fr;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
  }

  .link {
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 4px;
    display: flex;
    position: relative;
    overflow: hidden;
    opacity: 1;
    transition: opacity 0.2s;
    font-size: 32px;
    line-height: 1.4em;
    letter-spacing: -0.02em;
  }

  .links:hover .link {
    opacity: 0.2;
  }

  .links:hover .link:hover {
    opacity: 1;
  }

  .link.is-marker {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  .overlay {
    z-index: 3;
    opacity: 0;
    display: none;
    background-color: rgba(0, 0, 0, 0.4);
    height: 100dvh;
    transition: opacity 0.15s;
    position: absolute;
    inset: 0%;
  }

  .logo {
    z-index: 5;
    position: relative;
  }

  .drawer {
    position: absolute;
    inset: 0% 0% 0% 0%;
    z-index: 4;
    display: flex;
    flex-direction: column;
    gap: var(--gap--xxl);
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    padding: var(--global--margin);
    transition:
      transform 0.3s,
      opacity 0.3s,
      backdrop-filter 0.3s;
  }

  .marker {
    background-color: #fff;
    border-radius: 24px;
    width: 18px;
    height: 4px;
    transition:
      width 0.3s,
      background-color 0.15s;
  }

  .links {
    gap: 8px;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  .icon {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1.125rem;
    height: 1.1875rem;
    display: flex;
  }

  .menu {
    background-color: transparent;
    position: relative;
    grid-column-gap: 0.75rem;
    grid-row-gap: 0.75rem;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    cursor: pointer;
  }

  [data-nav-element="menu"] {
    z-index: 9;
  }

  [data-nav-state="closed"] .drawer {
    pointer-events: none;
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  [data-nav-state="open"] .drawer {
    pointer-events: auto;
    opacity: 1;
    backdrop-filter: blur(40px);
  }

  [data-nav-state="open"] .overlay {
    opacity: 100%;
    display: block;
  }

  [data-nav-state="closed"] .overlay {
    opacity: 0%;
    display: none;
  }

  .link:hover .u-border {
    transform: translateY(0%);
  }

  [data-nav-state="open"] .marker {
    width: 6px;
    background-color: #e83452;
  }

  @media (min-width: 1920px) {
    .drawer {
      max-width: none;
    }
  }

  @media screen and (max-width: 991px) {
    .navbar {
      font-size: var(--paragraph--font-size-s);
    }

    .inner {
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      padding-left: 0;
      padding-right: 0;
      display: flex;
    }

    .drawer {
      width: 60vw;
      max-width: none;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }


  }
</style>
