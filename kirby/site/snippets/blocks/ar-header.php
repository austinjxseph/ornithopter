<?php
$blockId = "ar-header-" . $block->id();
$props = [
    "title" => $block->title()->value(),
    "description" => (string) $block->description()->kt(),
];
?>

<ar-header id="<?= $blockId ?>"></ar-header>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
