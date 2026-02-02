# Current Architecture Context

This document captures the existing Prismic + SvelteKit setup before migrating to Kirby.

---

## Overview

| Aspect | Current Setup |
|--------|---------------|
| **CMS** | Prismic (repository: `vitruvian`) |
| **Frontend** | SvelteKit 2.x with Svelte 5 |
| **Hosting** | TBD (migrating to Railway) |
| **Content Types** | Page, Project |
| **Slices** | 6 custom slices |

---

## Project Structure

```
website/
├── src/
│   ├── lib/
│   │   ├── components/        # Reusable Svelte components
│   │   ├── slices/            # Prismic slice components
│   │   ├── styles/            # Global CSS
│   │   ├── scripts/           # Utilities (motion.js)
│   │   ├── assets/icons/      # SVG icons
│   │   └── prismicio.ts       # Prismic client
│   ├── routes/                # SvelteKit pages
│   └── prismicio-types.d.ts   # Generated TypeScript types
├── customtypes/               # Prismic custom type definitions
│   ├── page/index.json
│   └── project/index.json
├── slicemachine.config.json
└── package.json
```

---

## Content Types

### 1. Page

General-purpose page type used for static pages like About.

| Field | Type | Description |
|-------|------|-------------|
| `uid` | UID | URL slug |
| `title` | Rich Text | Page title (heading1 only) |
| `slices` | Slice Zone | Content blocks |
| `meta_title` | Text | SEO title |
| `meta_description` | Text | SEO description |
| `meta_image` | Image | OG image (2400x1260) |

**Allowed slices:** `static_bio_block`

**Used by:** `/about`

---

### 2. Project

Portfolio project entries with metadata, thumbnails, and content.

#### Main Fields

| Field | Type | Description |
|-------|------|-------------|
| `uid` | UID | URL slug |
| `project_index` | Number | Sort order |
| `project_name` | Text | Short name |
| `project_title` | Text | Full title |
| `tags` | Group | Repeatable tag list |
| `project_description` | Rich Text | Brief description |
| `showcase` | Boolean | Show on homepage (default: true) |
| `thumbnail_base` | Image | Card background image |
| `thumbnail_overlay` | Image | Card overlay image |
| `published` | Date | Publication date |

#### Tag Options
- Web Design
- Branding & Identity
- Front-end Development
- Product Design
- Social Media
- DevOps

#### Metadata Group (repeatable)

| Field | Type | Description |
|-------|------|-------------|
| `metadata_label` | Text | Label (e.g., "Client", "Year") |
| `metadata_content` | Text | Value |

#### Content Fields

| Field | Type | Description |
|-------|------|-------------|
| `slices2` | Slice Zone | Article content blocks |

**Allowed slices:** All article slices

#### SEO Fields

| Field | Type | Description |
|-------|------|-------------|
| `meta_title` | Text | SEO title |
| `meta_description` | Text | SEO description |
| `meta_image` | Image | OG image (1200x800) |

**Used by:** `/work/[uid]`

---

## Slices

### 1. ArticleHeader

Project/article title and description header.

**Location:** `src/lib/slices/ArticleHeader/`

#### Primary Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | Text | Main heading |
| `description` | Rich Text | Supports bold, italic, links |

#### Layout
- 4-column grid
- Title spans 2 columns
- Description fills remaining space
- Collapses to single column on mobile

---

### 2. ArticleImageBlock

Flexible multi-column image grid.

**Location:** `src/lib/slices/ArticleImageBlock/`

#### Primary Fields

| Field | Type | Options |
|-------|------|---------|
| `columns` | Select | 1, 2, 3, 4 (default: 1) |

#### Items (repeatable)

| Field | Type | Description |
|-------|------|-------------|
| `image` | Image | The image |
| `caption` | Text | Optional caption |

#### Features
- Lazy loading
- 16:9 aspect ratio
- Responsive (2 cols tablet, 1 col mobile)

---

### 3. ArticleTextBlock

Multi-column text content.

**Location:** `src/lib/slices/ArticleTextBlock/`

#### Primary Fields

| Field | Type | Options |
|-------|------|---------|
| `columns` | Select | 1, 2, 3, 4 (default: 2) |

#### Items (repeatable)

| Field | Type | Description |
|-------|------|-------------|
| `content` | Rich Text | Paragraph with formatting |

#### Features
- RTL grid layout (fills from right)
- Responsive column collapse

---

### 4. ArticleNumberedGrid

Auto-numbered grid items.

**Location:** `src/lib/slices/ArticleNumberedGrid/`

#### Primary Fields

| Field | Type | Options |
|-------|------|---------|
| `columns` | Select | 2, 3, 4 (default: 4) |
| `show_numbers` | Boolean | Auto-number items (default: true) |

#### Items (repeatable)

| Field | Type | Description |
|-------|------|-------------|
| `heading` | Text | Custom heading (if show_numbers false) |
| `description` | Rich Text | Item content |

#### Features
- Auto-generates 01, 02, 03... numbers
- Optional custom headings
- Responsive grid

---

### 5. ArticleFullBleed

Full-width hero image.

**Location:** `src/lib/slices/ArticleFullBleed/`

