# Vitruvian Portfolio - Design System Summary

**Last Updated:** 2025-12-21
**Status:** Active SvelteKit application with Prismic CMS

---

## Project Setup

**Technology Stack:**
- **Framework:** SvelteKit 2.x with Svelte 5
- **Language:** TypeScript
- **CMS:** Prismic with Slice Machine
- **Styling:** Custom utility-first CSS framework
- **Build:** Vite 7.x
- **Deployment:** Adapter-auto (platform-agnostic)

**Installation:**
```bash
cd website
npm install
npm run dev              # → http://localhost:5173
npm run slicemachine     # → http://localhost:9999
```

---

## Design System

### Typography

**Typefaces:**
- **Primary:** Inter Display (Sans-serif) - Regular (400), Medium (500), Bold (700)
- **Secondary:** EB Garamond (Serif) - Regular (400), Italic (400)

**Heading Scale:**
| Element | Size | Line Height | Font Family |
|---------|------|-------------|-------------|
| h1 | 2rem | 1.1em | Inter Display |
| h2 | 1.75rem | 1.2em | EB Garamond |
| h3 | 1.5rem | 1.4em | Inter Display |
| h4 | 0.875rem | 1.4em | Inter Display |

**Text Sizes:**
- Small: `0.75rem` (`.text-sm`)
- Medium: `0.875rem` (default paragraph)
- Large: `1rem` (`.text-lg`, blockquotes)

---

### Color Palette

**Dark Theme (Primary):**
```css
Background Primary:   #020508  /* Near black */
Background Secondary: #0e0f10  /* Very dark gray */
Background Tertiary:  #1a1a1e  /* Medium dark gray */

Text Primary:         #ffffff  /* White */
Text Secondary:       #7f8082  /* Gray */

Accent Active:        #15de7e  /* Bright green */
Accent Warm:          #ff6955  /* Coral/Orange */

Border Primary:       #ffffff33  /* White with transparency */
```

**Neutral Scale:**
- 950 (darkest): `#020508`
- 900: `#101828`
- 800: `#1d2939`
- 700: `#344054`
- 600: `#475467`
- 500: `#667085`
- 400: `#94a3b8`
- 300: `#cbd5e1`
- 200: `#e2e8f0`
- 100: `#f1f5f9`
- 50 (lightest): `#ffffff`

---

### Spacing System

**Base Unit:** 0.25rem (4px)

**Gap Scale (Flexbox/Grid):**
```css
xxs: 0.5rem   (8px)
xs:  0.75rem  (12px)
sm:  1rem     (16px)
md:  1.5rem   (24px)
lg:  2rem     (32px)
xl:  3rem     (48px)
xxl: 4rem     (64px)
```

**Padding Scale:**
```css
xxs: 1.5rem   (24px)
xs:  2rem     (32px)
sm:  3rem     (48px)
md:  4rem     (64px)
lg:  6rem     (96px)
xl:  8rem     (128px)
```

**Global Margin:**
- Desktop: `1.5rem` (24px)
- Mobile: `1rem` (16px)

---

### Responsive Breakpoints

**Mobile-First Strategy:**
```css
Mobile (XS):        max-width: 479px
Tablet (SM):        max-width: 767px
Desktop (MD):       max-width: 991px
Large Display (XL): min-width: 1920px
```

**Container Max-Widths:**
- Small: `40rem` (640px)
- Medium: `50rem` (800px)
- Large: `75rem` (1200px)
- Extra Large: `140rem` (2240px)

---

### CSS Architecture

**Three-Tier Naming Convention:**

1. **Utility Classes (`u-` prefix) - Global**
   - Location: `src/lib/styles/styles.css`
   - Examples: `u-layout-vflex`, `u-layout-hflex`, `gap-md`, `text-lg`
   - Always available across all components

2. **Component Classes (no prefix) - Scoped**
   - Defined in component `<style>` blocks
   - Svelte scoping makes `c-` prefix redundant
   - Examples: `.button`, `.header`, `.card`

3. **Page/Section Classes (no prefix) - Scoped**
   - Page-level component styles
   - Examples: `.inner`, `.track`, `.scroll`

**Key Utility Classes:**
```css
/* Layout */
.u-layout-vflex     /* Vertical flexbox */
.u-layout-hflex     /* Horizontal flexbox */
.u-layout-grid      /* CSS Grid (2 columns) */

/* Gaps */
.gap-xxs, .gap-xs, .gap-sm, .gap-md, .gap-lg, .gap-xl, .gap-xxl
.gap-x-*, .gap-y-*  /* Axis-specific gaps */

/* Padding */
.py-*, .pt-*, .pb-*, .p-*  /* With variants: xxs, xs, sm, md, lg, xl */

/* Typography */
.text-sm, .text-lg
.u-font-light, .u-font-normal, .u-font-medium, .u-font-bold
.u-text-center, .u-text-left, .u-text-right

/* Visibility */
.u-hide-all, .u-hide-md, .u-hide-sm, .u-hide-xs

/* Sizing */
.u-vp-100h, .u-vp-100w  /* Viewport height/width */
.wp-25, .wp-50, .wp-75, .wp-100  /* Width percentages */
```

---

## Site Structure

