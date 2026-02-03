<?php
$items = [];
foreach ($block->items()->toStructure() as $item) {
    // Note: 'content' field name conflicts with Kirby's reserved content() method
    // Use toArray() to access the raw field value instead
    $itemData = $item->toArray();
    $items[] = [
        "content" => $itemData["content"] ?? "",
    ];
}
$itemsJson = json_encode($items);
?>

<article-text-block
  items='<?= htmlspecialchars($itemsJson) ?>'
></article-text-block>
