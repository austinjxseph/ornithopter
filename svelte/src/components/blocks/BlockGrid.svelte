<script lang="ts">
    let {
        columns = "4",
        items = [],
    }: {
        columns?: string;
        items?: Array<{ heading?: string; description: string }>;
    } = $props();

    const offset = $derived(Math.max(1, Number(columns) - items.length + 1));
</script>

<section class="section">
    <div class="container-fw py-sm">
        <div class="grid col-{columns}">
            {#each items as item, index}
                <div
                    class="cell"
                    style={index === 0 ? `grid-column-start: ${offset}` : ""}
                >
                    {#if item.heading}
                        <h5>{item.heading}</h5>
                    {:else}
                        <h5>({String(index + 1).padStart(2, "0")})</h5>
                    {/if}
                    <div class="text-md">
                        {@html item.description}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .grid {
        display: grid;
        gap: 32px;
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

    .cell {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
    }
</style>