#### Primary Fields

| Field | Type | Description |
|-------|------|-------------|
| `image` | Image | Full-width image |
| `caption` | Text | Optional caption |

#### Features
- 16:9 aspect ratio
- Edge-to-edge display

---

### 6. StaticBioBlock

Bio section with staggered images and content.

**Location:** `src/lib/slices/StaticBioBlock/`

#### Primary Fields

| Field | Type | Description |
|-------|------|-------------|
| `bio_heading` | Rich Text | Section heading with optional emphasis |
| `bio_content` | Rich Text | Intro paragraph |

#### Bio Images Group (repeatable)

| Field | Type | Description |
|-------|------|-------------|
| `image` | Image | Staggered image |

#### Bio Items Group (repeatable)

| Field | Type | Description |
|-------|------|-------------|
| `item_type` | Select | "header" or "row/cell" |
| `item_heading` | Text | Section/item heading |
| `item_subtitle` | Text | Subtitle |
| `item_index` | Text | Right-aligned index |
| `item_description` | Rich Text | Content |

#### Layout
- Two-column: images (left, staggered), content (right)
- Items grouped by headers
- Collapses to single column on tablet

---

## Svelte Components

### Layout Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Header` | `components/Header.svelte` | Navigation bar + mobile menu |
| `Footer` | `components/Footer.svelte` | Footer with social links |
| `+layout.svelte` | `routes/+layout.svelte` | Root layout wrapper |

### Page Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Index` | `components/pages/Index.svelte` | Homepage layout |
| `IndexCard` | `components/IndexCard.svelte` | Project card with layered images |
| `Button` | `components/Button.svelte` | Animated button with rotating border |
| `Sidebar` | `components/Sidebar.svelte` | Article metadata sidebar |

---

## Routes

| Route | Data Source | Description |
|-------|-------------|-------------|
| `/` | `client.getAllByType('project')` | Homepage with 4 showcase projects |
| `/about` | `client.getByUID('page', 'about')` | About page |
| `/work` | — | Work listing (empty) |
| `/work/[uid]` | `client.getByUID('project', uid)` | Project detail |
| `/slice-simulator` | — | Prismic Slice Machine preview |
| `/api/preview` | — | Prismic preview webhook |

---

## Data Fetching

All data fetching happens server-side via `+page.server.ts` files.

### Homepage Example

```typescript
import { createClient, filter } from '$lib/prismicio';

export const load = async ({ fetch, cookies }) => {
  const client = createClient({ fetch, cookies });

  const projects = await client.getAllByType('project', {
    filters: [filter.at('my.project.showcase', true)],
    orderings: [{ field: 'my.project.project_index', direction: 'asc' }],
    limit: 4
  });

  return { projects };
};
```

### Project Detail Example

```typescript
import { createClient } from '$lib/prismicio';
import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch, cookies }) => {
  const client = createClient({ fetch, cookies });

  try {
    const project = await client.getByUID('project', params.uid);
    return { project };
  } catch (e) {
    throw error(404, 'Project not found');
  }
};
```

---

## Styling

### CSS Architecture

| File | Purpose |
|------|---------|
| `styles/normalize.css` | Reset/normalize |
| `styles/variables.css` | CSS custom properties |
| `styles/styles.css` | Global component styles |
| `styles/keyframes.css` | Animation definitions |

### Breakpoints

| Name | Width |
|------|-------|
| Desktop | 992px+ |
| Tablet | 480px - 991px |
| Mobile | < 480px |

### Utility Classes

- `u-layout-vflex` - Vertical flexbox
- `u-layout-hflex` - Horizontal flexbox
- `u-span-2` - Grid column span
- `u-font-accent` - Accent font
- `gap-*` - Gap utilities

---

## Dependencies

### Runtime

| Package | Version | Purpose |
|---------|---------|---------|
| `@prismicio/client` | ^7.20.1 | Prismic API client |
| `@prismicio/svelte` | ^2.0.0 | Prismic Svelte components |
| `lenis` | ^1.3.17 | Smooth scrolling |
| `dotenv` | ^17.2.3 | Environment variables |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| `@sveltejs/kit` | ^2.22.0 | Framework |
| `svelte` | ^5.0.0 | UI library |
| `vite` | ^7.0.4 | Build tool |
| `typescript` | ^5.0.0 | Type checking |
| `slice-machine-ui` | ^2.18.1 | Slice Machine editor |

---

## Environment Variables

```env
PRISMIC_WRITE_TOKEN=""   # For Slice Machine write access
```

---

## Notes for Migration

1. **Two slice zones**: Pages use `slices`, Projects use `slices2` - Kirby will unify these

2. **Repeatable groups**: Prismic uses groups for tags, metadata, bio items - Kirby uses structure fields

3. **Image handling**: Prismic auto-optimizes images - need to configure Kirby's thumb API

4. **Rich text**: Prismic's rich text → Kirby's blocks or writer field

5. **Filtering**: `filter.at('my.project.showcase', true)` → Kirby's `filterBy('showcase', true)`

6. **Preview**: Prismic preview system won't exist - Kirby Panel has its own preview
