<?php snippet("head"); ?>
<?php snippet("header"); ?>

<main class="u-layout-vflex main" data-barba="container" data-barba-namespace="thoughts">
  <div class="u-layout-vflex inner">
    <div class="u-layout-vflex body">
      <header class="u-layout-vflex header">
        <h1><?= $page->title() ?></h1>
      </header>

      <div class="thoughts-list">
        <?php foreach (
            $page->children()->listed()->sortBy("date", "desc")
            as $thought
        ): ?>
          <article class="thought-item">
            <a href="<?= $thought->url() ?>">
              <h2><?= $thought->title()->html() ?></h2>
              <time datetime="<?= $thought->date()->toDate("Y-m-d") ?>">
                <?= $thought->date()->toDate("d M Y") ?>
              </time>
            </a>
          </article>
        <?php endforeach; ?>
      </div>
    </div>
  </div>
<?php snippet("footer"); ?>
</main>
<?php snippet("scripts"); ?>
