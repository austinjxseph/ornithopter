<?php
$preloaderImages = [];
foreach ($site->preloader_images()->toFiles() as $image) {
    $preloaderImages[] = [
        "url" => $image->url(),
        "alt" => $image->alt()->value() ?? "",
    ];
}

$props = [
    "title" => (string) $site->preloader_title(),
    "images" => $preloaderImages,
];
?>

<c-preloader id="preloader"></c-preloader>
<script type="application/json" data-for="preloader">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
