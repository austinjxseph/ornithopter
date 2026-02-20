<?php snippet("head"); ?>
<?php snippet("header"); ?>

<?php
$itemsData = [];
foreach ($page->blocks()->toBlocks() as $block) {
    if ($block->type() === "b-header") {
        $itemsData[] = [
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
            "type" => "b-text",
            "columns" => $block->columns()->value() ?: "4",
            "items" => $textItems,
        ];
    } elseif ($block->type() === "b-img") {
        $images = [];
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
        $itemsData[] = [
            "type" => "b-img",
            "images" => $images,
            "spacing" => $block->spacing()->value() ?: "stack",
        ];
    } elseif ($block->type() === "b-grid") {
        $gridItems = [];
        foreach ($block->items()->toStructure() as $item) {
            $gridItems[] = [
                "heading" => $item->heading()->value(),
                "description" => (string) $item->description()->kt(),
            ];
        }
        $itemsData[] = [
            "type" => "b-grid",
            "columns" => $block->columns()->value() ?: "4",
            "items" => $gridItems,
        ];
    }
}
$textId = "text-" . $page->id();
$textProps = ["items" => $itemsData];
?>

<div class="page" data-barba="container" data-barba-namespace="default">
<main class="u-layout-vflex main">
<l-text id="<?= $textId ?>"></l-text>
<script type="application/json" data-for="<?= $textId ?>">
<?= json_encode($textProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>

<?php snippet("footer"); ?>
</div>
<?php snippet("scripts"); ?>
