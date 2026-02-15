<?php snippet("head"); ?>
<?php snippet("header"); ?>

<main class="u-layout-vflex main" data-barba="container" data-barba-namespace="default">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <?php foreach ($page->blocks()->toBlocks() as $block): ?>
        <?php snippet("blocks/" . $block->type(), ["block" => $block]); ?>
      <?php endforeach; ?>
    </div>
  </div>
<?php snippet("footer"); ?>
</main>
<?php snippet("scripts"); ?>
