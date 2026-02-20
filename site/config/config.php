<?php
use Kirby\Cms\App;

// Detect base URL from reverse proxy headers (Railway, etc.)
$url = null;
if (!empty($_SERVER["HTTP_X_FORWARDED_HOST"])) {
    $proto = $_SERVER["HTTP_X_FORWARDED_PROTO"] ?? "https";
    $host = $_SERVER["HTTP_X_FORWARDED_HOST"];
    $url = $proto . "://" . $host;
}

$thumbsDriver = extension_loaded("imagick") ? "imagick" : "gd";

return [
    "debug" => true,
    "yaml.handler" => "symfony",
    "url" => $url ?? null,
    "panel.menu" => [
        "site" => [
            "current" => function () {
                $path = ltrim(
                    App::instance()->request()->path()->toString(),
                    "/",
                );
                return str_starts_with($path, "panel/site");
            },
        ],
        "users",
        "system",
        "-",
        "projects" => [
            "label" => "Projects",
            "icon" => "grid-top",
            "link" => "pages/projects",
            "current" => function () {
                $path = ltrim(
                    App::instance()->request()->path()->toString(),
                    "/",
                );
                return str_starts_with($path, "panel/pages/projects");
            },
        ],
        "thoughts" => [
            "label" => "Thoughts",
            "icon" => "text",
            "link" => "pages/thoughts",
            "current" => function () {
                $path = ltrim(
                    App::instance()->request()->path()->toString(),
                    "/",
                );
                return str_starts_with($path, "panel/pages/thoughts");
            },
        ],
    ],
    "thumbs" => [
        "driver" => $thumbsDriver,
    ],
];
