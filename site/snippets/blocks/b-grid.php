<?php
$items = [];
foreach ($block->items()->toStructure() as $item) {
    $items[] = [
        "heading" => $item->heading()->value(),
        "description" => (string) $item->description()->kt(),
    ];
}

$blockNamespace = $blockNamespace ?? "blk";
$blockId = $blockNamespace . "-" . $block->id();
$props = [
    "columns" => $block->columns()->value() ?: "4",
    "items" => $items,
];
?>

<b-grid id="<?= $blockId ?>"></b-grid>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
