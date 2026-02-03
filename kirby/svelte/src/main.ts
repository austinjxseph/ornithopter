/**
 * Svelte Web Components Entry Point
 *
 * Uses manual wrapper pattern with Svelte 5 mount/unmount API
 * to avoid timing issues with shadow: "none" custom elements
 */

import { registerSvelteElement } from "./register";

// Layout components
import Header from "./components/layout/Header.svelte";
import Footer from "./components/layout/Footer.svelte";
import IndexHero from "./components/layout/IndexHero.svelte";

// UI components
import Button from "./components/ui/Button.svelte";
import IndexCard from "./components/ui/IndexCard.svelte";

// Block components
import ArticleHeader from "./components/blocks/ArticleHeader.svelte";
import ArticleImageBlock from "./components/blocks/ArticleImageBlock.svelte";
import ArticleTextBlock from "./components/blocks/ArticleTextBlock.svelte";
import ArticleNumberedGrid from "./components/blocks/ArticleNumberedGrid.svelte";
import ArticleFullBleed from "./components/blocks/ArticleFullBleed.svelte";
import StaticBioBlock from "./components/blocks/StaticBioBlock.svelte";

// Register layout components
registerSvelteElement("c-header", Header, ["rootpath", "links"]);
registerSvelteElement("c-footer", Footer, ["fixed", "links"]);
registerSvelteElement("c-indexhero", IndexHero, [
  "eyebrow",
  "title",
  "buttonlabel",
  "buttonhref",
  "projects",
]);

// Register UI components
registerSvelteElement("c-button", Button, ["href", "label", "active"]);
registerSvelteElement("c-indexcard", IndexCard, [
  "href",
  "title",
  "backgroundimage",
  "overlayimage",
]);

// Register block components
registerSvelteElement("ar-header", ArticleHeader, ["title", "description"]);
registerSvelteElement("ar-img", ArticleImageBlock, ["images"]);
registerSvelteElement("ar-text", ArticleTextBlock, ["items"]);
registerSvelteElement("ar-grid", ArticleNumberedGrid, ["shownumbers", "items"]);
registerSvelteElement("ar-fullbleed", ArticleFullBleed, [
  "image",
  "alt",
  "caption",
]);
registerSvelteElement("s-bio", StaticBioBlock, [
  "heading",
  "content",
  "images",
  "items",
]);

console.log("Svelte components loaded");
