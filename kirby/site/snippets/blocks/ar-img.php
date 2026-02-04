<?php
$images = [];

// First check for structure field 'images' (multi-image support)
$imagesStructure = $block->images()->toStructure();
if ($imagesStructure->isNotEmpty()) {
    foreach ($imagesStructure as $item) {
        $file = $item->image()->toFile();
        if ($file) {
            $images[] = [
                "url" => $file->url(),
                "alt" => $file->alt()->value() ?? "",
                "caption" => $item->caption()->value() ?? "",
            ];
        }
    }
}

// Fallback: check for single 'image' field (legacy/simple blocks)
if (empty($images)) {
    $file = $block->image()->toFile();
    if ($file) {
        $images[] = [
            "url" => $file->url(),
            "alt" => $file->alt()->value() ?? "",
            "caption" => $block->caption()->value() ?? "",
        ];
    }
}

$blockId = "ar-img-" . $block->id();
$props = [
    "images" => $images,
    "spacing" => $block->spacing()->value() ?: "stack",
];
?>

<ar-img id="<?= $blockId ?>"></ar-img>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
