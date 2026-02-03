/**
 * Svelte Web Components Entry Point
 *
 * Import all components here - they self-register as custom elements
 */

// Layout components
import "./components/Button.svelte";
import "./components/IndexCard.svelte";
import "./components/IndexHero.svelte";
import "./components/Header.svelte";
import "./components/Footer.svelte";

// Block components
import "./components/blocks/ArticleHeader.svelte";
import "./components/blocks/ArticleImageBlock.svelte";
import "./components/blocks/ArticleTextBlock.svelte";
import "./components/blocks/ArticleNumberedGrid.svelte";
import "./components/blocks/ArticleFullBleed.svelte";
import "./components/blocks/StaticBioBlock.svelte";

console.log("Svelte components loaded");
