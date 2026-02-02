<?php

require __DIR__ . '/vendor/autoload.php';

$kirby = new Kirby([
    'roots' => [
        'index'   => __DIR__,
        'content' => __DIR__ . '/content',
        'site'    => __DIR__ . '/site',
        'media'   => __DIR__ . '/media',
    ]
]);

echo $kirby->render();
