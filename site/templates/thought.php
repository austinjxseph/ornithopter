<?php snippet("head"); ?>
<?php snippet("header"); ?>

<main class="u-layout-vflex main" data-barba="container" data-barba-namespace="thought">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <article class="thought">
        <header class="thought-header">
          <h1><?= $page->title()->html() ?></h1>
          <time datetime="<?= $page->date()->toDate("Y-m-d") ?>">
            <?= $page->date()->toDate("d M Y") ?>
          </time>
        </header>

        <div class="thought-content">
          <?= $page->content()->kt() ?>
        </div>
      </article>
    </div>
  </div>
<?php snippet("footer"); ?>
</main>
<?php snippet("scripts"); ?>
