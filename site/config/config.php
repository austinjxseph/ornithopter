<?php

// Detect base URL from reverse proxy headers (Railway, etc.)
$url = null;
if (!empty($_SERVER["HTTP_X_FORWARDED_HOST"])) {
    $proto = $_SERVER["HTTP_X_FORWARDED_PROTO"] ?? "https";
    $host = $_SERVER["HTTP_X_FORWARDED_HOST"];
    $url = $proto . "://" . $host;
}

return [
    "debug" => true,
    "yaml.handler" => "symfony",
    "url" => $url ?? null,
    "thumbs" => [
        "driver" => "gd",
    ],
];
