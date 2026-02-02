<?php snippet('head') ?>
<?php snippet('header') ?>

<main class="u-layout-vflex main">
  <section class="u-layout-vflex section-hr">
    <div class="u-layout-vflex container-xl">
      <div class="u-layout-hflex inner">
        <!-- Left Panel: Hero Section (Sticky) -->
        <div class="u-layout-vflex wrap">
          <div class="u-layout-hflex text">
            <div class="u-layout-vflex heading gap-md">
              <div class="u-layout-hflex eyebrow">
                <div class="marker"></div>
                <div class="text-lg"><?= $page->hero_eyebrow() ?></div>
              </div>
              <h1><?= $page->hero_title()->kt() ?></h1>
              <animated-button
                label="<?= $page->hero_button_label() ?>"
                href="<?= $page->hero_button_link()->toUrl() ?>"
                active
              ></animated-button>
            </div>
          </div>
        </div>

        <!-- Right Panel: Project Showcase (Scrolling) -->
        <div class="u-layout-vflex track">
          <?php
          $projects = page('projects')
            ->children()
            ->listed()
            ->filterBy('showcase', true)
            ->sortBy('sort', 'asc')
            ->limit(4);

          foreach ($projects as $project):
          ?>
            <index-card
              href="<?= $project->url() ?>"
              title="<?= $project->project_title()->html() ?>"
              backgroundimage="<?= $project->thumbnail_base()->toFile()?->url() ?>"
              overlayimage="<?= $project->thumbnail_overlay()->toFile()?->url() ?>"
            ></index-card>
          <?php endforeach ?>
        </div>
      </div>
    </div>
  </section>
</main>

<?php snippet('footer', ['fixed' => true]) ?>
<?php snippet('scripts') ?>
