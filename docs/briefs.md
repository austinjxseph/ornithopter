# Development Briefs

## Brief 1: Generate Svelte Components/Slices from Figma Designs

**Objective:** Use Figma's Designer MCP with Claude to generate new Svelte components and Prismic slices based on design links.

**Process:**
1. Provide Figma design link(s) for the component/slice
2. Claude analyzes the design using Figma MCP
3. Generate Svelte component code following existing CSS framework patterns
4. Create corresponding Prismic slice structure if needed
5. Ensure responsive behavior and accessibility

**Requirements:**
- Use existing CSS framework (refer to `/website/src/lib/styles/`)
- Follow established component patterns in `/website/src/lib/components/`
- Match naming conventions and file structure
- Include TypeScript types where applicable
- Responsive across all breakpoints

**Figma Links:**
- [ ] About page Bio section: `[INSERT LINK]`
- [ ] Colophon page nested slice: `[INSERT LINK]`
- [ ] Thoughts page listing: `[INSERT LINK]`
- [ ] Thoughts page detail: `[INSERT LINK]`
- [ ] Other: `[INSERT LINK]`

---

## Brief 2: Generate Prismic Content Models from List

**Objective:** Speed up development workflow by generating Prismic content model JSON configurations based on a structured list.

**Process:**
1. Provide list of content model requirements (fields, types, relationships)
2. Claude generates corresponding Prismic custom type JSON
3. Review and validate structure
4. Import/apply to Prismic CMS

**Template for Content Model List:**
```
Content Type: [Name]
- Field 1: [name] | Type: [text/rich-text/image/etc] | Required: [yes/no]
- Field 2: [name] | Type: [type] | Required: [yes/no]
- Nested: [slice-zone/group/etc]
  - Slice 1: [name]
    - Field: [details]
```

**Content Models to Generate:**

### 1. Global Elements (Header & Footer)
```
Content Type: Settings (or Navigation)
- Logo: image | Required: yes
- Header Links: group | Required: yes
  - Link Label: text | Required: yes
  - Link URL: link | Required: yes
  - Nested Links: group | Required: no
    - Sub Link Label: text
    - Sub Link URL: link
- Footer Links: group | Required: yes
  - Link Label: text | Required: yes
  - Link URL: link | Required: yes
- Social Links: group | Required: no
  - Platform: text | Required: yes
  - URL: link | Required: yes
  - Icon: image | Required: no
```

### 2. Preloader Component
```
Content Type: Preloader
- Enabled: boolean | Required: yes | Default: true
- Duration: number | Required: yes | Default: 2000
- Static Objects: group | Required: yes
  - Object Name: text | Required: yes
  - 3D Model Reference: text | Required: yes
  - Animation Config: rich-text/structured-text | Required: no
```

### 3. Bio Slice (About Page)
```
Slice: Bio
- Heading: text | Required: yes
- Body Text: rich-text | Required: yes
- Profile Image: image | Required: no
- CTA Link: link | Required: no
- CTA Label: text | Required: no
```

### 4. Colophon Nested Slice
```
Slice: Colophon
- Section Title: text | Required: yes
- Items: group | Required: yes
  - Item Label: text | Required: yes
  - Item Value: text/rich-text | Required: yes
  - Sub Items: group | Required: no
    - Sub Label: text
    - Sub Value: text
```

### 5. Blog/Thoughts Content Type
```
Content Type: Blog Post
- Title: text | Required: yes
- Slug: UID | Required: yes
- Published Date: date | Required: yes
- Excerpt: text | Required: no
- Featured Image: image | Required: no
- Author: text | Required: yes
- Tags: group | Required: no
  - Tag: text
- Body: slice-zone | Required: yes
  - [Use existing slices + new ones as needed]
- SEO Title: text | Required: no
- SEO Description: text | Required: no
```

---

## Notes
- Always validate generated code against existing patterns
- Test responsive behavior across breakpoints
- Ensure accessibility (ARIA labels, semantic HTML, keyboard navigation)
- Review and optimize performance (lazy loading, code splitting)
- Update this file with new design links and requirements as needed

---

*Created: 2025-12-21*
