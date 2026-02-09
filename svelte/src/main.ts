/**
 * Svelte Web Components Entry Point
 *
 * Uses manual wrapper pattern with Svelte 5 mount/unmount API
 * to avoid timing issues with shadow: "none" custom elements
 */

import { registerSvelteElement } from "./register";

// Global components
import Header from "./components/global/Header.svelte";
import Footer from "./components/global/Footer.svelte";

// Layout components
import LayoutIndex from "./components/layout/LayoutIndex.svelte";
import LayoutAbout from "./components/layout/LayoutAbout.svelte";
import Layout404 from "./components/layout/Layout404.svelte";

// UI components
import Button from "./components/ui/Button.svelte";
import IndexCard from "./components/ui/IndexCard.svelte";
import IndexWheel from "./components/ui/IndexWheel.svelte";

// Block components
import BlockHeader from "./components/blocks/BlockHeader.svelte";
import BlockImage from "./components/blocks/BlockImage.svelte";
import BlockText from "./components/blocks/BlockText.svelte";
import BlockGrid from "./components/blocks/BlockGrid.svelte";
import BlockFullBleed from "./components/blocks/BlockFullBleed.svelte";

// Register global components
registerSvelteElement("c-header", Header, ["rootpath", "links"]);
registerSvelteElement("c-footer", Footer, ["fixed", "links"]);

// Register layout components
registerSvelteElement("l-home", LayoutIndex, [
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
registerSvelteElement("c-indexwheel", IndexWheel, ["projects"]);

// Register block components
registerSvelteElement("b-header", BlockHeader, [
  "title",
  "description",
  "layout",
]);
registerSvelteElement("b-img", BlockImage, ["images", "spacing"]);
registerSvelteElement("b-text", BlockText, ["items"]);
registerSvelteElement("b-grid", BlockGrid, ["shownumbers", "items"]);
registerSvelteElement("b-fullbleed", BlockFullBleed, [
  "image",
  "alt",
  "caption",
]);

registerSvelteElement("l-about", LayoutAbout, ["images", "items"]);

registerSvelteElement("l-404", Layout404, [
  "title",
  "message",
  "buttonlabel",
  "buttonhref",
]);

console.log("Svelte components loaded");
