<?php snippet("head"); ?>
<?php snippet("header"); ?>

<?php
// Build projects data array for the component
$projects = page("projects")
    ->children()
    ->listed()
    ->filterBy("showcase", true)
    ->sortBy("sort", "asc")
    ->limit(4);
$projectsData = [];
foreach ($projects as $project) {
    $projectsData[] = [
        "url" => $project->url(),
        "title" => $project->project_title()->value(),
        "thumbnail_base" => $project->thumbnail_base()->toFile()?->url() ?? "",
        "thumbnail_overlay" =>
            $project->thumbnail_overlay()->toFile()?->url() ?? "",
    ];
}
$heroId = "hero-" . $page->id();
$heroProps = [
    "eyebrow" => $page->hero_eyebrow()->value(),
    "title" => (string) $page->hero_title()->kti(),
    "buttonlabel" => $page->hero_button_label()->value(),
    "buttonhref" => $page->hero_button_link()->toUrl(),
    "projects" => $projectsData,
];
?>

<l-home id="<?= $heroId ?>"></l-home>
<script type="application/json" data-for="<?= $heroId ?>">
<?= json_encode($heroProps, JSON_UNESCAPED_SLASHES) ?>
</script>

<?php snippet("footer", ["fixed" => true]); ?>
<?php snippet("scripts"); ?>
