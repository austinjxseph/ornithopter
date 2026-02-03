# Architecture Context

This document captures the current Kirby CMS + Svelte web components architecture.

---

## Overview

| Aspect | Setup |
|--------|-------|
| **CMS** | Kirby 4.x |
| **Frontend** | Svelte 5 web components |
| **Build** | Vite (IIFE bundle) |
| **Pattern** | Islands architecture |

---

## Project Structure

```
kirby/
├── assets/
│   ├── css/
│   │   ├── normalize.css
│   │   ├── variables.css
│   │   ├── styles.css
│   │   ├── keyframes.css
│   │   └── svelte.css          # Svelte component styles (built)
│   └── js/
│       └── components.js        # Svelte components bundle (built)
├── site/
│   ├── blueprints/             # Kirby field definitions
│   ├── snippets/
│   │   ├── blocks/             # Block snippet PHP files
│   │   ├── head.php
│   │   ├── header.php
│   │   ├── footer.php
│   │   └── scripts.php
│   └── templates/              # Page templates
└── svelte/
    ├── src/
    │   ├── register.ts         # Custom element factory
    │   ├── main.ts             # Entry point, registers all components
    │   └── components/
    │       ├── layout/         # Header, Footer, IndexHero
    │       ├── ui/             # Button, IndexCard
    │       └── blocks/         # Article blocks, StaticBioBlock
    ├── vite.config.ts
    ├── tsconfig.json
    └── package.json
```

---

## Svelte Web Components Architecture

### Why Not Native `<svelte:options customElement>`

Svelte's built-in custom element compilation (`customElement: true` in Vite config + `<svelte:options customElement={{ tag, shadow: "none" }}>`) causes issues:

1. **Duplicate content** - Data appears in both attributes AND rendered output
2. **Timing issues** - `shadow: "none"` causes incomplete renders
3. **Race conditions** - Attribute parsing vs component mounting conflicts

### Manual Wrapper Pattern

Instead, we use a manual factory pattern with two files:

#### `src/register.ts` - Custom Element Factory

```typescript
import { mount, unmount } from 'svelte';
import type { Component } from 'svelte';

export function registerSvelteElement(
  tag: string,
  ComponentClass: Component<any>,
  propNames: string[] = []
) {
  class SvelteElement extends HTMLElement {
    private _component: Record<string, any> | null = null;

    connectedCallback() {
      if (this._component) return;  // Guard against double-mounting
      this.innerHTML = '';           // Clear existing content

      // Get props from sibling script tag
      let props: Record<string, any> = {};
      const id = this.getAttribute('id');
      if (id) {
        const script = document.querySelector(`script[data-for="${id}"]`);
        if (script) {
          props = JSON.parse(script.textContent || '{}');
          script.remove();
        }
      }

      // Mount Svelte 5 component
      this._component = mount(ComponentClass, { target: this, props });
    }

    disconnectedCallback() {
      if (this._component) {
        unmount(this._component);
        this._component = null;
      }
    }
  }

  customElements.define(tag, SvelteElement);
}
```

#### `src/main.ts` - Registration Entry Point

```typescript
import { registerSvelteElement } from './register';
import Header from './components/layout/Header.svelte';
import Footer from './components/layout/Footer.svelte';
// ... other imports

registerSvelteElement('c-header', Header, ['rootpath', 'links']);
registerSvelteElement('c-footer', Footer, ['fixed', 'links']);
// ... other registrations
```

### Benefits

1. **No duplicate content** - Data only in script tags, not attributes
2. **No timing issues** - Clean mount/unmount lifecycle
3. **Centralized registration** - One line per component
4. **Clean Svelte files** - No web component config in .svelte files
5. **Automatic JSON parsing** - Script tag data already parsed

---

## Data Passing: PHP to Svelte

Data is passed via sibling `<script type="application/json">` tags, NOT attributes.

### PHP Pattern

```php
<?php
$blockId = "ar-header-" . $block->id();
$props = [
    "title" => $block->title()->value(),
    "description" => (string) $block->description()->kt(),  // Cast to string!
];
?>

<ar-header id="<?= $blockId ?>"></ar-header>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
```

### Critical: Cast Kirby Field Objects to Strings

Kirby methods like `->kt()`, `->kti()`, `->kirbytext()` return Field objects, not strings. When passed to `json_encode()`, they become `[object Object]`.

