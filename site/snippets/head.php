<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php
  $favicon = $site->favicon()->toFile();
  $ogImage = $page->meta_image()->toFile() ?? $site->og_image()->toFile();
  ?>

  <title><?= $page->customTitle ??
      $page->title() ?> — <?= $site->title() ?></title>

  <?php if ($page->meta_description()->isNotEmpty()): ?>
    <meta name="description" content="<?= $page->meta_description()->html() ?>">
  <?php elseif ($site->description()->isNotEmpty()): ?>
    <meta name="description" content="<?= $site->description()->html() ?>">
  <?php endif; ?>

  <!-- Open Graph -->
  <meta property="og:title" content="<?= $page
      ->meta_title()
      ->or($page->title())
      ->html() ?>">
  <meta property="og:description" content="<?= $page
      ->meta_description()
      ->or($site->description())
      ->html() ?>">
  <meta property="og:type" content="website">
  <?php if ($ogImage): ?>
    <meta property="og:image" content="<?= $ogImage->url() ?>">
  <?php endif; ?>

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <?php if ($ogImage): ?>
    <meta name="twitter:image" content="<?= $ogImage->url() ?>">
  <?php endif; ?>

  <?php if ($favicon): ?>
    <link rel="icon" href="<?= $favicon->url() ?>">
    <link rel="apple-touch-icon" href="<?= $favicon->url() ?>">
  <?php endif; ?>

  <!-- Preload: preloader images (fetched by Three.js TextureLoader) -->
  <?php foreach ($site->preloader_images()->toFiles() as $img): ?>
  <link rel="preload" as="image" href="<?= $img->url() ?>">
  <?php endforeach; ?>

  <!-- Styles -->
  <link rel="stylesheet" href="/assets/css/normalize.css">
  <link rel="stylesheet" href="/assets/css/variables.css">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/keyframes.css">
  <link rel="stylesheet" href="/assets/css/svelte.css">
</head>
<body class="body" data-barba="wrapper">
