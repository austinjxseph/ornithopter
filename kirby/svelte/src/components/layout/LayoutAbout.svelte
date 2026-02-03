<script lang="ts">
    type BioRow = {
        heading?: string;
        subtitle?: string;
        index?: string;
        description?: string;
    };

    type BioSection = {
        heading: string;
        rows: BioRow[];
    };

    let {
        heading = "",
        content = "",
        images = [],
        items = [],
    }: {
        heading?: string;
        content?: string;
        images?: Array<{ url: string; alt?: string }>;
        items?: BioSection[];
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
                <!-- Bio Heading + Content -->
                <div class="s-ab_page-header">
                    {#if heading}
                        <div class="s-ab_heading">
                            {@html heading}
                        </div>
                    {/if}

                    {#if content}
                        <div class="s-ab_content">
                            {@html content}
                        </div>
                    {/if}
                </div>

                <!-- Dynamic Sections -->
                {#each items as section}
                    <div class="s-ab_section">
                        {#if section.heading}
                            <h3 class="s-ab_section-heading">
                                {section.heading}
                            </h3>
                        {/if}
                        {#each section.rows as row}
                            <div class="s-ab_row">
                                {#if row.heading || row.index}
                                    <div class="s-ab_row-header">
                                        {#if row.heading}
                                            <p class="s-ab_row-title">
                                                {row.heading}
                                            </p>
                                        {/if}
                                        {#if row.index}
                                            <p class="s-ab_row-index">
                                                {row.index}
                                            </p>
                                        {/if}
                                    </div>
                                {/if}
                                {#if row.subtitle}
                                    <p class="s-ab_row-subtitle">
                                        {row.subtitle}
                                    </p>
                                {/if}
                                {#if row.description}
                                    <div class="s-ab_row-description">
                                        {@html row.description}
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
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

    .s-ab_page-header {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xl);
        width: 100%;
    }

    .s-ab_heading {
        max-width: 480px;
    }

    .s-ab_heading :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--h3--font-size);
        line-height: var(--h3--line-height);
        letter-spacing: var(--h3--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        text-shadow: 4px 4px 60px black;
    }

    .s-ab_heading :global(em) {
        font-family: var(--typeface--secondary);
        font-style: normal;
    }

    .s-ab_content {
        display: flex;
        flex-direction: column;
        gap: var(--gap--md);
    }

    .s-ab_content :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-primary);
    }

    .s-ab_section {
        display: flex;
        flex-direction: column;
        gap: var(--gap--lg);
        width: 100%;
    }

    .s-ab_section-heading {
        font-family: var(--typeface--secondary);
        font-size: var(--h3--font-size);
        line-height: var(--h3--line-height);
        letter-spacing: var(--h3--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        max-width: 480px;
        text-shadow: 4px 4px 60px black;
        font-weight: 400;
        font-style: normal;
    }

    .s-ab_row {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xs);
        width: 100%;
    }

    .s-ab_row-header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: var(--gap--md);
    }

    .s-ab_row-title {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: 1.2;
        color: var(--_themes---site--text--text-primary);
    }

    .s-ab_row-index {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: 1.2;
        color: var(--_themes---site--text--text-secondary);
        white-space: nowrap;
    }

    .s-ab_row-subtitle {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-secondary);
    }

    .s-ab_row-description {
        flex: 1;
    }

    .s-ab_row-description :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-primary);
    }
</style>
