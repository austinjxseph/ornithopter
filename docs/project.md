# Vitruvian Portfolio - Project Reference

**Last Updated:** 2025-12-21

---

## Animation Strategy

**Current Setup:**
- **GSAP 3.12+** with ScrollTrigger integrated but partially implemented
- Animations currently commented out in codebase
- ScrollTrigger configured but not actively utilized

**Migration Plan:**
- ⚠️ **Deprecate SplitType** in favor of GSAP's native **SplitText plugin** for text animations
- Implement **Lenis** for smooth scrolling
- Activate scroll-triggered animations with ScrollTrigger
- Add hover states and transitions

**Files to Update:**
- `website/static/js/motion.js` - Uncomment GSAP animations
- Component-level animations in individual `.svelte` files

---

## Implementation Phases & Roadmap

### Phase 1: Foundation - Page-Level Components

#### Step 1.1: Homepage - Index.svelte
- Create `src/lib/components/pages/Index.svelte`
- Port sticky left panel (hero section)
- Port scrolling right track (project cards)
- Extract IndexCard component
- Integrate IndexCard into Index.svelte
- Test responsive behavior (mobile vs desktop)

#### Step 1.2: IndexCard Component
- Create `src/lib/components/IndexCard.svelte`
- Accept props: title, description, href, backgroundImage, overlayImage
- Port card styles from homepage
- Add hover states and animations

#### Step 1.3: About Page - Bio.svelte
- Create `src/lib/components/pages/Bio.svelte`
- Port hero image section
- Port scrollable content area
- Port text block layouts
- Test scroll behavior

---

### Phase 2: Reusable Components for Articles

#### Step 2.1: ArticleHeader Component
- Create `src/lib/components/ArticleHeader.svelte`
- Port header structure from vanilla implementation
- Accept props: title, description (rich text support)
- Add optional sidebar integration
- Test with different content lengths

#### Step 2.2: Sidebar Component
- Create `src/lib/components/Sidebar.svelte`
- Port from `vanilla/components/sidebar.js`
- Accept props: heading, description, metadata array (role, timeline, team, tools)
- Numbered display (01-04) for metadata items
- Responsive layout (sticky on desktop, stacked on mobile)

---

### Phase 3: Prismic Slice Creation

#### Step 3.1: TextBlock Slice
- Run Slice Machine: Create "TextBlock" slice
- Configure fields:
  - `columns`: Select (1, 2, 3, 4)
  - `content`: Group (repeatable) with rich text field
- Generate Svelte component in `src/lib/slices/`
- Implement layout logic (1-4 column grid)
- Test in slice simulator

#### Step 3.2: ImageBlock Slice
- Run Slice Machine: Create "ImageBlock" slice
- Configure fields:
  - `layout`: Select (single, grid)
  - `images`: Group (repeatable) with image + alt + caption
  - `columns`: Select (2, 3, 4) - for grid layout
- Generate Svelte component
- Implement responsive image rendering
- Add lazy loading
- Test in slice simulator

#### Step 3.3: NumberedGrid Slice
- Run Slice Machine: Create "NumberedGrid" slice
- Configure fields:
  - `columns`: Select (2, 3, 4) - default 4
  - `show_numbers`: Boolean - default true
  - `items`: Group (repeatable)
    - `heading`: Text (optional custom heading)
    - `description`: Rich text
- Generate Svelte component
- Implement auto-numbering logic: `(01)`, `(02)`, etc.
- Test with 2, 3, 4 columns
- Test with varying item counts (4, 5, 6+ items)

#### Step 3.4: FullWidthImage Slice
- Run Slice Machine: Create "FullWidthImage" slice
- Configure fields:
  - `image`: Image field
  - `alt`: Text
  - `caption`: Text (optional)
- Generate Svelte component
- Implement full-width layout
- Add lazy loading
- Test in slice simulator

---

### Phase 4: Prismic Content Modeling

