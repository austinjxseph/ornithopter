<?php $file = $block->image()->toFile(); ?>

<article-full-bleed
  image="<?= $file?->url() ?>"
  alt="<?= $file?->alt()->html() ?>"
  caption="<?= $block->caption()->html() ?>"
></article-full-bleed>
