<?php
$preloaderImages = [];
foreach ($site->preloader_images()->toFiles() as $image) {
    $preloaderImages[] = [
        "url" => $image->url(),
        "alt" => $image->alt()->value() ?? "",
    ];
}

$props = [
    "images" => $preloaderImages,
];
?>

<c-preloader id="site-preloader"></c-preloader>
<script type="application/json" data-for="site-preloader">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
