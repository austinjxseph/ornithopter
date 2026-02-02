# Architecture Context v2: Kirby + Svelte Web Components

This document describes the refactored architecture - a single Kirby application with Svelte components compiled as Web Components.

---

## Overview

| Aspect | Setup |
|--------|-------|
| **CMS & Backend** | Kirby 5.2 (PHP) |
| **Frontend Components** | Svelte 5 (compiled to Web Components) |
| **Templating** | Kirby PHP templates + snippets |
| **Routing** | Kirby (file-based content) |
| **Hosting** | Single Railway service |

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  Single Kirby Application                                    │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Kirby (PHP)                                         │    │
│  │                                                      │    │
│  │  • Panel (content editing)                          │    │
│  │  • Routing (content structure)                      │    │
│  │  • PHP Templates + Snippets                         │    │
│  │  • Serves HTML with embedded Web Components         │    │
│  └─────────────────────────────────────────────────────┘    │
│                         │                                    │
│                         ▼                                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  Browser                                             │    │
│  │                                                      │    │
│  │  • Receives HTML from Kirby                         │    │
│  │  • Loads compiled Svelte JS bundle                  │    │
│  │  • Web Components hydrate and become interactive    │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Project Structure

```
kirby/
├── assets/
│   ├── css/
│   │   ├── normalize.css
│   │   ├── variables.css
│   │   ├── styles.css
│   │   └── keyframes.css
│   └── js/
│       └── components.js        ← Compiled Svelte web components
│
├── svelte/                      ← Svelte source (NEW)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button.svelte
│   │   │   ├── IndexCard.svelte
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── blocks/
│   │   │       ├── ArticleHeader.svelte
│   │   │       ├── ArticleImageBlock.svelte
│   │   │       ├── ArticleTextBlock.svelte
│   │   │       ├── ArticleNumberedGrid.svelte
│   │   │       ├── ArticleFullBleed.svelte
│   │   │       └── StaticBioBlock.svelte
│   │   └── main.ts              ← Entry point, registers all components
│   ├── package.json
│   └── vite.config.ts
│
├── content/
│   ├── site.txt
│   ├── 1_home/
│   ├── 2_about/
│   ├── 3_projects/
│   │   └── 1_sample-project/
│   └── 4_thoughts/
│
├── site/
│   ├── blueprints/
│   │   ├── site.yml
│   │   ├── pages/
│   │   │   ├── home.yml
│   │   │   ├── default.yml
│   │   │   ├── project.yml
│   │   │   ├── projects.yml
│   │   │   ├── thought.yml
│   │   │   └── thoughts.yml
│   │   ├── blocks/
│   │   │   ├── article-header.yml
│   │   │   ├── article-image-block.yml
│   │   │   ├── article-text-block.yml
│   │   │   ├── article-numbered-grid.yml
│   │   │   ├── article-full-bleed.yml
│   │   │   └── static-bio-block.yml
│   │   └── sections/
│   │       ├── projects.yml
│   │       └── thoughts.yml
│   │
│   ├── config/
│   │   └── config.php
│   │
│   ├── templates/               ← PHP templates using web components
│   │   ├── home.php
│   │   ├── default.php
│   │   ├── project.php
│   │   ├── projects.php
│   │   ├── thought.php
│   │   └── thoughts.php
│   │
│   ├── snippets/
│   │   ├── header.php
│   │   ├── footer.php
│   │   ├── head.php
│   │   ├── scripts.php
│   │   └── blocks/              ← Block snippets using web components
│   │       ├── article-header.php
│   │       ├── article-image-block.php
│   │       ├── article-text-block.php
│   │       ├── article-numbered-grid.php
│   │       ├── article-full-bleed.php
│   │       └── static-bio-block.php
│   │
│   └── plugins/
│       └── headless-api/        ← Keep for potential future API use
│
├── media/
├── vendor/
├── composer.json
├── index.php
├── router.php
└── Dockerfile
```

---

## Svelte Web Components

### How It Works

