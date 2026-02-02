/**
 * Slice/Block component exports
 *
 * These components render content blocks from Kirby CMS.
 * The BlockRenderer component maps block types to these components.
 */

import ArticleFullBleed from "./ArticleFullBleed/index.svelte";
import ArticleHeader from "./ArticleHeader/index.svelte";
import ArticleImageBlock from "./ArticleImageBlock/index.svelte";
import ArticleNumberedGrid from "./ArticleNumberedGrid/index.svelte";
import ArticleTextBlock from "./ArticleTextBlock/index.svelte";
import StaticBioBlock from "./StaticBioBlock/index.svelte";

// Map Kirby block types to components
export const components = {
  "article-header": ArticleHeader,
  "article-full-bleed": ArticleFullBleed,
  "article-image-block": ArticleImageBlock,
  "article-numbered-grid": ArticleNumberedGrid,
  "article-text-block": ArticleTextBlock,
  "static-bio-block": StaticBioBlock,
};

// Named exports for direct imports
export {
  ArticleFullBleed,
  ArticleHeader,
  ArticleImageBlock,
  ArticleNumberedGrid,
  ArticleTextBlock,
  StaticBioBlock,
};
