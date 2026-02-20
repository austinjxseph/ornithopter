<?php
$items = [];
foreach ($block->items()->toStructure() as $item) {
    // Note: 'content' field name conflicts with Kirby's reserved content() method
    // Use toArray() to access the raw field value instead
    $itemData = $item->toArray();
    $items[] = [
        "heading" => $itemData["heading"] ?? "",
        "content" => $itemData["content"] ?? "",
    ];
}

$blockNamespace = $blockNamespace ?? "blk";
$blockId = $blockNamespace . "-" . $block->id();
$props = [
    "columns" => $block->columns()->value() ?: "4",
    "items" => $items,
];
?>

<b-text id="<?= $blockId ?>"></b-text>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
