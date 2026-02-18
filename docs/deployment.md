# Railway Deployment Log

Platform: Railway (Docker-based PHP deployment)
Base image: `php:8.4-apache`
Date: 2026-02-17

---

## Issue 1: `chown` fails on missing `/media` directory

**Error:**
```
chown: cannot access '/var/www/html/media': No such file or directory
```

**Cause:** Kirby's `media/` directory is generated at runtime (thumbnails, symlinks) and isn't committed to git. The Dockerfile tried to `chown` it before it existed.

**Fix:** Added `mkdir -p /var/www/html/media` before the `chown` step.

---

## Issue 2: "More than one MPM loaded"

**Error:**
```
AH00534: apache2: Configuration error: More than one MPM loaded.
```

**Cause:** Railway's infrastructure re-enables Apache MPM modules at container startup, so build-time `RUN a2dismod` doesn't stick.

**Fix:** Moved the MPM fix into the runtime `CMD` so it runs every time the container starts:
```dockerfile
CMD ["bash", "-lc", "set -eux; a2dismod mpm_event mpm_worker || true; rm -f /etc/apache2/mods-enabled/mpm_event.* /etc/apache2/mods-enabled/mpm_worker.* || true; a2enmod mpm_prefork; ..."]
```

Source: [Railway Help Station — MPM loaded error](https://station.railway.com/questions/more-than-one-mpm-loaded-error-on-php-8-9c836859)

---

## Issue 3: "Application failed to respond" (502)

**Error:** Railway returned 502 on all requests despite Apache running.

**Cause:** Railway assigns a dynamic `$PORT` env var at runtime. Apache was hardcoded to listen on port 80, but Railway's proxy expected the app on `$PORT` (8080).

**Fix:** Added runtime `sed` to substitute the port before Apache starts:
```dockerfile
sed -i "s/Listen 80/Listen ${PORT:-80}/g" /etc/apache2/ports.conf
sed -i "s/*:80/*:${PORT:-80}/g" /etc/apache2/sites-available/000-default.conf
```

Also set the port in Railway dashboard to match (8080, not 8000).

---

## Issue 4: Missing `vendor/autoload.php`

**Error:**
```
Failed to open stream: No such file or directory in /var/www/html/index.php on line 3
```

**Cause:** `vendor/` is in `.gitignore` so Composer dependencies weren't in the Docker image.

**Fix:** Added Composer install to the Dockerfile:
```dockerfile
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN cd /var/www/html && composer install --no-dev --optimize-autoloader --no-interaction
```

---

## Issue 5: Missing PHP extensions

**Cause:** The Dockerfile only installed `gd` and `zip`, but Kirby requires several more extensions for full functionality.

**Fix:** Added all required extensions:
```dockerfile
docker-php-ext-install gd zip mbstring dom xml curl intl exif opcache
```

---

## Issue 6: Images stuck on "pending" / 502

**Error:** All image requests (`/media/pages/...`) hung indefinitely, eventually returning 502.

**Cause:** `chown` only covered specific subdirectories (`media/`, `content/`, `site/cache`, `site/sessions`). Kirby needs to create deeply nested directories inside `media/` at runtime (e.g. `media/pages/projects/nuro/bd95bf63f8-1771364305/`) and the parent dirs weren't writable by `www-data`.

**Fix:** Changed to `chown -R www-data:www-data /var/www/html` to give Apache full write access.

Source: [Kirby forum — media folder permissions](https://forum.getkirby.com/t/media-folder-files-created-with-wrong-permissions/28623)

---

## Issue 7: Routing broken / links not working

**Error:** Barba.js page transitions and navbar links didn't work. Direct URLs worked fine.

**Cause:** Railway runs a reverse proxy (HTTPS on 443 → container on 8080). Kirby was detecting the internal URL (`http://container:8080`) instead of the public URL (`https://vitruvian.up.railway.app`), so all generated links had wrong protocol/host/port. Barba.js treats cross-origin links differently, breaking navigation.

**Fix:** Added reverse proxy URL detection to `site/config/config.php`:
```php
$url = null;
if (!empty($_SERVER['HTTP_X_FORWARDED_HOST'])) {
    $proto = $_SERVER['HTTP_X_FORWARDED_PROTO'] ?? 'https';
    $host  = $_SERVER['HTTP_X_FORWARDED_HOST'];
    $url   = $proto . '://' . $host;
}

return [
    "url" => $url ?? null,
    // ...
];
```

Also enabled `mod_headers` in the Dockerfile.

Source: [Kirby GitHub issue #4311 — reverse proxy URL detection](https://github.com/getkirby/kirby/issues/4311)

---

## Final Dockerfile

```dockerfile
FROM php:8.4-apache

RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype-dev libzip-dev \
    libxml2-dev libcurl4-openssl-dev libonig-dev libicu-dev libexif-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-configure intl \
    && docker-php-ext-install gd zip mbstring dom xml curl intl exif opcache \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
RUN a2enmod rewrite headers

# Apache config...
COPY . /var/www/html/
RUN cd /var/www/html && composer install --no-dev --optimize-autoloader --no-interaction
RUN mkdir -p /var/www/html/media
RUN chown -R www-data:www-data /var/www/html

CMD ["bash", "-lc", "set -eux; a2dismod mpm_event mpm_worker || true; rm -f /etc/apache2/mods-enabled/mpm_event.* /etc/apache2/mods-enabled/mpm_worker.* || true; a2enmod mpm_prefork; sed -i \"s/Listen 80/Listen ${PORT:-80}/g\" /etc/apache2/ports.conf; sed -i \"s/*:80/*:${PORT:-80}/g\" /etc/apache2/sites-available/000-default.conf; apache2ctl -t; exec apache2-foreground"]
```
