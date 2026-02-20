<?php snippet("head"); ?>
<?php snippet("preloader"); ?>
<?php snippet("header"); ?>

<?php // Build projects data array from featured projects field


$projectsData = [];
foreach ($page->featured_projects()->toPages() as $project) {
    $projectsData[] = [
        "url" => $project->url(),
        "title" => $project->project_title()->value(),
        "thumbnail_base" => $project->thumbnail_base()->toFile()?->url() ?? "",
        "thumbnail_overlay" =>
            $project->thumbnail_overlay()->toFile()?->url() ?? "",
    ];
}
$indexId = "index";
$indexProps = [
    "eyebrow" => $page->hero_eyebrow()->value(),
    "title" => strip_tags(
        (string) $page->hero_title()->kti(),
        "<em><i><span><strong><b>",
    ),
    "buttonlabel" => $page->hero_button_label()->value(),
    "buttonhref" => $page->hero_button_link()->toUrl(),
    "projects" => $projectsData,
];
?>

<div class="page" data-barba="container" data-barba-namespace="Index">
<main class="main">
<l-index id="<?= $indexId ?>"></l-index>
<script type="application/json" data-for="<?= $indexId ?>">
<?= json_encode($indexProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>
<?php snippet("footer", ["fixed" => true]); ?>
</div>
<?php snippet("scripts"); ?>
