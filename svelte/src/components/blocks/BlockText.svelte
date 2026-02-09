<script lang="ts">
    let {
        columns = "4",
        items = [],
    }: {
        columns?: string;
        items?: Array<{ heading?: string; content: string }>;
    } = $props();

    const offset = $derived(Math.max(1, Number(columns) - items.length + 1));
</script>

<section class="section">
    <div class="grid col-{columns}">
        {#each items as item, index}
            <div
                class="col"
                style={index === 0 ? `grid-column-start: ${offset}` : ""}
            >
                {#if item.heading}
                    <p class="headling">{item.heading}</p>
                {/if}
                <div class="text-md">
                    {@html item.content}
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .section {
        padding: var(--padding--sm) var(--global--margin);
    }

    .grid {
        display: grid;
        gap: var(--gap--md);
        width: 100%;
    }

    .grid.col-1 {
        grid-template-columns: 1fr;
    }
    .grid.col-2 {
        grid-template-columns: repeat(2, 1fr);
    }
    .grid.col-3 {
        grid-template-columns: repeat(3, 1fr);
    }
    .grid.col-4 {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 991px) {
        .grid {
            grid-template-columns: repeat(2, 1fr) !important;
        }
    }

    @media screen and (max-width: 767px) {
        .grid {
            grid-template-columns: 1fr !important;
        }
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
    }

    .headling {
        font-size: var(--paragraph--font-size-m);
        line-height: var(--paragraph--line-height-m);
        color: var(--_themes---site--text--text-secondary);
        margin: 0;
    }
</style>