1. **Svelte components** are written with `<svelte:options customElement="tag-name" />`
2. **Vite** compiles them into a single JS bundle (`components.js`)
3. **Kirby PHP templates** use them as HTML custom elements
4. **Browser** loads the JS and hydrates the components

### Component Registration

```typescript
// svelte/src/main.ts
// Each component self-registers via customElement option
import './components/Button.svelte';
import './components/IndexCard.svelte';
import './components/Header.svelte';
import './components/Footer.svelte';
import './components/blocks/ArticleHeader.svelte';
// ... etc
```

### Example Component

```svelte
<!-- svelte/src/components/Button.svelte -->
<svelte:options customElement="animated-button" />

<script lang="ts">
  export let label: string = 'Click me';
  export let href: string = '#';
  export let active: boolean = false;
</script>

<a {href} class="button" class:active>
  <span class="button__text">{label}</span>
  <span class="button__border"></span>
</a>

<style>
  .button {
    /* Scoped styles */
  }
</style>
```

### Usage in PHP Template

```php
<?php // site/templates/home.php ?>
<?php snippet('header') ?>

<main class="u-layout-vflex main">
  <section class="u-layout-vflex section-hr">
    <div class="index__hero">
      <p class="index__eyebrow"><?= $page->hero_eyebrow() ?></p>
      <h1><?= $page->hero_title()->kt() ?></h1>
      <animated-button 
        label="<?= $page->hero_button_label() ?>" 
        href="<?= $page->hero_button_link() ?>"
        active
      ></animated-button>
    </div>

    <div class="index__projects">
      <?php foreach (page('projects')->children()->listed()->filterBy('showcase', true)->limit(4) as $project): ?>
        <index-card
          href="<?= $project->url() ?>"
          title="<?= $project->project_title() ?>"
          background-image="<?= $project->thumbnail_base()->toFile()?->url() ?>"
          overlay-image="<?= $project->thumbnail_overlay()->toFile()?->url() ?>"
        ></index-card>
      <?php endforeach ?>
    </div>
  </section>
</main>

<?php snippet('footer') ?>
```

---

## Components to Convert

### Interactive Components (Web Components)

These need interactivity/reactivity, so they become web components:

| Component | Custom Element | Purpose |
|-----------|---------------|---------|
| `Button.svelte` | `<animated-button>` | Animated CTA button |
| `IndexCard.svelte` | `<index-card>` | Project card with hover effects |
| `Header.svelte` | `<site-header>` | Navigation with mobile menu |
| `Footer.svelte` | `<site-footer>` | Footer with social links |

### Block Components (Web Components)

These render CMS blocks:

| Component | Custom Element | Purpose |
|-----------|---------------|---------|
| `ArticleHeader.svelte` | `<article-header>` | Title + description |
| `ArticleImageBlock.svelte` | `<article-image-block>` | Image grid |
| `ArticleTextBlock.svelte` | `<article-text-block>` | Text columns |
| `ArticleNumberedGrid.svelte` | `<article-numbered-grid>` | Numbered list |
| `ArticleFullBleed.svelte` | `<article-full-bleed>` | Full-width image |
| `StaticBioBlock.svelte` | `<static-bio-block>` | Bio section |

### Static Elements (Pure PHP/HTML)

These don't need JS, can be pure PHP snippets:

- Basic layout structure
- SEO meta tags
- Simple text content
- Non-interactive images

---

## Data Flow

### Before (Headless)
```
Kirby API → SvelteKit fetch → Svelte components → HTML
```

### After (Integrated)
```
Kirby content → PHP template → HTML with Web Components → Browser hydration
```

### Example: Project Page

```php
<?php // site/templates/project.php ?>
<?php snippet('header') ?>

<main>
  <?php foreach ($page->blocks()->toBlocks() as $block): ?>
    <?php snippet('blocks/' . $block->type(), ['block' => $block]) ?>
  <?php endforeach ?>
</main>

<?php snippet('footer') ?>
```

```php
<?php // site/snippets/blocks/article-header.php ?>
<article-header
  title="<?= $block->title()->html() ?>"
  description="<?= $block->description()->kt() ?>"
></article-header>
```