**Current Routes:**
```
/                    → Homepage (project showcase)
/about               → Biography page
/work                → Empty (future: project gallery)
/work/[uid]          → Dynamic project pages
/slice-simulator     → Prismic development tool
/api/preview         → Prismic preview endpoint
```

**Project Status:**
- ✅ Homepage: Complete (Prismic-powered)
- ✅ About: Complete (Prismic-powered)
- ✅ Project Detail: Complete (Dynamic routing)
- ⏳ Work Gallery: To be implemented
- ❌ Thoughts/Blog: Not started
- ❌ Error Pages: Not started

---

## Prismic CMS Integration

### Content Model

**Project Custom Type Fields:**
```typescript
uid                  // URL identifier
project_name         // Internal name
project_title        // Display title
project_description  // Rich text description
showcase             // Boolean (show on homepage)
thumbnail_base       // Main thumbnail image
thumbnail_overlay    // Overlay image
published            // Publish date
project_index        // Manual sort order (1, 2, 3, 4)
tags                 // Project tags (group)
slices2              // Slice zone for content
project_metadata     // Metadata items (role, timeline, etc.)
meta_title           // SEO title
meta_description     // SEO description
social_share_image   // Open Graph image
```

### Available Slices

**1. ArticleHeader**
- Project title and rich text description
- 4-column grid layout (desktop)
- Has its own horizontal padding

**2. TextBlock**
- Multi-column text content (always 4 columns on desktop)
- RTL grid direction (fills from right to left)
- Responsive: 2 columns (tablet), 1 column (mobile)

**3. ImageBlock**
- Configurable columns: 1, 2, 3, or 4
- Responsive image widths: `[640, 750, 828, 1080, 1200, 1920, 2048]`
- Optional captions

**4. FullWidthImage**
- Hero images at full width
- 4K support (widths up to 3840px)
- 16:9 aspect ratio
- Optional captions

**5. NumberedGrid**
- Auto-numbered items: (01), (02), (03)...
- Configurable columns: 2, 3, or 4
- RTL grid (fills from right to left)
- Optional custom headings
- Toggle for showing/hiding numbers

---

## Component Inventory

**Completed Components:**
- ✅ Header (Navigation with mobile drawer)
- ✅ Footer (Social links)
- ✅ Button (Animated CTA)
- ✅ IndexCard (Project showcase cards)
- ✅ Index (Homepage layout)
- ✅ Bio (About page layout)

**Completed Slices:**
- ✅ ArticleHeader
- ✅ TextBlock
- ✅ ImageBlock
- ✅ FullWidthImage
- ✅ NumberedGrid

**To Be Implemented:**
- ⏳ Work gallery page
- ⏳ Error pages (404, 401)
- ⏳ Thoughts/blog section

---

## Development Workflow

**Fetching Prismic Content:**
```typescript
// In +page.server.ts
import { createClient } from "$lib/prismicio";
import { filter } from "@prismicio/client";

export const load = async ({ fetch, cookies }) => {
  const client = createClient({ fetch, cookies });
  
  const projects = await client.getAllByType("project", {
    filters: [filter.at("my.project.showcase", true)],
    orderings: [{ field: "my.project.project_index", direction: "asc" }],
    limit: 4,
  });
  
  return { projects };
};
```

**Using PrismicImage:**
```svelte
<script>
  import { PrismicImage } from '@prismicio/svelte';
</script>

<div class="image-wrapper">
  <PrismicImage
    field={project.data.thumbnail_base}
    widths={[640, 750, 828, 1080, 1200, 1920, 2048]}
  />
</div>
```

**Creating New Slices:**
1. Run `npm run slicemachine` (localhost:9999)
2. Create slice with fields
3. Generate Svelte component
4. Implement in `src/lib/slices/[SliceName]/index.svelte`
5. Test in `/slice-simulator`

---

## Best Practices

**CSS Guidelines:**
- ✅ Use utility classes for layout and spacing
- ✅ Scope component-specific styles in `<style>` blocks
- ✅ Use CSS variables: `var(--gap--md)`, `var(--_themes---site--bg--bg-primary)`
- ✅ Follow mobile-first responsive design
- ❌ Don't add horizontal padding to slice children (`.section` handles it)
- ❌ Don't use inline styles or `!important`

**Image Optimization:**
- Always use `<PrismicImage>` component
- Include responsive widths array
- Wrap in positioned divs for layout control
- Use lazy loading by default

**Component Structure:**
- Keep components small and focused (single responsibility)
- Use TypeScript for prop types
- Test responsive behavior across breakpoints
- Verify Prismic preview functionality

---

## Key Files

**Design System:**
- `src/lib/styles/variables.css` - All CSS custom properties
- `src/lib/styles/styles.css` - Utility classes and global styles
- `src/lib/styles/normalize.css` - CSS reset

**Components:**
- `src/lib/components/` - Reusable UI components
- `src/lib/components/pages/` - Page-level layouts
- `src/lib/slices/` - Prismic slice components

**Configuration:**
- `src/lib/prismicio.ts` - Prismic client setup
- `slicemachine.config.json` - Slice Machine config
- `customtypes/project/` - Prismic schema definitions

---

**Project Repository:** `/home/austinjxseph/GitHub/austinjxseph/vitruvian`
**Active Directory:** `/website/`
**Prismic Repository:** `vitruvian`
