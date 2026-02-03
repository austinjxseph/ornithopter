<?php
// Build images array
$images = [];
foreach ($block->images()->toFiles() as $file) {
    $images[] = [
        "url" => $file->url(),
        "alt" => $file->alt()->value(),
    ];
}

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

$blockId = "s-bio-" . $block->id();
$props = [
    "heading" => (string) $block->heading()->kt(),
    "content" => (string) $block->content()->kt(),
    "images" => $images,
    "items" => $items,
];
?>

<s-bio id="<?= $blockId ?>"></s-bio>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
