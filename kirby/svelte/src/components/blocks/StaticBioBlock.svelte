<script lang="ts">
    type BioItem = {
        type: string;
        heading?: string;
        subtitle?: string;
        index?: string;
        description?: string;
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
        items?: BioItem[];
    } = $props();

    let groupedItems = $derived(groupItems(items));

    function groupItems(items: BioItem[]) {
        const groups: {
            heading: string;
            description: string;
            rows: BioItem[];
        }[] = [];
        let currentGroup: {
            heading: string;
            description: string;
            rows: BioItem[];
        } | null = null;

        for (const item of items) {
            if (item.type === "header") {
                if (currentGroup) {
                    groups.push(currentGroup);
                }
                currentGroup = {
                    heading: item.heading || "",
                    description: item.description || "",
                    rows: [],
                };
            } else if (currentGroup) {
                currentGroup.rows.push(item);
            }
        }

        if (currentGroup) {
            groups.push(currentGroup);
        }

        return groups;
    }
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
                {#each groupedItems as group}
                    <div class="s-ab_group">
                        <h3 class="s-ab_group-heading">
                            {group.heading}
                        </h3>
                        {#if group.description}
                            <div class="s-ab_group-description">
                                {@html group.description}
                            </div>
                        {/if}
                        {#each group.rows as row}
                            <div class="s-ab_item">
                                <div class="s-ab_item-header">
                                    {#if row.index}
                                        <div class="s-ab_item-row-between">
                                            <p class="s-ab_item-heading">
                                                {row.heading}
                                            </p>
                                            <p class="s-ab_item-index">
                                                {row.index}
                                            </p>
                                        </div>
                                    {:else if row.heading}
                                        <p class="s-ab_item-heading">
                                            {row.heading}
                                        </p>
                                    {/if}
                                    {#if row.subtitle}
                                        <p class="s-ab_item-subtitle">
                                            {row.subtitle}
                                        </p>
                                    {/if}
                                </div>
                                {#if row.description}
                                    <div class="s-ab_item-row">
                                        <div class="s-ab_item-description">
                                            {@html row.description}
                                        </div>
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
        gap: var(--gap--xxl);
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

    .s-ab_group {
        display: flex;
        flex-direction: column;
        gap: var(--gap--lg);
        width: 100%;
    }

    .s-ab_group-heading {
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

    .s-ab_group-description :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-primary);
    }

    .s-ab_item {
        display: flex;
        flex-direction: column;
        gap: var(--gap--md);
        width: 100%;
    }

    .s-ab_item-header {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
        width: 100%;
    }

    .s-ab_item-heading {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: 1.2;
        color: var(--_themes---site--text--text-primary);
    }

    .s-ab_item-subtitle {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-secondary);
    }

    .s-ab_item-row {
        display: flex;
        width: 100%;
    }

    .s-ab_item-row-between {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }

    .s-ab_item-description {
        flex: 1;
    }

    .s-ab_item-description :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-primary);
    }
</style>
