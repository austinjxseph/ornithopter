<?php
// Build images array
$images = [];
foreach ($block->images()->toFiles() as $file) {
    $images[] = [
        "url" => $file->url(),
        "alt" => $file->alt()->value(),
    ];
}
$imagesJson = json_encode($images);

// Build items array
$items = [];
foreach ($block->items()->toStructure() as $item) {
    $items[] = [
        "type" => $item->type()->value(),
        "heading" => $item->heading()->value(),
        "subtitle" => $item->subtitle()->value(),
        "index" => $item->index()->value(),
        "description" => (string) $item->description()->kt(),
    ];
}
$itemsJson = json_encode($items);
?>

<s-bio
  heading="<?= htmlspecialchars((string) $block->heading()->kt()) ?>"
  content="<?= htmlspecialchars((string) $block->content()->kt()) ?>"
  images='<?= htmlspecialchars($imagesJson) ?>'
  items='<?= htmlspecialchars($itemsJson) ?>'
></s-bio>
