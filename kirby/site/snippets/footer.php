<?php
// Build footer links JSON
$footerLinks = [];
foreach ($site->footer_links()->toStructure() as $link) {
    $footerLinks[] = [
        "icon" => $link->link_icon()->toFile()?->url(),
        "label" => $link->link_label()->value(),
        "href" => $link->link_href()->value(),
    ];
}
$footerLinksJson = json_encode($footerLinks);
$fixed = $fixed ?? false;
?>

<c-footer
  <?= $fixed ? "fixed" : "" ?>
  links='<?= $footerLinksJson ?>'
></c-footer>
