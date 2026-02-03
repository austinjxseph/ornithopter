# Claude Code Guidelines for Ornithopter

## Kirby CMS Standards

- Always follow Kirby's official standards and conventions, not custom PHP assumptions
- When in doubt, refer to `starterkit-main/` as the reference template
- Use Kirby's official router.php from `kirby/kirby/router.php` for local PHP development
- For configuration, follow patterns established in the starterkit

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
