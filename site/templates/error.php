<?php snippet("head", ["customTitle" => "404 — Not Found"]); ?>
<?php snippet("header"); ?>

<?php
$errorId = "error-page";
$errorProps = [
    "title" => "404",
    "message" =>
        "Page not found. Nor enough will to make this page look remotely interesting. One day I'll pick this up and slap a gorgeous shader in here. But if you're still reading this, that day probably hasn't come around yet.",
    "buttonlabel" => "Go back Home",
    "buttonhref" => "/",
];
?>

<div class="page" data-barba="container" data-barba-namespace="error">
<main class="main">
<l-404 id="<?= $errorId ?>"></l-404>
<script type="application/json" data-for="<?= $errorId ?>">
<?= json_encode($errorProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>
<?php snippet("footer", ["fixed" => true]); ?>
</div>
<?php snippet("scripts"); ?>
