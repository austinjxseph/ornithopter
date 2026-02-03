/**
 * Svelte Web Components Entry Point
 *
 * Import all components here - they self-register as custom elements
 */

// Layout components (page-level, fixed/sticky positioning)
import "./components/layout/Header.svelte";
import "./components/layout/Footer.svelte";
import "./components/layout/IndexHero.svelte";

// UI components (reusable primitives)
import "./components/ui/Button.svelte";
import "./components/ui/IndexCard.svelte";

// Block components (CMS-driven content blocks)
import "./components/blocks/ArticleHeader.svelte";
import "./components/blocks/ArticleImageBlock.svelte";
import "./components/blocks/ArticleTextBlock.svelte";
import "./components/blocks/ArticleNumberedGrid.svelte";
import "./components/blocks/ArticleFullBleed.svelte";
import "./components/blocks/StaticBioBlock.svelte";

console.log("Svelte components loaded");
