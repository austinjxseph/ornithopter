<script lang="ts">
    type HeaderItem = {
        type: "b-header";
        title: string;
        description: string;
        layout: string;
    };

    let {
        images = [],
        items = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
        items?: HeaderItem[];
    } = $props();
</script>

<section class="section">
    <div class="container-xl py-xl">
        <div class="s-ab_inner">
            <!-- Left Panel: Staggered Images -->
            <div class="s-ab_col-img">
                {#each images as image, i}
                    <div class="s-ab_img-row s-ab_img-row-{i + 1}">
                        <div class="s-ab_image">
                            {#if image?.url}
                                <img
                                    src={image.url}
                                    alt={image.alt || ""}
                                    loading="lazy"
                                />
                            {/if}
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Right Panel: Content -->
            <div class="s-ab_col-body">
                {#each items as item}
                    <b-header
                        title={item.title}
                        description={item.description}
                        layout={item.layout}
                    ></b-header>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .s-ab_inner {
        width: 100%;
        gap: var(--padding--xl);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 991px) {
        .s-ab_inner {
            grid-template-columns: 1fr;
            gap: var(--gap--xxl);
        }
    }

    @media screen and (min-width: 1600px) {
        .s-ab_inner {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* Left column - Images */
    .s-ab_col-img {
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: var(--gap--md);
        max-width: 600px;
        max-height: 600px;
        min-height: 1px;
        min-width: 1px;
        align-self: stretch;
    }

    @media screen and (max-width: 991px) {
        .s-ab_col-img {
            max-width: none;
            max-height: none;
            width: 100%;
        }
    }

    @media screen and (min-width: 1600px) {
        .s-ab_col-img {
            grid-column: span 2;
        }
    }

    .s-ab_img-row {
        display: flex;
        flex: 1;
        min-height: 1px;
        min-width: 1px;
        justify-content: flex-end;
        width: 100%;
    }

    .s-ab_img-row-1 {
        padding-right: 0;
    }

    .s-ab_img-row-2 {
        padding-right: 80px;
    }

    .s-ab_img-row-3 {
        padding-right: 160px;
    }

    @media screen and (max-width: 991px) {
        .s-ab_img-row-2,
        .s-ab_img-row-3 {
            padding-right: 0;
        }
    }

    .s-ab_image {
        flex: 1;
        height: 100%;
        min-height: 1px;
        min-width: 1px;
        background-color: var(--_themes---neutrals--100);
    }

    .s-ab_image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* Right column - Content */
    .s-ab_col-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        max-width: 500px;
        min-height: 1px;
        min-width: 1px;
        gap: var(--padding--xl);
    }

    @media screen and (max-width: 991px) {
        .s-ab_col-body {
            max-width: none;
            width: 100%;
        }
    }
</style>
