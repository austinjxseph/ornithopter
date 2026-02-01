<script>
  import mailIcon from "$lib/assets/icons/mail.png";
  import linkedinIcon from "$lib/assets/icons/linkedin.png";
  import readcvIcon from "$lib/assets/icons/readcv.png";
  import blueskyIcon from "$lib/assets/icons/bluesky.png";
  import githubIcon from "$lib/assets/icons/github.png";

  export let rootPath = "/";
  export let fixed = false;

  // Get current year dynamically
  const currentYear = new Date().getFullYear();
</script>

<footer class="u-layout-vflex component" class:fixed>
  <div class="vignette"></div>
  <div class="u-layout-vflex inner">
    <div class="u-layout-hflex row copyright">
      <div class="u-layout-vflex u-text-secondary">
        <div class="text-sm">
          ©
          <span data-nav-footer="year">{currentYear}</span> Austin Joseph.
        </div>
      </div>
    </div>
    <ul role="list" class="row">
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img src={mailIcon} width="24" height="24" alt="Email" />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img src={linkedinIcon} width="24" height="24" alt="LinkedIn" />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img src={readcvIcon} width="24" height="24" alt="Read CV" />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img src={blueskyIcon} width="24" height="24" alt="Bluesky" />
          <div class="u-border"></div>
        </a>
      </li>
      <li>
        <a href="{rootPath}#" class="link u-inline-block">
          <img src={githubIcon} width="24" height="24" alt="GitHub" />
          <div class="u-border"></div>
        </a>
      </li>
    </ul>
  </div>
</footer>

<style>
  .component {
    padding: 1.2rem var(--global--margin);
    flex-flow: column;
    justify-content: center;
    align-self: stretch;
    align-items: flex-start;
    display: flex;
    position: relative;
  }

  .vignette {
    position: absolute;
    inset: 0;
    min-height: 10vh;
    background: linear-gradient(to top, var(--_themes---site--bg--bg-primary) 0%, color-mix(in srgb, var(--_themes---site--bg--bg-primary) 80%, transparent) 40%, transparent 100%);
    z-index: 0;
    pointer-events: none;
  }

  .inner {
    position: relative;
    z-index: 1;
  }

  .fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .inner {
    max-width: var(--max-width--xl);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    flex-flow: row;
    justify-content: space-between;
    align-self: stretch;
    align-items: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .row {
    grid-column-gap: 0.75rem;
    grid-row-gap: 0.75rem;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
  }

  .copyright {
    align-self: stretch;
  }

  .link {
    position: relative;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Mobile Responsive */
  @media screen and (max-width: 991px) {
    .inner {
      grid-column-gap: 12px;
      grid-row-gap: 12px;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
