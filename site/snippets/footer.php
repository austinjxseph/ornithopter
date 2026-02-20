<?php
// Build footer links
$footerLinks = [];
foreach ($site->footer_links()->toStructure() as $link) {
    $footerLinks[] = [
        "icon" => $link->link_icon()->toFile()?->url(),
        "label" => $link->link_label()->value(),
        "href" => $link->link_href()->toUrl(),
    ];
}

$fixed = $fixed ?? false;
$props = [
    "fixed" => $fixed,
    "links" => $footerLinks,
];
?>

<c-footer id="footer"></c-footer>
<script type="application/json" data-for="footer">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
