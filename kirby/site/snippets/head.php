<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title><?= $page->customTitle ??
      $page->title() ?> | <?= $site->title() ?></title>

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
  <?php if ($page->meta_image()->toFile()): ?>
    <meta property="og:image" content="<?= $page
        ->meta_image()
        ->toFile()
        ->url() ?>">
  <?php endif; ?>

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">

  <!-- Styles -->
  <link rel="stylesheet" href="/assets/css/normalize.css">
  <link rel="stylesheet" href="/assets/css/variables.css">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/keyframes.css">
</head>
<body class="body">
<div class="page">
