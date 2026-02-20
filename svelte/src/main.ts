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
import Preloader from "./components/global/Preloader.svelte";

// Layout components
import LayoutIndex from "./components/layout/LayoutIndex.svelte";
import LayoutAbout from "./components/layout/LayoutAbout.svelte";
import LayoutText from "./components/layout/LayoutText.svelte";
import Layout404 from "./components/layout/Layout404.svelte";

// UI components
import Button from "./components/ui/Button.svelte";
import IndexCard from "./components/ui/IndexCard.svelte";
import Asterisk from "./components/ui/Asterisk.svelte";
import Helix from "./components/ui/Helix.svelte";
import Drum from "./components/ui/Drum.svelte";
import Reel from "./components/ui/Reel.svelte";
import Strip from "./components/ui/Strip.svelte";

// Block components
import BlockHeader from "./components/blocks/BlockHeader.svelte";
import BlockImage from "./components/blocks/BlockImage.svelte";
import BlockText from "./components/blocks/BlockText.svelte";
import BlockGrid from "./components/blocks/BlockGrid.svelte";
import BlockFullBleed from "./components/blocks/BlockFullBleed.svelte";

// Register global components
registerSvelteElement("c-header", Header, ["rootpath", "links"]);
registerSvelteElement("c-footer", Footer, ["fixed", "links"]);
registerSvelteElement("c-preloader", Preloader, ["title", "images"]);

// Register layout components
registerSvelteElement("l-index", LayoutIndex, [
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
registerSvelteElement("c-asterisk", Asterisk, ["images"]);
registerSvelteElement("c-helix", Helix, ["images"]);
registerSvelteElement("c-drum", Drum, ["images"]);
registerSvelteElement("c-reel", Reel, ["projects"]);
registerSvelteElement("c-strip", Strip, ["projects"]);

// Register block components
registerSvelteElement("b-header", BlockHeader, [
  "title",
  "description",
  "layout",
]);
registerSvelteElement("b-img", BlockImage, ["images", "spacing"]);
registerSvelteElement("b-text", BlockText, ["columns", "items"]);
registerSvelteElement("b-grid", BlockGrid, ["columns", "items"]);
registerSvelteElement("b-fullbleed", BlockFullBleed, [
  "image",
  "alt",
  "caption",
]);

registerSvelteElement("l-about", LayoutAbout, ["images", "items"]);
registerSvelteElement("l-text", LayoutText, ["items"]);

registerSvelteElement("l-404", Layout404, [
  "title",
  "message",
  "buttonlabel",
  "buttonhref",
]);

console.log("Svelte components loaded");

// Signal that all components have been registered and hydrated
window.dispatchEvent(new CustomEvent("svelte-ready"));