**Always cast to string:**
```php
// BAD - returns Field object
"title" => $page->hero_title()->kti()

// GOOD - returns string
"title" => (string) $page->hero_title()->kti()
```

---

## Svelte 5 Component Pattern

Components are pure Svelte 5 with `$props()` - no web component config.

### Simple Props

```svelte
<script lang="ts">
    let { title = "", description = "" } = $props();
</script>

<header>
    <h2>{title}</h2>
    <div>{@html description}</div>
</header>
```

### Array/Object Props

Props are passed as actual arrays/objects (not JSON strings) since `register.ts` parses the JSON.

```svelte
<script lang="ts">
    let { items = [] }: {
        items?: Array<{ content: string }>;
    } = $props();
</script>

{#each items as item}
    <div>{@html item.content}</div>
{/each}
```

### Derived State

Use `$derived()` for computed values:

```svelte
<script lang="ts">
    let { items = [] } = $props();
    let groupedItems = $derived(groupItems(items));
    
    function groupItems(items) { /* ... */ }
</script>
```

### Reactive State

Use `$state()` for local reactive state:

```svelte
<script lang="ts">
    let navState = $state("closed");
    
    function toggle() {
        navState = navState === "open" ? "closed" : "open";
    }
</script>
```

---

## Vite Build Configuration

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],  // NO customElement: true
  build: {
    outDir: "../assets",
    emptyOutDir: false,
    lib: {
      entry: "src/main.ts",
      name: "components",
      fileName: () => "js/components.js",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith(".css")) {
            return "css/svelte.css";
          }
          return "js/[name][extname]";
        },
      },
    },
  },
});
```

**Output:**
- `kirby/assets/js/components.js` - IIFE bundle with all components
- `kirby/assets/css/svelte.css` - Extracted component styles

---

## Component Registry

| Tag | Component | Props |
|-----|-----------|-------|
| `c-header` | Header | `rootpath`, `links` |
| `c-footer` | Footer | `fixed`, `links` |
| `c-indexhero` | IndexHero | `eyebrow`, `title`, `buttonlabel`, `buttonhref`, `projects` |
| `c-button` | Button | `href`, `label`, `active` |
| `c-indexcard` | IndexCard | `href`, `title`, `backgroundimage`, `overlayimage` |
| `ar-header` | ArticleHeader | `title`, `description` |
| `ar-img` | ArticleImageBlock | `images` |
| `ar-text` | ArticleTextBlock | `items` |
| `ar-grid` | ArticleNumberedGrid | `shownumbers`, `items` |
| `ar-fullbleed` | ArticleFullBleed | `image`, `alt`, `caption` |
| `s-bio` | StaticBioBlock | `heading`, `content`, `images`, `items` |

---

## Kirby Troubleshooting

### Reserved Method Names in Structure Fields

Kirby's StructureObject has reserved methods. Using these as field names causes conflicts:

| Reserved Name | Returns |
|---------------|---------|
| `content` | Content object |
| `id` | Structure item ID |
| `parent` | Parent object |
| `site` | Site object |
| `kirby` | Kirby instance |

**Workaround:** Use `$item->toArray()['fieldname']`:

```php
foreach ($block->items()->toStructure() as $item) {
    $itemData = $item->toArray();
    $items[] = [
        'content' => $itemData['content'] ?? '',  // Not $item->content()
    ];
}
```

### Blueprint/Snippet Field Mismatches

When blocks render empty, verify:
1. Blueprint field names match what PHP expects
2. Single file fields vs structure fields are handled correctly
3. Add fallback logic for backwards compatibility

---

## Build Commands

```bash
cd kirby/svelte

# Development (watch mode)
npm run dev

# Production build
npm run build

# Type checking
npm run check
```

---

## CSS Architecture

| File | Purpose |
|------|---------|
| `normalize.css` | Reset/normalize |
| `variables.css` | CSS custom properties |
| `styles.css` | Global styles |
| `keyframes.css` | Animations |
| `svelte.css` | Svelte component styles (scoped) |

All CSS files loaded in `snippets/head.php`. Svelte's scoped CSS uses hashed class names (e.g., `.c-header.svelte-4b3o1e`) and does NOT use Shadow DOM.
