<?php
$images = [];
foreach ($block->images()->toStructure() as $item) {
    $file = $item->image()->toFile();
    $images[] = [
        'url' => $file?->url(),
        'alt' => $file?->alt()->value(),
        'caption' => $item->caption()->value(),
    ];
}
$imagesJson = json_encode($images);
?>

<article-image-block
  columns="<?= $block->columns()->value() ?>"
  images='<?= htmlspecialchars($imagesJson) ?>'
></article-image-block>
