<?php
// Build header links JSON
$headerLinks = [];
foreach ($site->header_links()->toStructure() as $link) {
    $headerLinks[] = [
        "label" => $link->link_label()->value(),
        "href" => $link->link_href()->value(),
    ];
}
$headerLinksJson = json_encode($headerLinks);
?>

<c-header
  rootpath="/"
  links='<?= $headerLinksJson ?>'
></c-header>
