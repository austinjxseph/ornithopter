<?php snippet("head", ["customTitle" => $page->project_title()->value()]); ?>
<?php snippet("header"); ?>

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
<?php snippet("scripts"); ?>
