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

    type ImageItem = {
        type: "b-img";
        spacing: string;
        images: Array<{ url: string; alt?: string; caption?: string }>;
    };

    type GridItem = {
        type: "b-grid";
        columns: string;
        items: Array<{ heading?: string; description: string }>;
    };

    type TextLayoutItem = HeaderItem | TextItem | ImageItem | GridItem;

    let { items = [] }: { items?: TextLayoutItem[] } = $props();
</script>

<section class="section tx">
    <div class="container-xl py-lg">
        <div class="l-inner">
            <div class="col-spacer" aria-hidden="true"></div>

            <div class="col-body">
                {#each items as item, i}
                    {@const blockId = `tx-${item.type}-${i}`}
                    {#if item.type === "b-header"}
                        <b-header id={blockId}></b-header>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ title: item.title, description: item.description, layout: item.layout })}<\/script>`}
                    {:else if item.type === "b-text"}
                        <b-text id={blockId}></b-text>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ columns: item.columns, items: item.items })}<\/script>`}
                    {:else if item.type === "b-img"}
                        <b-img id={blockId}></b-img>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ images: item.images, spacing: item.spacing })}<\/script>`}
                    {:else if item.type === "b-grid"}
                        <b-grid id={blockId}></b-grid>
                        {@html `<script type="application/json" data-for="${blockId}">${JSON.stringify({ columns: item.columns, items: item.items })}<\/script>`}
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    :global(l-text) {
        display: block;
        align-self: stretch;
    }

    .tx {
        min-height: 100vh;
    }

    @media screen and (max-width: 991px) {
        .tx {
            padding-left: 0px;
            padding-right: 0px;
        }
    }

    .l-inner {
        width: 100%;
        gap: var(--gap--xxl);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1600px) {
        .l-inner {
            grid-template-columns: repeat(3, 1fr);
        }

        .col-spacer {
            grid-column: span 2;
        }

        .col-body {
            grid-column: span 1;
        }
    }

    @media screen and (max-width: 991px) {
        .l-inner {
            grid-template-columns: 1fr;
            gap: var(--gap--xxl);
        }
    }

    .col-spacer {
        min-height: 1px;
        min-width: 1px;
        position: sticky;
        top: var(--padding--lg, 2rem);
        height: fit-content;
    }

    @media screen and (max-width: 991px) {
        .col-spacer {
            position: relative;
            top: auto;
            aspect-ratio: auto;
            min-height: 0;
        }
    }

    .col-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 1px;
        min-width: 1px;
    }
</style>
