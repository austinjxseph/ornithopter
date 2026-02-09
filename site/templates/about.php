<?php snippet("head"); ?>
<?php snippet("header"); ?>

<?php // Build images array from files field


$imagesData = [];
foreach ($page->about_images()->toFiles() as $image) {
    $imagesData[] = [
        "url" => $image->url(),
        "alt" => $image->alt()->value() ?? "",
    ];
} // Build items array from blocks field — unified with type discrimination
$itemsData = [];
foreach ($page->about_items()->toBlocks() as $block) {
    if ($block->type() === "b-header") {
        $itemsData[] = [
            "type" => "b-header",
            "title" => (string) $block->title()->kt(),
            "description" => (string) $block->description()->kt(),
            "layout" => $block->layout()->value() ?: "column",
        ];
    }
}
$aboutId = "about-" . $page->id();
$aboutProps = ["images" => $imagesData, "items" => $itemsData];
?>

<main class="u-layout-vflex main">
<l-about id="<?= $aboutId ?>"></l-about>
<script type="application/json" data-for="<?= $aboutId ?>">
<?= json_encode($aboutProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>

<?php snippet("footer"); ?>
<?php snippet("scripts"); ?>
