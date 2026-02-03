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
?>

<c-indexhero
  eyebrow="<?= $page->hero_eyebrow()->html() ?>"
  title="<?= $page->hero_title()->kti() ?>"
  buttonlabel="<?= $page->hero_button_label()->html() ?>"
  buttonhref="<?= $page->hero_button_link()->toUrl() ?>"
  projects="<?= htmlspecialchars(json_encode($projectsData), ENT_QUOTES) ?>"
></c-indexhero>

<?php snippet("footer", ["fixed" => true]); ?>
<?php snippet("scripts"); ?>
