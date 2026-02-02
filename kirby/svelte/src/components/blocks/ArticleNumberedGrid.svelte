<svelte:options
    customElement={{ tag: "article-numbered-grid", shadow: "none" }}
/>

<script>
    export let columns = "4";
    export let shownumbers = "true";
    export let items = "[]"; // JSON string of [{heading, description}]

    let parsedItems = [];
    let showNumbers = true;

    $: {
        try {
            parsedItems = JSON.parse(items);
        } catch (e) {
            parsedItems = [];
        }
        showNumbers = shownumbers === "true" || shownumbers === true;
    }
</script>

<section class="u-layout-vflex section">
    <div class="u-layout-vflex container-fw py-sm">
        <div class="u-layout-vflex grid-container">
            <div class="grid grid-cols-{columns}">
                {#each parsedItems as item, index}
                    <div class="u-layout-vflex cell gap-xxs">
                        {#if showNumbers}
                            <h5>({String(index + 1).padStart(2, "0")})</h5>
                        {:else if item.heading}
                            <h5>{item.heading}</h5>
                        {/if}
                        <div class="text-md">
                            {@html item.description}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .grid-container {
        /* Padding removed - .section handles global margins */
    }

    .grid {
        display: grid;
        grid-column-gap: 32px;
        grid-row-gap: 32px;
        grid-template-columns: repeat(var(--cols), 1fr);
        align-self: stretch;
        place-items: start stretch;
        direction: rtl;
    }

    .grid > :global(*) {
        direction: ltr;
    }

    .grid-cols-2 {
        --cols: 2;
    }

    .grid-cols-3 {
        --cols: 3;
    }

    .grid-cols-4 {
        --cols: 4;
    }

    @media screen and (max-width: 991px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
            direction: ltr;
        }
    }

    @media screen and (max-width: 479px) {
        .grid {
            grid-template-columns: 1fr;
            grid-column-gap: 32px;
            grid-row-gap: 32px;
            direction: ltr;
        }
    }

    .cell {
        /* Grid cell container */
    }
</style>
