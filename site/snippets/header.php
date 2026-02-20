<?php
// Build header links
$headerLinks = [];
foreach ($site->header_links()->toStructure() as $link) {
    $page = $link->link_page()->toPages()->first();
    if ($page) {
        $headerLinks[] = [
            "label" => $link->link_label()->value(),
            "href" => $page->url(),
        ];
    }
}

$props = [
    "rootpath" => "/",
    "links" => $headerLinks,
];
?>

<c-header id="header"></c-header>
<script type="application/json" data-for="header">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