---

## Build Process

### Development

```bash
# Terminal 1: Watch Svelte components
cd kirby/svelte && npm run dev

# Terminal 2: Serve Kirby
cd kirby && php -S localhost:8000 router.php
```

### Production Build

```bash
cd kirby/svelte && npm run build
# Outputs to kirby/assets/js/components.js
```

### Vite Config

```typescript
// svelte/vite.config.ts
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],
  build: {
    outDir: '../assets/js',
    lib: {
      entry: 'src/main.ts',
      name: 'components',
      fileName: () => 'components.js',
      formats: ['iife'],
    },
  },
});
```

---

## CSS Strategy

### Option A: Keep in Svelte (Scoped)

Each component has scoped styles inside `<style>` tags. Encapsulated in Shadow DOM.

### Option B: Global CSS (Recommended)

Keep existing CSS files, components use global classes:

```php
<!-- head.php -->
<link rel="stylesheet" href="/assets/css/normalize.css">
<link rel="stylesheet" href="/assets/css/variables.css">
<link rel="stylesheet" href="/assets/css/styles.css">
<link rel="stylesheet" href="/assets/css/keyframes.css">
```

Components can disable Shadow DOM to use global styles:

```svelte
<svelte:options customElement={{ tag: "index-card", shadow: "none" }} />
```

---

## Deployment

### Single Railway Service

```dockerfile
# Dockerfile
FROM php:8.2-apache

# Install extensions
RUN apt-get update && apt-get install -y \
    libzip-dev zip unzip nodejs npm \
    && docker-php-ext-install zip

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Install PHP dependencies
COPY composer.json composer.lock* ./
RUN composer install --no-dev --optimize-autoloader

# Build Svelte components
COPY svelte/package*.json ./svelte/
RUN cd svelte && npm ci

COPY svelte ./svelte
RUN cd svelte && npm run build

# Copy application
COPY . .

# Apache config
RUN a2enmod rewrite
COPY apache.conf /etc/apache2/sites-available/000-default.conf

EXPOSE 80
CMD ["apache2-foreground"]
```

---

## Migration Checklist

### Phase 1: Setup Svelte Build
- [ ] Create `kirby/svelte/` directory
- [ ] Setup package.json with Svelte 5 + Vite
- [ ] Configure Vite for web component output
- [ ] Create main.ts entry point

### Phase 2: Convert Components
- [ ] Convert Button.svelte to web component
- [ ] Convert IndexCard.svelte to web component
- [ ] Convert Header.svelte to web component
- [ ] Convert Footer.svelte to web component
- [ ] Convert all block components to web components

### Phase 3: Create PHP Templates
- [ ] Create base snippets (head.php, header.php, footer.php, scripts.php)
- [ ] Create home.php template
- [ ] Create default.php template (about page)
- [ ] Create project.php template
- [ ] Create projects.php template
- [ ] Create thought.php template
- [ ] Create thoughts.php template
- [ ] Create block snippets for each block type

### Phase 4: Move Assets
- [ ] Move CSS files to kirby/assets/css/
- [ ] Move any static JS to kirby/assets/js/
- [ ] Update asset paths in templates

### Phase 5: Cleanup
- [ ] Remove old website/ directory (SvelteKit app)
- [ ] Update Dockerfile for single service
- [ ] Update documentation
- [ ] Test all pages and components

---

## Benefits of This Approach

1. **Single service** - One Railway deployment, simpler infrastructure
2. **Kirby templating** - Clean, readable PHP templates
3. **Svelte components** - Keep reactive UI where needed
4. **No API layer** - Direct content access, faster page loads
5. **SEO friendly** - Server-rendered HTML, hydrated client-side
6. **Simpler mental model** - Content flows directly to templates

---

## Limitations

1. **No SvelteKit features** - No file-based routing, no server actions
2. **Client-side hydration only** - Components aren't SSR'd (but HTML is)
3. **Shadow DOM considerations** - May need `shadow: "none"` for global CSS
4. **Build step required** - Must compile Svelte before deployment
