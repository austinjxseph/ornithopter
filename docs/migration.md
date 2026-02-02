# Prismic → Kirby Migration Plan

This document outlines the step-by-step migration from Prismic to Kirby (headless) with SvelteKit frontend.

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│  Railway Project                                             │
│                                                              │
│  ┌──────────────────┐         ┌──────────────────────┐      │
│  │  kirby/          │  JSON   │  website/            │      │
│  │  (PHP service)   │ ◄─────► │  (Node service)      │      │
│  │                  │   API   │                      │      │
│  │  • Kirby Panel   │         │  • SvelteKit         │      │
│  │  • Content API   │         │  • Your components   │      │
│  │  • File storage  │         │  • Public frontend   │      │
│  └──────────────────┘         └──────────────────────┘      │
│                                                              │
│  Internal: kirby.railway.internal                            │
│  Public: yourdomain.com                                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Migration Phases

- [Phase 1: Kirby Setup](#phase-1-kirby-setup)
- [Phase 2: Blueprints & Blocks](#phase-2-blueprints--blocks)
- [Phase 3: Kirby API Configuration](#phase-3-kirby-api-configuration)
- [Phase 4: SvelteKit Integration](#phase-4-sveltekit-integration)
- [Phase 5: Content Migration](#phase-5-content-migration)
- [Phase 6: Railway Deployment](#phase-6-railway-deployment)
- [Phase 7: Cleanup](#phase-7-cleanup)

---

## Phase 1: Kirby Setup

### 1.1 Create Kirby project structure

- [ ] Create `kirby/` directory in repo root
- [ ] Install Kirby via Composer:
  ```bash
  cd kirby
  composer require getkirby/cms
  ```
- [ ] Create entry point `kirby/index.php`:
  ```php
  <?php
  require __DIR__ . '/vendor/autoload.php';
  $kirby = new Kirby();
  echo $kirby->render();
  ```
- [ ] Create `.htaccess` for Apache (or nginx config)
- [ ] Create basic folder structure:
  ```
  kirby/
  ├── content/
  ├── site/
  │   ├── blueprints/
  │   ├── config/
  │   ├── templates/
  │   └── snippets/
  ├── vendor/
  ├── composer.json
  └── index.php
  ```

### 1.2 Basic configuration

- [ ] Create `site/config/config.php`:
  ```php
  <?php
  return [
      'debug' => true,  // Disable in production
      'panel' => [
          'install' => true
      ],
      'api' => [
          'basicAuth' => true,  // Or configure properly for headless
          'allowInsecure' => true  // Only for local dev
      ]
  ];
  ```

### 1.3 Install Kirby Panel

- [ ] Navigate to `/panel` in browser
- [ ] Create admin account
- [ ] Verify Panel access works

---

## Phase 2: Blueprints & Blocks

### 2.1 Site blueprint

- [ ] Create `site/blueprints/site.yml`:
  ```yaml
  title: Site
  
  tabs:
    content:
      label: Content
      fields:
        title:
          type: text
          label: Site Title
        description:
          type: textarea
          label: Site Description
    
    social:
      label: Social
      fields:
        email:
          type: email
        linkedin:
          type: url
        github:
          type: url
        bluesky:
          type: url
        readcv:
          type: url
  ```

### 2.2 Page blueprints

- [ ] Create `site/blueprints/pages/home.yml`:
  ```yaml
  title: Home
  
  fields:
    hero_eyebrow:
      type: text
      label: Eyebrow Text
      default: Available for freelance work
    
    hero_title:
      type: writer
      label: Hero Title
      marks:
        - italic
      help: Use italic for accent text
    
    hero_button_label:
      type: text
      label: Button Label
      default: Information
    
    hero_button_link:
      type: url
      label: Button Link
  ```

- [ ] Create `site/blueprints/pages/default.yml`:
  ```yaml
  title: Page
  
  tabs:
    content:
      label: Content
      fields:
        title:
          type: text
          label: Title
        
        blocks:
          type: blocks
          label: Content
          fieldsets:
            - article-header
            - article-image-block
            - article-text-block
            - article-numbered-grid
            - article-full-bleed
            - static-bio-block
    
    seo:
      label: SEO
      fields:
        meta_title:
          type: text
          label: Meta Title
        meta_description:
          type: textarea
          label: Meta Description
        meta_image:
          type: files
          label: OG Image
          max: 1
  ```

- [ ] Create `site/blueprints/pages/projects.yml`:
  ```yaml
  title: Projects
  
  sections:
    drafts:
      type: pages
      label: Drafts
      status: draft
      template: project
    
    listed:
      type: pages
      label: Published Projects
      status: listed
      template: project
      sortBy: sort asc
  ```

- [ ] Create `site/blueprints/pages/project.yml`:
  ```yaml
  title: Project
  num: '{{ page.sort }}'
  
  tabs:
    main:
      label: Main
      fields:
        name:
          type: text
          label: Project Name
          help: Short name for cards
          width: 1/2
        
        project_title:
          type: text
          label: Project Title
          help: Full title
          width: 1/2
        
        description:
          type: writer
          label: Description
        
        tags:
          type: tags
          label: Tags
          options:
            - Web Design
            - Branding & Identity
            - Front-end Development
            - Product Design
            - Social Media
            - DevOps
        
        showcase:
          type: toggle
          label: Show on Homepage
          default: true
          width: 1/2
        
        published:
          type: date
          label: Published Date
          width: 1/2
    
    images:
      label: Images
      fields:
        thumbnail_base:
          type: files
          label: Thumbnail (Base)
          max: 1
          uploads:
            template: image
        
        thumbnail_overlay:
          type: files
          label: Thumbnail (Overlay)
          max: 1
          uploads:
            template: image
    
    metadata:
      label: Metadata
      fields:
        project_metadata:
          type: structure
          label: Metadata Items
          fields:
            label:
              type: text
              label: Label
              width: 1/2
            content:
              type: text
              label: Content
              width: 1/2
    
    content:
      label: Content
      fields:
        blocks:
          type: blocks
          label: Article Content
          fieldsets:
            - article-header
            - article-image-block
            - article-text-block
            - article-numbered-grid
            - article-full-bleed
    
    seo:
      label: SEO
      fields:
        meta_title:
          type: text
        meta_description:
          type: textarea
        meta_image:
          type: files
          max: 1
  ```

### 2.3 Block blueprints (Slices → Blocks)

- [ ] Create `site/blueprints/blocks/article-header.yml`:
  ```yaml
  name: Article Header
  icon: title
  
  fields:
    title:
      type: text
      label: Title
    
    description:
      type: writer
      label: Description
      marks:
        - bold
        - italic
        - link
  ```

- [ ] Create `site/blueprints/blocks/article-image-block.yml`:
  ```yaml
  name: Image Block
  icon: image
  
  fields:
    columns:
      type: select
      label: Columns
      default: "1"
      options:
        "1": 1 Column
        "2": 2 Columns
        "3": 3 Columns
        "4": 4 Columns
    
    images:
      type: structure
      label: Images
      fields:
        image:
          type: files
          label: Image
          max: 1
        caption:
          type: text
          label: Caption
  ```

- [ ] Create `site/blueprints/blocks/article-text-block.yml`:
  ```yaml
  name: Text Block
  icon: text
  
  fields:
    columns:
      type: select
      label: Columns
      default: "2"
      options:
        "1": 1 Column
        "2": 2 Columns
        "3": 3 Columns
        "4": 4 Columns
    
    items:
      type: structure
      label: Text Items
      fields:
        content:
          type: writer
          label: Content
  ```

- [ ] Create `site/blueprints/blocks/article-numbered-grid.yml`:
  ```yaml
  name: Numbered Grid
  icon: list-numbers
  
  fields:
    columns:
      type: select
      label: Columns
      default: "4"
      options:
        "2": 2 Columns
        "3": 3 Columns
        "4": 4 Columns
    
    show_numbers:
      type: toggle
      label: Show Numbers
      default: true
    
    items:
      type: structure
      label: Items
      fields:
        heading:
          type: text
          label: Heading
          help: Used if show_numbers is false
        description:
          type: writer
          label: Description
  ```

- [ ] Create `site/blueprints/blocks/article-full-bleed.yml`:
  ```yaml
  name: Full Bleed Image
  icon: crop
  
  fields:
    image:
      type: files
      label: Image
      max: 1
    
    caption:
      type: text
      label: Caption
  ```

- [ ] Create `site/blueprints/blocks/static-bio-block.yml`:
  ```yaml
  name: Bio Block
  icon: user
  
  fields:
    heading:
      type: writer
      label: Heading
      marks:
        - italic
    
    content:
      type: writer
      label: Intro Content
    
    images:
      type: files
      label: Staggered Images
      max: 3
    
    items:
      type: structure
      label: Bio Items
      fields:
        type:
          type: select
          label: Type
          options:
            header: Header
            row: Row/Cell
        heading:
          type: text
          label: Heading
        subtitle:
          type: text
          label: Subtitle
        index:
          type: text
          label: Index
          width: 1/4
        description:
          type: writer
          label: Description
  ```

---

## Phase 3: Kirby API Configuration

### 3.1 Enable and configure API

- [ ] Update `site/config/config.php` for headless:
  ```php
  <?php
  return [
      'debug' => env('KIRBY_DEBUG', false),
      
      'panel' => [
          'install' => true,
          'slug' => 'panel'
      ],
      
      // API configuration
      'api' => [
          'basicAuth' => true,
          'allowInsecure' => env('KIRBY_DEV', false)
      ],
      
      // CORS for SvelteKit
      'cors' => [
          'allowOrigin' => env('FRONTEND_URL', '*'),
          'allowMethods' => 'GET, POST, OPTIONS',
          'allowHeaders' => 'Content-Type, Authorization',
          'maxAge' => 86400
      ]
  ];
  ```

### 3.2 Create custom API routes

- [ ] Create `site/config/api.php` or use a plugin for custom endpoints:
  ```php
  <?php
  // site/plugins/api/index.php
  
  Kirby::plugin('custom/api', [
      'api' => [
          'routes' => [
              // GET /api/projects
              [
                  'pattern' => 'projects',
                  'method' => 'GET',
                  'action' => function () {
                      $projects = page('projects')
                          ->children()
                          ->listed()
                          ->sortBy('sort', 'asc');
                      
                      return [
                          'data' => $projects->map(fn($p) => [
                              'uid' => $p->slug(),
                              'name' => $p->name()->value(),
                              'title' => $p->project_title()->value(),
                              'description' => $p->description()->toBlocks()->toHtml(),
                              'tags' => $p->tags()->split(),
                              'showcase' => $p->showcase()->toBool(),
                              'index' => $p->sort()->toInt(),
                              'thumbnail_base' => $p->thumbnail_base()->toFile()?->toArray(),
                              'thumbnail_overlay' => $p->thumbnail_overlay()->toFile()?->toArray(),
                              'published' => $p->published()->value(),
                          ])->values()
                      ];
                  }
              ],
              
              // GET /api/projects/:uid
              [
                  'pattern' => 'projects/(:any)',
                  'method' => 'GET',
                  'action' => function (string $uid) {
                      $project = page('projects/' . $uid);
                      
                      if (!$project) {
                          return [
                              'error' => 'Project not found',
                              'code' => 404
                          ];
                      }
                      
                      return [
                          'data' => [
                              'uid' => $project->slug(),
                              'name' => $project->name()->value(),
                              'title' => $project->project_title()->value(),
                              'description' => $project->description()->toBlocks()->toHtml(),
                              'tags' => $project->tags()->split(),
                              'showcase' => $project->showcase()->toBool(),
                              'thumbnail_base' => $project->thumbnail_base()->toFile()?->toArray(),
                              'thumbnail_overlay' => $project->thumbnail_overlay()->toFile()?->toArray(),
                              'published' => $project->published()->value(),
                              'metadata' => $project->project_metadata()->toStructure()->map(fn($m) => [
                                  'label' => $m->label()->value(),
                                  'content' => $m->content()->value(),
                              ])->values(),
                              'blocks' => $project->blocks()->toBlocks()->map(fn($b) => [
                                  'type' => $b->type(),
                                  'content' => $b->toArray()
                              ])->values()
                          ]
                      ];
                  }
              ],
              
              // GET /api/pages/:uid
              [
                  'pattern' => 'pages/(:any)',
                  'method' => 'GET',
                  'action' => function (string $uid) {
                      $page = page($uid);
                      
                      if (!$page) {
                          return [
                              'error' => 'Page not found',
                              'code' => 404
                          ];
                      }
                      
                      return [
                          'data' => [
                              'uid' => $page->slug(),
                              'title' => $page->title()->value(),
                              'blocks' => $page->blocks()->toBlocks()->map(fn($b) => [
                                  'type' => $b->type(),
                                  'content' => $b->toArray()
                              ])->values()
                          ]
                      ];
                  }
              ],
              
              // GET /api/home
              [
                  'pattern' => 'home',
                  'method' => 'GET',
                  'action' => function () {
                      $home = page('home');
                      
                      return [
                          'data' => [
                              'hero_eyebrow' => $home->hero_eyebrow()->value(),
                              'hero_title' => $home->hero_title()->value(),
                              'hero_button_label' => $home->hero_button_label()->value(),
                              'hero_button_link' => $home->hero_button_link()->value(),
                          ]
                      ];
                  }
              ]
          ]
      ]
  ]);
  ```

### 3.3 Create minimal templates (for Panel preview)

- [ ] Create `site/templates/home.php`:
  ```php
  <?= 'Home page - use Panel to edit' ?>
  ```

- [ ] Create `site/templates/default.php`:
  ```php
  <?= $page->title() ?>
  ```

- [ ] Create `site/templates/projects.php`:
  ```php
  <?= 'Projects listing' ?>
  ```

- [ ] Create `site/templates/project.php`:
  ```php
  <?= $page->project_title() ?>
  ```

---

## Phase 4: SvelteKit Integration

### 4.1 Create Kirby API client

- [ ] Create `website/src/lib/kirby.ts`:
  ```typescript
  const KIRBY_API = import.meta.env.VITE_KIRBY_API_URL || 'http://localhost:8000/api';
  
  export interface KirbyImage {
    url: string;
    alt: string | null;
    width: number;
    height: number;
  }
  
  export interface KirbyProject {
    uid: string;
    name: string;
    title: string;
    description: string;
    tags: string[];
    showcase: boolean;
    index: number;
    thumbnail_base: KirbyImage | null;
    thumbnail_overlay: KirbyImage | null;
    published: string | null;
    metadata?: Array<{ label: string; content: string }>;
    blocks?: KirbyBlock[];
  }
  
  export interface KirbyPage {
    uid: string;
    title: string;
    blocks: KirbyBlock[];
  }
  
  export interface KirbyBlock {
    type: string;
    content: Record<string, any>;
  }
  
  export interface KirbyHome {
    hero_eyebrow: string;
    hero_title: string;
    hero_button_label: string;
    hero_button_link: string;
  }
  
  async function fetchKirby<T>(endpoint: string): Promise<T> {
    const res = await fetch(`${KIRBY_API}/${endpoint}`);
    
    if (!res.ok) {
      throw new Error(`Kirby API error: ${res.status}`);
    }
    
    const json = await res.json();
    return json.data;
  }
  
  export const kirby = {
    async getProjects(options?: { 
      showcase?: boolean; 
      limit?: number 
    }): Promise<KirbyProject[]> {
      let projects = await fetchKirby<KirbyProject[]>('projects');
      
      if (options?.showcase) {
        projects = projects.filter(p => p.showcase);
      }
      
      projects.sort((a, b) => a.index - b.index);
      
      if (options?.limit) {
        projects = projects.slice(0, options.limit);
      }
      
      return projects;
    },
    
    async getProject(uid: string): Promise<KirbyProject> {
      return fetchKirby(`projects/${uid}`);
    },
    
    async getPage(uid: string): Promise<KirbyPage> {
      return fetchKirby(`pages/${uid}`);
    },
    
    async getHome(): Promise<KirbyHome> {
      return fetchKirby('home');
    }
  };
  ```

### 4.2 Create BlockRenderer component

- [ ] Create `website/src/lib/components/BlockRenderer.svelte`:
  ```svelte
  <script lang="ts">
    import ArticleHeader from '$lib/slices/ArticleHeader/index.svelte';
    import ArticleImageBlock from '$lib/slices/ArticleImageBlock/index.svelte';
    import ArticleTextBlock from '$lib/slices/ArticleTextBlock/index.svelte';
    import ArticleNumberedGrid from '$lib/slices/ArticleNumberedGrid/index.svelte';
    import ArticleFullBleed from '$lib/slices/ArticleFullBleed/index.svelte';
    import StaticBioBlock from '$lib/slices/StaticBioBlock/index.svelte';
    import type { KirbyBlock } from '$lib/kirby';
    
    const components: Record<string, any> = {
      'article-header': ArticleHeader,
      'article-image-block': ArticleImageBlock,
      'article-text-block': ArticleTextBlock,
      'article-numbered-grid': ArticleNumberedGrid,
      'article-full-bleed': ArticleFullBleed,
      'static-bio-block': StaticBioBlock,
    };
    
    let { blocks }: { blocks: KirbyBlock[] } = $props();
  </script>
  
  {#each blocks as block}
    {#if components[block.type]}
      <svelte:component this={components[block.type]} data={block.content} />
    {:else}
      <p class="block-error">Unknown block: {block.type}</p>
    {/if}
  {/each}
  ```

### 4.3 Update route data loaders

- [ ] Update `website/src/routes/+page.server.ts`:
  ```typescript
  import { kirby } from '$lib/kirby';
  
  export const load = async () => {
    const [home, projects] = await Promise.all([
      kirby.getHome(),
      kirby.getProjects({ showcase: true, limit: 4 })
    ]);
    
    return { home, projects };
  };
  ```

- [ ] Update `website/src/routes/+page.svelte`:
  ```svelte
  <script lang="ts">
    import Index from '$lib/components/pages/Index.svelte';
    
    let { data } = $props();
  </script>
  
  <Index home={data.home} projects={data.projects} />
  ```

- [ ] Update `website/src/routes/about/+page.server.ts`:
  ```typescript
  import { kirby } from '$lib/kirby';
  import { error } from '@sveltejs/kit';
  
  export const load = async () => {
    try {
      const page = await kirby.getPage('about');
      return { page };
    } catch (e) {
      throw error(404, 'Page not found');
    }
  };
  ```

- [ ] Update `website/src/routes/work/[uid]/+page.server.ts`:
  ```typescript
  import { kirby } from '$lib/kirby';
  import { error } from '@sveltejs/kit';
  
  export const load = async ({ params }) => {
    try {
      const project = await kirby.getProject(params.uid);
      return { project };
    } catch (e) {
      throw error(404, 'Project not found');
    }
  };
  ```

### 4.4 Update components for Kirby data shape

- [ ] Update `Index.svelte` to accept home data
- [ ] Update `IndexCard.svelte` for Kirby image structure
- [ ] Update each slice component to handle Kirby block content shape

### 4.5 Update environment configuration

- [ ] Create/update `website/.env`:
  ```env
  VITE_KIRBY_API_URL=http://localhost:8000/api
  ```

- [ ] Create `website/.env.production`:
  ```env
  VITE_KIRBY_API_URL=http://kirby.railway.internal/api
  ```

---

## Phase 5: Content Migration

### 5.1 Create base content structure

- [ ] Create `kirby/content/site.txt`:
  ```
  Title: Austin Joseph
  ----
  Description: Design engineer from Sydney
  ----
  Email: hello@austinjoseph.com
  ----
  Linkedin: https://linkedin.com/in/...
  ----
  Github: https://github.com/austinjxseph
  ```

- [ ] Create `kirby/content/home/home.txt`:
  ```
  Title: Home
  ----
  Hero_eyebrow: Available for freelance work
  ----
  Hero_title: Austin Joseph is a <em>design engineer</em> from Sydney.
  ----
  Hero_button_label: Information
  ----
  Hero_button_link: /about
  ```

- [ ] Create `kirby/content/projects/projects.txt`:
  ```
  Title: Projects
  ```

- [ ] Create `kirby/content/about/default.txt`:
  ```
  Title: About
  ----
  Blocks: [... migrate from Prismic ...]
  ```

### 5.2 Migrate projects from Prismic

For each project in Prismic:

- [ ] Create folder: `kirby/content/projects/{n}_{slug}/`
- [ ] Create `project.txt` with all fields
- [ ] Copy/download images to the folder
- [ ] Convert slice data to Kirby blocks format

Example project structure:
```
kirby/content/projects/1_project-alpha/
├── project.txt
├── thumbnail-base.jpg
├── thumbnail-overlay.png
└── image-1.jpg
```

Example `project.txt`:
```
Title: Project Alpha
----
Name: Alpha
----
Project_title: Project Alpha - Brand Identity
----
Tags: Branding & Identity, Web Design
----
Description: A comprehensive brand identity project...
----
Showcase: true
----
Published: 2024-01-15
----
Thumbnail_base: thumbnail-base.jpg
----
Thumbnail_overlay: thumbnail-overlay.png
----
Project_metadata:
- 
  label: Client
  content: Acme Corp
-
  label: Year
  content: "2024"
-
  label: Role
  content: Lead Designer
----
Blocks: [... converted from Prismic slices ...]
```

### 5.3 Block content format

Kirby blocks are stored as YAML/JSON in the text file:

```
Blocks:
- 
  type: article-header
  content:
    title: Project Overview
    description: <p>This project involved...</p>
-
  type: article-image-block
  content:
    columns: "2"
    images:
      - 
        image: image-1.jpg
        caption: Homepage design
      -
        image: image-2.jpg
        caption: Mobile view
-
  type: article-text-block
  content:
    columns: "2"
    items:
      -
        content: <p>First column text...</p>
      -
        content: <p>Second column text...</p>
```

---

## Phase 6: Railway Deployment

### 6.1 Kirby service setup

- [ ] Create `kirby/Dockerfile`:
  ```dockerfile
  FROM php:8.2-apache
  
  # Install extensions
  RUN docker-php-ext-install pdo pdo_mysql
  RUN a2enmod rewrite
  
  # Copy application
  COPY . /var/www/html/
  
  # Set permissions
  RUN chown -R www-data:www-data /var/www/html/content
  RUN chmod -R 755 /var/www/html/content
  
  # Apache config
  COPY apache.conf /etc/apache2/sites-available/000-default.conf
  
  EXPOSE 80
  ```

- [ ] Create `kirby/apache.conf`:
  ```apache
  <VirtualHost *:80>
      DocumentRoot /var/www/html
      
      <Directory /var/www/html>
          AllowOverride All
          Require all granted
      </Directory>
  </VirtualHost>
  ```

- [ ] Create `kirby/.htaccess`:
  ```apache
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.php [L]
  ```

### 6.2 SvelteKit service setup

- [ ] Update `website/svelte.config.js` for Node adapter:
  ```javascript
  import adapter from '@sveltejs/adapter-node';
  
  export default {
    kit: {
      adapter: adapter()
    }
  };
  ```

- [ ] Install Node adapter:
  ```bash
  npm install -D @sveltejs/adapter-node
  ```

- [ ] Create `website/Dockerfile`:
  ```dockerfile
  FROM node:20-alpine AS builder
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build
  
  FROM node:20-alpine
  WORKDIR /app
  COPY --from=builder /app/build ./build
  COPY --from=builder /app/package*.json ./
  RUN npm ci --production
  
  EXPOSE 3000
  CMD ["node", "build"]
  ```

### 6.3 Railway configuration

- [ ] Create `railway.toml` in repo root (or configure via UI):
  ```toml
  [service.kirby]
  rootDirectory = "kirby"
  
  [service.website]
  rootDirectory = "website"
  ```

- [ ] In Railway dashboard:
  - Create new project
  - Add Kirby service (source: /kirby)
  - Add Website service (source: /website)
  - Set Kirby internal networking
  - Set Website public domain
  - Configure environment variables

### 6.4 Environment variables

**Kirby service:**
```
KIRBY_DEBUG=false
FRONTEND_URL=https://yourdomain.com
```

**Website service:**
```
VITE_KIRBY_API_URL=http://kirby.railway.internal/api
```

### 6.5 Persistent storage for Kirby content

- [ ] Configure Railway volume for `/var/www/html/content`
- [ ] Or: commit content to repo and deploy on push

---

## Phase 7: Cleanup

### 7.1 Remove Prismic dependencies

- [ ] Remove from `package.json`:
  - `@prismicio/client`
  - `@prismicio/svelte`
  - `@slicemachine/adapter-sveltekit`
  - `slice-machine-ui`

- [ ] Delete Prismic files:
  - `website/src/lib/prismicio.ts`
  - `website/src/prismicio-types.d.ts`
  - `website/slicemachine.config.json`
  - `website/customtypes/`
  - `website/src/routes/slice-simulator/`
  - `website/src/routes/api/preview/`
  - `website/src/routes/[[preview=preview]]/`

- [ ] Remove `.env` Prismic variables

### 7.2 Update documentation

- [ ] Update README with new architecture
- [ ] Document Kirby Panel access
- [ ] Document deployment process

### 7.3 Final testing

- [ ] Test all pages render correctly
- [ ] Test all blocks render correctly
- [ ] Test Kirby Panel editing
- [ ] Test API responses
- [ ] Test image loading
- [ ] Test responsive layouts
- [ ] Test build and deploy

---

## Field Mapping Reference

### Project Fields: Prismic → Kirby

| Prismic | Kirby |
|---------|-------|
| `uid` | folder slug |
| `project_index` | `sort` (folder prefix) |
| `project_name` | `name` |
| `project_title` | `project_title` |
| `tags` (group) | `tags` (tags field) |
| `project_description` | `description` |
| `showcase` | `showcase` |
| `thumbnail_base` | `thumbnail_base` |
| `thumbnail_overlay` | `thumbnail_overlay` |
| `published` | `published` |
| `project_metadata` (group) | `project_metadata` (structure) |
| `slices2` | `blocks` |

### Block Types: Prismic → Kirby

| Prismic Slice | Kirby Block |
|---------------|-------------|
| `article_header` | `article-header` |
| `article_image_block` | `article-image-block` |
| `article_text_block` | `article-text-block` |
| `article_numbered_grid` | `article-numbered-grid` |
| `article_full_bleed` | `article-full-bleed` |
| `static_bio_block` | `static-bio-block` |

---

## Estimated Effort

| Phase | Complexity | Notes |
|-------|------------|-------|
| 1. Kirby Setup | Low | Basic scaffolding |
| 2. Blueprints | Medium | 4 pages + 6 blocks |
| 3. API Config | Medium | Custom routes needed |
| 4. SvelteKit | Medium | Client + component updates |
| 5. Content | Low-High | Depends on content volume |
| 6. Railway | Medium | First-time setup |
| 7. Cleanup | Low | Removing old code |

---

## Resources

- [Kirby Documentation](https://getkirby.com/docs)
- [Kirby API Reference](https://getkirby.com/docs/reference/api)
- [Kirby Blocks](https://getkirby.com/docs/reference/panel/fields/blocks)
- [Railway Docs](https://docs.railway.app/)
- [SvelteKit Adapter Node](https://kit.svelte.dev/docs/adapter-node)
