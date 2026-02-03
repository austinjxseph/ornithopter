<?php $file = $block->image()->toFile(); ?>

<ar-fullbleed
  image="<?= $file?->url() ?>"
  alt="<?= $file?->alt()->html() ?>"
  caption="<?= $block->caption()->html() ?>"
></ar-fullbleed>
