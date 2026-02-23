<?php snippet("head"); ?>
<?php snippet("header"); ?>

<?php
$holdingId = "holding-page";
$holdingProps = [
    "title" => $page->title()->or("coming soon.")->value(),
    "message" => $page
        ->message()
        ->or(
            "Still in progress. One day I'll stop overthinking it, ship something minimal, and pretend it was always the plan - but not today.",
        )
        ->value(),
    "buttonlabel" => $page->buttonlabel()->or("Go back Home")->value(),
    "buttonhref" => $page->buttonhref()->or("/")->value(),
];
?>

<div class="page" data-barba="container" data-barba-namespace="holding">
<main class="main">
<l-holding id="<?= $holdingId ?>"></l-holding>
<script type="application/json" data-for="<?= $holdingId ?>">
<?= json_encode($holdingProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>
<?php snippet("footer", ["fixed" => true]); ?>
</div>
<?php snippet("scripts"); ?>
