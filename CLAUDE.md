# Claude Code Guidelines for Ornithopter

## Kirby CMS Standards

- Always follow Kirby's official standards and conventions, not custom PHP assumptions
- When in doubt, refer to `starterkit-main/` as the reference template
- Use Kirby's official router.php from `kirby/kirby/router.php` for local PHP development
- For configuration, follow patterns established in the starterkit

## Svelte Web Components

- Components use `shadow: "none"` which means styles must be scoped within the component
- NEVER move component styles to global CSS - that defeats the purpose of using Svelte
- If styles aren't applying, the issue is with how the component is compiled or structured
- Fix styling issues by fixing the Svelte component or build process, NOT by dumping styles into global CSS
- The whole point of Svelte components is encapsulated, scoped styles

## PHP Development

- Local development uses PHP built-in server with Kirby's router
- Run server from kirby directory: `cd kirby && php -S localhost:8000 router.php`
- Ensure required PHP extensions are installed (gd for image thumbnails)
- Thumbnail driver in config should match installed extensions (gd or im)

## Documentation

- After each successful implementation or fix, log a summary in `docs/process.md`
- Include: what was done, what the problem was, and what fixed it
- This creates a reference for future debugging and onboarding

## Project Structure

- `kirby/` - Kirby CMS (current site, both backend and frontend)
- `website/` - Legacy SvelteKit + Prismic frontend (reference only, not in use)
- `starterkit-main/` - Reference Kirby starterkit template
- `docs/` - Project documentation
