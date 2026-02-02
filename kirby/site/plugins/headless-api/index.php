<?php

/**
 * Headless API Plugin
 *
 * Provides custom API routes for the SvelteKit frontend.
 * All responses are JSON formatted.
 */

Kirby::plugin('custom/headless-api', [
    'api' => [
        'routes' => [
            /**
             * GET /api/home
             * Returns homepage content
             */
            [
                'pattern' => 'home',
                'method' => 'GET',
                'action' => function () {
                    $home = page('home');

                    if (!$home) {
                        return [
                            'status' => 'error',
                            'message' => 'Home page not found',
                            'code' => 404
                        ];
                    }

                    return [
                        'status' => 'ok',
                        'data' => [
                            'hero_eyebrow' => $home->hero_eyebrow()->value(),
                            'hero_title' => $home->hero_title()->value(),
                            'hero_button_label' => $home->hero_button_label()->value(),
                            'hero_button_link' => $home->hero_button_link()->toUrl(),
                        ]
                    ];
                }
            ],

            /**
             * GET /api/projects
             * Returns all published projects
             */
            [
                'pattern' => 'projects',
                'method' => 'GET',
                'action' => function () {
                    $projectsPage = page('projects');

                    if (!$projectsPage) {
                        return [
                            'status' => 'ok',
                            'data' => []
                        ];
                    }

                    $projects = $projectsPage
                        ->children()
                        ->listed()
                        ->sortBy('sort', 'asc');

                    return [
                        'status' => 'ok',
                        'data' => $projects->map(function ($project) {
                            return formatProject($project);
                        })->values()
                    ];
                }
            ],

            /**
             * GET /api/projects/:uid
             * Returns a single project by slug
             */
            [
                'pattern' => 'projects/(:any)',
                'method' => 'GET',
                'action' => function (string $uid) {
                    $project = page('projects/' . $uid);

                    if (!$project || $project->isDraft()) {
                        return [
                            'status' => 'error',
                            'message' => 'Project not found',
                            'code' => 404
                        ];
                    }

                    return [
                        'status' => 'ok',
                        'data' => formatProject($project, true)
                    ];
                }
            ],

            /**
             * GET /api/pages/:uid
             * Returns a generic page by slug
             */
            [
                'pattern' => 'pages/(:any)',
                'method' => 'GET',
                'action' => function (string $uid) {
                    $page = page($uid);

                    if (!$page) {
                        return [
                            'status' => 'error',
                            'message' => 'Page not found',
                            'code' => 404
                        ];
                    }

                    return [
                        'status' => 'ok',
                        'data' => [
                            'uid' => $page->slug(),
                            'title' => $page->title()->value(),
                            'blocks' => formatBlocks($page->blocks()),
                            'meta' => [
                                'title' => $page->meta_title()->or($page->title())->value(),
                                'description' => $page->meta_description()->value(),
                                'image' => $page->meta_image()->toFile()?->url()
                            ]
                        ]
                    ];
                }
            ],

            /**
             * GET /api/site
             * Returns global site settings
             */
            [
                'pattern' => 'site',
                'method' => 'GET',
                'action' => function () {
                    $site = site();

                    return [
                        'status' => 'ok',
                        'data' => [
                            'title' => $site->title()->value(),
                            'description' => $site->description()->value(),
                            'social' => [
                                'email' => $site->email()->value(),
                                'linkedin' => $site->linkedin()->value(),
                                'github' => $site->github()->value(),
                                'bluesky' => $site->bluesky()->value(),
                                'readcv' => $site->readcv()->value(),
                            ]
                        ]
                    ];
                }
            ]
        ]
    ]
]);

/**
 * Format a project for API response
 */
function formatProject($project, bool $includeContent = false): array {
    $data = [
        'uid' => $project->slug(),
        'name' => $project->name()->value(),
        'title' => $project->project_title()->value(),
        'description' => $project->description()->value(),
        'tags' => $project->tags()->split(),
        'showcase' => $project->showcase()->toBool(),
        'index' => $project->sort()->toInt(),
        'published' => $project->published()->value(),
        'thumbnail_base' => formatImage($project->thumbnail_base()->toFile()),
        'thumbnail_overlay' => formatImage($project->thumbnail_overlay()->toFile()),
    ];

    if ($includeContent) {
        $data['metadata'] = $project->project_metadata()->toStructure()->map(function ($item) {
            return [
                'label' => $item->label()->value(),
                'content' => $item->content()->value(),
            ];
        })->values();

        $data['blocks'] = formatBlocks($project->blocks());

        $data['meta'] = [
            'title' => $project->meta_title()->or($project->project_title())->value(),
            'description' => $project->meta_description()->value(),
            'image' => $project->meta_image()->toFile()?->url()
        ];
    }

    return $data;
}

/**
 * Format an image file for API response
 */
function formatImage($file): ?array {
    if (!$file) {
        return null;
    }

    return [
        'url' => $file->url(),
        'alt' => $file->alt()->value(),
        'width' => $file->width(),
        'height' => $file->height(),
    ];
}

/**
 * Format blocks field for API response
 */
function formatBlocks($blocksField): array {
    $blocks = $blocksField->toBlocks();

    return $blocks->map(function ($block) {
        return formatBlock($block);
    })->values();
}

/**
 * Format a single block for API response
 */
function formatBlock($block): array {
    $type = $block->type();
    $content = [];

    switch ($type) {
        case 'article-header':
            $content = [
                'title' => $block->title()->value(),
                'description' => $block->description()->value(),
            ];
            break;

        case 'article-image-block':
            $content = [
                'columns' => $block->columns()->value(),
                'images' => $block->images()->toStructure()->map(function ($item) {
                    return [
                        'image' => formatImage($item->image()->toFile()),
                        'caption' => $item->caption()->value(),
                    ];
                })->values(),
            ];
            break;

        case 'article-text-block':
            $content = [
                'columns' => $block->columns()->value(),
                'items' => $block->items()->toStructure()->map(function ($item) {
                    return [
                        'content' => $item->content()->value(),
                    ];
                })->values(),
            ];
            break;

        case 'article-numbered-grid':
            $content = [
                'columns' => $block->columns()->value(),
                'show_numbers' => $block->show_numbers()->toBool(),
                'items' => $block->items()->toStructure()->map(function ($item) {
                    return [
                        'heading' => $item->heading()->value(),
                        'description' => $item->description()->value(),
                    ];
                })->values(),
            ];
            break;

        case 'article-full-bleed':
            $content = [
                'image' => formatImage($block->image()->toFile()),
                'caption' => $block->caption()->value(),
            ];
            break;

        case 'static-bio-block':
            $content = [
                'heading' => $block->heading()->value(),
                'content' => $block->content()->value(),
                'images' => $block->images()->toFiles()->map(function ($file) {
                    return formatImage($file);
                })->values(),
                'items' => $block->items()->toStructure()->map(function ($item) {
                    return [
                        'type' => $item->type()->value(),
                        'heading' => $item->heading()->value(),
                        'subtitle' => $item->subtitle()->value(),
                        'index' => $item->index()->value(),
                        'description' => $item->description()->value(),
                    ];
                })->values(),
            ];
            break;

        default:
            // Fallback: return raw block content
            $content = $block->toArray();
    }

    return [
        'type' => $type,
        'content' => $content,
    ];
}
