<?php snippet("head"); ?>
<?php snippet("header"); ?>

<main class="u-layout-vflex main">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <header class="u-layout-vflex header">
        <h1><?= $page->title() ?></h1>
      </header>

      <div class="projects-grid">
        <?php foreach (
            $page->children()->listed()->sortBy("sort", "asc")
            as $project
        ): ?>
          <c-indexcard
            href="<?= $project->url() ?>"
            title="<?= $project->project_title()->html() ?>"
            backgroundimage="<?= $project
                ->thumbnail_base()
                ->toFile()
                ?->url() ?>"
            overlayimage="<?= $project
                ->thumbnail_overlay()
                ->toFile()
                ?->url() ?>"
          ></c-indexcard>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
</main>

<?php snippet("footer"); ?>
<?php snippet("scripts"); ?>
