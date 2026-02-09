<script lang="ts">
    type HeaderItem = {
        type: "b-header";
        title: string;
        description: string;
        layout: string;
    };

    type TextItem = {
        type: "b-text";
        columns: string;
        items: Array<{ heading?: string; content: string }>;
    };

    type AboutItem = HeaderItem | TextItem;

    let {
        images = [],
        items = [],
    }: {
        images?: Array<{ url: string; alt?: string }>;
        items?: AboutItem[];
    } = $props();
</script>

<section class="section ab">
    <div class="container-xl py-xl">
        <div class="s-ab_inner">
            <!-- Left Panel -->
            <div class="s-ab_col-img"></div>

            <!-- Right Panel: Content -->
            <div class="s-ab_col-body">
                {#each items as item, i}
                    {@const blockId = `ab-${item.type}-${i}`}
                    {#if item.type === "b-header"}
                        <b-header id={blockId}></b-header>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ title: item.title, description: item.description, layout: item.layout })}<\/script>`}
                    {:else if item.type === "b-text"}
                        <b-text id={blockId}></b-text>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ columns: item.columns, items: item.items })}<\/script>`}
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    :global(l-about) {
        display: block;
        align-self: stretch;
    }

    .ab {
        min-height: 100vh;
    }

    .s-ab_inner {
        width: 100%;
        gap: var(--gap--xxl);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 991px) {
        .s-ab_inner {
            grid-template-columns: 1fr;
            gap: var(--gap--xxl);
        }
    }

    /* Left column */
    .s-ab_col-img {
        min-height: 1px;
        min-width: 1px;
    }

    /* Right column - Content */
    .s-ab_col-body :global(b-header) {
        max-width: 800px;
    }

    .s-ab_col-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 1px;
        min-width: 1px;
    }
</style>
