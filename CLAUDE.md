# Claude Code Guidelines for Ornithopter

## Kirby CMS Standards

- Always follow Kirby's official standards and conventions, not custom PHP assumptions
- When in doubt, refer to `starterkit-main/` as the reference template
- Use Kirby's official router.php from `kirby/kirby/router.php` for local PHP development
- For configuration, follow patterns established in the starterkit

## Svelte Web Components

- Components use `shadow: "open"` for true CSS encapsulation via Shadow DOM
- Styles are fully scoped - they don't leak in or out of components
- For global theming, use CSS custom properties (variables) which penetrate the shadow boundary
- NEVER move component styles to global CSS - that defeats the purpose of Shadow DOM
- If styles aren't applying, check that CSS variables are defined on `:root` or the component is receiving props correctly
- This is an "islands architecture" pattern - Kirby serves static HTML, Svelte components hydrate as interactive islands
- **Data passing**: Prefer flat string attributes over nested JSON when possible
- For complex/nested data (arrays, objects), consider using slots/children instead of JSON attributes - let Kirby loop in PHP and generate child elements that Svelte can read via `<slot>`

## PHP Development

- Local development uses PHP built-in server with Kirby's router
- Run server from kirby directory: `cd kirby && php -S localhost:8000 router.php`
- Ensure required PHP extensions are installed (gd for image thumbnails)
- Thumbnail driver in config should match installed extensions (gd or im)

## Kirby Block Snippets - Common Pitfalls

### Reserved Method Names in Structure Fields
Kirby's StructureObject class has reserved method names. If a structure field uses one of these names, accessing it via `$item->fieldname()` will return the wrong value:

**Reserved names to avoid:**
- `content` - Returns Content object, not field value
- `id` - Returns structure item ID
- `parent`, `site`, `kirby` - Return framework objects

**Workaround:** Use `$item->toArray()['fieldname']` instead of `$item->fieldname()`:
```php
// BAD - 'content' is reserved
$value = $item->content()->value(); // Returns empty or wrong value

// GOOD - access via toArray
$itemData = $item->toArray();
$value = $itemData['content'] ?? '';
```

### Blueprint/Snippet Field Mismatches
When blocks render as invisible, check that:
1. The **blueprint field names** match what the **PHP snippet** expects
2. Single file fields (`type: files, multiple: false`) vs structure fields are handled correctly
3. Consider adding fallback logic for backwards compatibility with existing content

## Documentation

- After each successful implementation or fix, log a summary in `docs/process.md`
- Include: what was done, what the problem was, and what fixed it
- This creates a reference for future debugging and onboarding

## Project Structure

- `kirby/` - Kirby CMS (current site, both backend and frontend)
- `website/` - Legacy SvelteKit + Prismic frontend (reference only, not in use)
- `starterkit-main/` - Reference Kirby starterkit template
- `docs/` - Project documentation
