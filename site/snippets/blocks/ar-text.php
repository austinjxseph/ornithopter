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

$blockId = "ar-text-" . $block->id();
$props = [
    "items" => $items,
];
?>

<ar-text id="<?= $blockId ?>"></ar-text>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