#### Step 4.1: Create Project Custom Type
- Open Prismic dashboard → Custom Types
- Create "Project" repeatable type
- Add fields:
  - `uid`: UID
  - `title`: Text
  - `subtitle`: Text
  - `category`: Select (App Design, UX/UI, Branding)
  - `featured`: Boolean
  - `thumbnail`: Image
  - `thumbnail_overlay`: Image
  - `role`: Text
  - `timeline`: Text
  - `team`: Text
  - `tools`: Text
  - `slices`: Slice Zone
  - `meta_title`: Text
  - `meta_description`: Text
  - `meta_image`: Image
- Save and publish custom type

#### Step 4.2: Content Migration Preparation
- Create folder structure in Prismic media library:
  - `/projects/nuro/`
  - `/projects/copacabana/`
  - `/projects/circle/`
  - `/projects/petrichor/`
- Upload images from `vanilla/images/` to respective folders
- Convert `splash.png` to WebP for about page

---

### Phase 5: Case Study Page Implementation

#### Step 5.1: Create Project Route Handler
- Create `src/routes/work/[uid]/+page.server.ts`
- Import Prismic client
- Fetch project by UID
- Handle 404 for invalid UIDs
- Return project data to page

#### Step 5.2: Create Project Page Template
- Create `src/routes/work/[uid]/+page.svelte`
- Import ArticleHeader component
- Import SliceZone from Prismic
- Render ArticleHeader with project title/description
- Render SliceZone with project slices
- Add SEO meta tags from project data

#### Step 5.3: Migrate Nuro Content
- Create "Nuro" document in Prismic
- Fill metadata (title, role, timeline, team, tools)
- Add slices in order:
  - FullWidthImage (nu-1.webp)
  - FullWidthImage (nu-2.webp, nu-3.webp, nu-4.webp)
  - TextBlock (2-column descriptions)
  - FullWidthImage (nu-5.webp)
  - NumberedGrid (flashcard features - 2 items, 4 columns)
  - FullWidthImage (nu-6.webp, nu-7.webp)
- Test preview in Prismic
- Publish and test on `/work/nuro`

#### Step 5.4: Migrate Copacabana Content
- Create "Copacabana" document in Prismic
- Fill metadata
- Add slices (7 images + text blocks)
- Publish and test on `/work/copacabana`

#### Step 5.5: Migrate Circle Content
- Create "Circle" document in Prismic
- Fill metadata
- Add slices (9 images + NumberedGrid with 4 items)
- Publish and test on `/work/circle`

#### Step 5.6: Migrate Petrichor Content
- Create "Petrichor" document in Prismic
- Fill metadata
- Add slices (6 images + text blocks)
- Publish and test on `/work/petrichor`

---

### Phase 6: Work Gallery Page

#### Step 6.1: Fetch All Projects
- Create `src/routes/work/+page.server.ts`
- Fetch all projects from Prismic
- Sort by featured flag or date
- Return projects array

#### Step 6.2: Build Gallery Layout
- Create `src/routes/work/+page.svelte`
- Use IndexCard component to display projects
- Create grid or list layout
- Add filtering by category (optional)
- Test responsive behavior

---

### Phase 7: Polish & Optimization

#### Step 7.1: Animations
- Uncomment GSAP animations in `static/js/motion.js`
- Implement smooth scroll (Lenis)
- Add scroll-triggered animations with ScrollTrigger
- Implement text splitting effects (migrate to GSAP SplitText)
- Add hover states and transitions

#### Step 7.2: Performance
- Image lazy loading for all slices
- Route preloading for project pages
- Performance audit (Lighthouse)
- Optimize bundle size

#### Step 7.3: Accessibility & SEO
- Accessibility audit (WCAG 2.1)
- Add proper alt text to all images
- Meta tags for all pages
- Open Graph images
- Generate sitemap from Prismic documents

#### Step 7.4: Additional Features
- Thoughts/blog section (optional)
- 404/401 error pages
- Contact form (if needed)
- Resume page integration

---

### Phase 8: Deployment

