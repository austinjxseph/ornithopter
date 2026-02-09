<?php
$file = $block->image()->toFile();

$blockId = "b-fullbleed-" . $block->id();
$props = [
    "image" => $file?->url() ?? "",
    "alt" => $file?->alt()->value() ?? "",
    "caption" => $block->caption()->value() ?? "",
];
?>

<b-fullbleed id="<?= $blockId ?>"></b-fullbleed>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
