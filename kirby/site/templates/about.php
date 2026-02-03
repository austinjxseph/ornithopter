<?php snippet("head"); ?>
<?php snippet("header"); ?>

<?php // Build images array from files field


$imagesData = [];
foreach ($page->about_images()->toFiles() as $image) {
    $imagesData[] = [
        "url" => $image->url(),
        "alt" => $image->alt()->value() ?? "",
    ];
} // Build items array from blocks field
$itemsData = [];
foreach ($page->about_items()->toBlocks() as $block) {
    if ($block->type() === "ab-bio") {
        $content = $block->content()->toArray();
        $rows = [];
        foreach ($content["rows"] ?? [] as $row) {
            $rows[] = [
                "heading" => $row["heading"] ?? "",
                "subtitle" => $row["subtitle"] ?? "",
                "index" => $row["index"] ?? "",
                "description" => $row["description"] ?? "",
            ];
        }
        $itemsData[] = [
            "heading" => $content["heading"] ?? "",
            "rows" => $rows,
        ];
    }
}
$aboutId = "about-" . $page->id();
$aboutProps = [
    "heading" => (string) $page->about_heading()->kt(),
    "content" => (string) $page->about_content()->kt(),
    "images" => $imagesData,
    "items" => $itemsData,
];
?>

<l-about id="<?= $aboutId ?>"></l-about>
<script type="application/json" data-for="<?= $aboutId ?>">
<?= json_encode($aboutProps, JSON_UNESCAPED_SLASHES) ?>
</script>

<?php snippet("footer"); ?>
<?php snippet("scripts"); ?>
