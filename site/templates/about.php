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
            "id" => $block->id(),
            "type" => "b-header",
            "title" => (string) $block->title()->kt(),
            "description" => (string) $block->description()->kt(),
            "layout" => $block->layout()->value() ?: "column",
        ];
    } elseif ($block->type() === "b-text") {
        $textItems = [];
        foreach ($block->items()->toStructure() as $item) {
            $itemData = $item->toArray();
            $textItems[] = [
                "heading" => $itemData["heading"] ?? "",
                "content" => $itemData["content"] ?? "",
            ];
        }
        $itemsData[] = [
            "id" => $block->id(),
            "type" => "b-text",
            "columns" => $block->columns()->value() ?: "4",
            "items" => $textItems,
        ];
    }
}
$aboutId = "about";
$aboutProps = ["images" => $imagesData, "items" => $itemsData];
?>

<div class="page" data-barba="container" data-barba-namespace="about">
<main class="u-layout-vflex main">
<l-about id="<?= $aboutId ?>"></l-about>
<script type="application/json" data-for="<?= $aboutId ?>">
<?= json_encode($aboutProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>
<?php snippet("footer"); ?>
</div>
<?php snippet("scripts"); ?>
