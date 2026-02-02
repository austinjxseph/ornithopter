<?php
$items = [];
foreach ($block->items()->toStructure() as $item) {
    $items[] = [
        'heading' => $item->heading()->value(),
        'description' => (string) $item->description()->kt(),
    ];
}
$itemsJson = json_encode($items);
?>

<article-numbered-grid
  columns="<?= $block->columns()->value() ?>"
  shownumbers="<?= $block->show_numbers()->toBool() ? 'true' : 'false' ?>"
  items='<?= htmlspecialchars($itemsJson) ?>'
></article-numbered-grid>
