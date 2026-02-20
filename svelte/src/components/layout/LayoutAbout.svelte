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
    <div class="container-xl py-lg">
        <div class="l-inner">
            <div class="col-img">
                {#if images.length}
                    {@const helixId = `ab-helix-${Math.random().toString(36).slice(2, 8)}`}
                    <c-helix id={helixId}></c-helix>
                    {@html `<script type="application/json" data-for="${helixId}">${JSON.stringify({ images })}<\/script>`}
                {/if}
            </div>

            <div class="col-spacer" aria-hidden="true"></div>

            <div class="col-body">
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

    .l-inner {
        width: 100%;
        gap: var(--gap--xxl);
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    /* Left column - sticky star wheel */
    .col-img {
        min-height: 1px;
        min-width: 1px;
        position: sticky;
        top: var(--padding--lg, 2rem);
        height: fit-content;
        aspect-ratio: 1;
    }

    .col-spacer {
        display: none;
        min-height: 1px;
        min-width: 1px;
    }

    .col-body :global(.text-md p strong) {
        color: var(--_themes---site--text--text-secondary);
    }

    .col-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 1px;
        min-width: 1px;
    }

    @media screen and (max-width: 991px) {
        .ab {
            padding-left: 0px;
            padding-right: 0px;
        }

        .l-inner {
            grid-template-columns: 1fr;
            gap: var(--gap--xxl);
        }

        .col-img {
            position: relative;
            top: auto;
            aspect-ratio: 4 / 3;
        }
    }
</style>
