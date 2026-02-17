<?php snippet("head"); ?>
<?php snippet("header"); ?>

<div class="page" data-barba="container" data-barba-namespace="default">
<main class="u-layout-vflex main">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <?php foreach ($page->blocks()->toBlocks() as $block): ?>
        <?php snippet("blocks/" . $block->type(), ["block" => $block]); ?>
      <?php endforeach; ?>
    </div>
  </div>
</main>
<?php snippet("footer"); ?>
</div>
<?php snippet("scripts"); ?>
