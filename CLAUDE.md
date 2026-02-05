# Claude Code Guidelines for Ornithopter

## Kirby CMS Standards

- Always follow Kirby's official standards and conventions, not custom PHP assumptions
- Use Kirby's official router.php from `kirby/router.php` for local PHP development

## Svelte Web Components

**IMPORTANT: This project uses Svelte web components. NEVER suggest removing Svelte or replacing components with plain PHP/HTML. The decision to use Svelte is final.**

- Components use `shadow: "none"` with Svelte's scoped CSS (hashed classes like `svelte-xyz123`)
- Svelte's scoped CSS works WITHOUT Shadow DOM - it's a compile-time mechanism
- Scoped CSS prevents styles from leaking OUT; global styles CAN still affect components (useful for theming)
- This is an "islands architecture" pattern - Kirby serves static HTML, Svelte components hydrate as interactive islands

### Data Passing: Props/Attributes

**Use props/attributes** to pass data from PHP to Svelte components:
- Pass simple strings directly as attributes
- Pass complex data (arrays, objects) as JSON strings via `htmlspecialchars(json_encode($data))`
- Svelte parses JSON in the component with `JSON.parse()`

**DO NOT use slots** with `shadow: "none"` - slots are a Shadow DOM feature and don't work without it. Content passed as children will not be projected into `<slot>` elements.

## PHP Development

- Local development uses PHP built-in server with Kirby's router
- Run server from repo root: `php -S localhost:8000 router.php`
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

- Kirby CMS lives at the repo root (site/, content/, assets/, index.php, etc.)
- `kirby/` - Kirby framework (installed via Composer)
- `svelte/` - Svelte web components source
- `davinci/` - Static design reference
- `docs/` - Project documentation
