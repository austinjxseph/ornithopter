# Development Process Log

## 2026-02-02: Fixed Image Thumbnail Generation

### Problem
Image uploads in Kirby panel were not generating thumbnails. Media URLs like `/media/pages/projects/nuro/.../image.png` returned 404 errors.

### Root Causes
1. **Missing PHP GD extension** - Kirby needs either GD or ImageMagick to generate thumbnails
2. **Wrong thumbs driver in config** - Config had `"driver" => "im"` (ImageMagick) but only GD was installed
3. **Incorrect router.php** - Custom router wasn't setting `SCRIPT_NAME` properly, breaking Kirby's media URL routing

### Fixes Applied
1. Installed GD extension: `sudo dnf install php-gd`
2. Changed `kirby/site/config/config.php` thumbs driver from `"im"` to `"gd"`
3. Replaced `kirby/router.php` with Kirby's official router from `kirby/kirby/router.php`

### Key Learning
The official Kirby router sets `$_SERVER['SCRIPT_NAME'] = '/index.php'` which is required for Kirby to properly route `/media/...` requests to its internal media handler. Always use Kirby's official router for local PHP development.
