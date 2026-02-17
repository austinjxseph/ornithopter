# Kirby CMS Dockerfile for Railway
FROM php:8.4-apache

# Install GD and other required extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype-dev \
    libzip-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Ensure only one MPM is loaded, then enable mod_rewrite
RUN a2dismod mpm_event && a2enmod mpm_prefork && a2enmod rewrite

# Set document root to Kirby directory
ENV APACHE_DOCUMENT_ROOT /var/www/html
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# Allow .htaccess overrides
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

# Copy Kirby files
COPY . /var/www/html/

# Create media directory (generated at runtime by Kirby, not in repo)
RUN mkdir -p /var/www/html/media

# Set permissions for writable folders
RUN chown -R www-data:www-data /var/www/html/media /var/www/html/content /var/www/html/site/cache /var/www/html/site/sessions

# Railway sets $PORT dynamically — substitute at runtime and start Apache
CMD ["sh", "-c", "sed -i \"s/Listen 80/Listen ${PORT:-80}/g\" /etc/apache2/ports.conf && sed -i \"s/*:80/*:${PORT:-80}/g\" /etc/apache2/sites-available/000-default.conf && apache2-foreground"]