#### Step 8.1: Pre-deployment
- Choose hosting platform (Vercel, Netlify, Cloudflare Pages)
- Configure environment variables (`VITE_PRISMIC_ENVIRONMENT`)
- Setup custom domain
- Configure Prismic webhooks for automatic rebuilds

#### Step 8.2: Launch
- Run production build: `npm run build`
- Test production build locally: `npm run preview`
- Deploy to hosting platform
- Test live site
- Setup analytics (optional)

---

## Content Migration Details

### Asset Inventory

**Homepage:**
- hm-01.webp (54KB)
- hm-02.webp (174KB)
- hm-03.webp (168KB)
- hm-04.webp (158KB)
- overlay-01.webp to overlay-04.webp

**Nuro Project (7 images):**
- nu-1.webp (97KB) to nu-7.webp (606KB)

**Copacabana Project (7 images):**
- cc-1.webp (88KB) to cc-7.webp (660KB)

**Circle Project (9 images):**
- ci-1.webp (168KB) to ci-9.webp (830KB)

**Petrichor Project (6 images):**
- pt-1.webp (79KB) to pt-6.webp (1.4MB)

**About Page:**
- splash.png (261KB) → Convert to WebP

**Total:** ~45MB of assets

---

## Custom Type Definitions

### Blog/Thoughts Custom Type

**For future blog/thoughts section:**

```json
{
  "uid": "UID",
  "title": "Text",
  "published_date": "Date",
  "excerpt": "Text",
  "featured_image": "Image",
  "author": "Text",
  "tags": "Group[]",
  "slices": "Slice Zone",
  "meta_title": "Text",
  "meta_description": "Text",
  "meta_image": "Image"
}
```

**Recommended Slices for Blog:**
- Hero Slice (heading, subheading, CTA)
- Text Block (single/multi-column)
- Image Block (single/grid)
- Full Width Image
- Code Block (for technical posts)
- Quote Block
- Video Embed

---

## Component Specifications

### Sidebar Component Props

```typescript
{
  heading: string;
  description: string;
  metadata: Array<{ label: string; value: string }>; // max 4 items
}
```

**Features:**
- Numbered display (01-04)
- Responsive layout
- Sticky positioning on desktop
- Stacked on mobile

---

### Project Card Component Props

```typescript
{
  title: string;
  description: string;
  href: string;
  backgroundImage: string;
  overlayImage: string;
}
```

**Features:**
- Background image
- Overlay image
- Project title and description
- Link to case study
- Hover effects
- Aspect ratio 1:1

---

### Case Study Header Props

```typescript
{
  title: string;
  description: string;
  sidebar?: {
    role: string;
    timeline: string;
    team: string;
    tools: string;
  };
}
```

**Features:**
- Project title
- Main description (rich text)
- Integrated or separate sidebar
- Responsive two-column layout

---

## Technical Considerations

### Performance Optimization
- **Image Format:** WebP for all photos
- **Font Loading:** font-display: swap (already configured)
- **Code Splitting:** Leverage SvelteKit's automatic splitting
- **Lazy Loading:** Implement for images below fold
- **Preloading:** Critical routes and assets

### Accessibility
- **Semantic HTML:** Maintain heading hierarchy
- **ARIA Labels:** Navigation, buttons, landmarks
- **Focus Management:** Keyboard navigation for drawer
- **Color Contrast:** Meets WCAG AA (white on dark)
- **Alt Text:** Required for all images

### SEO Strategy
- **Dynamic Meta Tags:** Use Prismic meta fields
- **Open Graph:** Share previews for projects
- **Structured Data:** Schema.org for portfolio items
- **Sitemap:** Generate from Prismic documents
- **Canonical URLs:** Prevent duplicate content

### Browser Support
- **Modern Evergreen:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **CSS Grid & Flexbox:** Full support
- **ES6+:** Vite transpilation for older browsers if needed
- **WebP:** 95%+ support (no fallbacks needed)

---

**Project Repository:** `/home/austinjxseph/GitHub/austinjxseph/vitruvian`
**Active Directory:** `/website/`
**Prismic Repository:** `vitruvian`
