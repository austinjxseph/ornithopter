<?php
$file = $block->image()->toFile();

$blockId = "ar-fullbleed-" . $block->id();
$props = [
    "image" => $file?->url() ?? "",
    "alt" => $file?->alt()->value() ?? "",
    "caption" => $block->caption()->value() ?? "",
];
?>

<ar-fullbleed id="<?= $blockId ?>"></ar-fullbleed>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
