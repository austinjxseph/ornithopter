<?php
$items = [];
foreach ($block->items()->toStructure() as $item) {
    $items[] = [
        'content' => (string) $item->content()->kt(),
    ];
}
$itemsJson = json_encode($items);
?>

<article-text-block
  columns="<?= $block->columns()->value() ?>"
  items='<?= htmlspecialchars($itemsJson) ?>'
></article-text-block>
