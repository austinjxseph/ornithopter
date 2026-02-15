# Barba.js Page Transitions

## What was done

Barba.js was already loaded via CDN but lacked proper HTML attributes and had only a basic fade transition. The full implementation adds container-scoped transitions that keep the header persistent and custom exit choreography for the 3 home page exit contexts.

## Changes

### PHP — Barba container setup

- `site/snippets/head.php` — Added `data-barba="wrapper"` to `.page` div so Barba knows the outermost wrapper
- All 8 templates (`home`, `project`, `about`, `projects`, `default`, `thoughts`, `thought`, `error`) — Added `data-barba="container"` and `data-barba-namespace` to each `<main>` tag so only main content gets swapped; header and footer persist

### Svelte — Exit context detection & navigation fix

- `Reel.svelte` — Replaced `window.location.href` (which bypassed Barba entirely) with a `reel-navigate` CustomEvent that bubbles up to `script.js`
- `Header.svelte` — Added `data-exit-context="navbar"` to nav links and a `barba-close-nav` event listener to reset drawer state after transitions
- `Button.svelte` — Added `data-exit-context="cta"` to the anchor tag
- `LayoutIndex.svelte` — Added `data-exit-context="project"` to slot list project links

### script.js — Transition logic

Rewrote `initBarba()` with two transition definitions:

1. **`home-leave`** (from namespace `home`) — Reads `data-exit-context` from the clicked element (or a module-scoped variable for Reel canvas clicks) and runs one of 3 GSAP timelines:
   - **navbar**: Drawer slides closed + overlay fades, then main fades out
   - **cta**: Heading floats up + track fades, then container fades out
   - **project-card / project**: Text panel slides left, then container fades out

2. **`default`** — Simple opacity fade for all non-home page transitions

Both transitions stop Lenis before leave, reset scroll to top on enter, restart Lenis after, and refresh ScrollTrigger for new content.

## How exit context detection works

- Clickable elements have `data-exit-context` attributes (`"navbar"`, `"cta"`, `"project"`)
- Barba passes `data.trigger` (the clicked `<a>`) to the `leave` hook — reading `data.trigger.dataset.exitContext` identifies the choreography
- For Reel canvas clicks (programmatic `barba.go()`), a module-scoped `exitContext` variable is set to `"project-card"` before calling `barba.go()`

## How the preloader integrates

- The preloader is outside `<main>` (outside the Barba container), so it is unaffected by transitions
- On initial home page load, `script.js` hides `<main>` with `opacity: 0` and waits for the `preloader-done` event before revealing
- On subsequent Barba navigations there is no preloader; the `enter` hook handles the fade-in

## Tuning

Exit animation timings and transforms are in `assets/js/script.js` inside the `home-leave` transition's `leave` function. Adjust durations, easing, and transform values (e.g. `y: -30` for CTA float, `x: -60` for project slide) to taste.
