<svelte:options customElement={{ tag: "ar-grid", shadow: "none" }} />

<script>
    export let shownumbers = "true";
    export let items = "[]";

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

<section class="section">
    <div class="container-fw py-sm">
        <div class="b-gr_grid">
            {#each parsedItems as item, index}
                <div class="b-gr_cell">
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
</section>

<style>
    .b-gr_grid {
        display: grid;
        gap: 32px;
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        direction: rtl;
    }

    .b-gr_grid > * {
        direction: ltr;
    }

    @media screen and (max-width: 991px) {
        .b-gr_grid {
            grid-template-columns: repeat(2, 1fr);
            direction: ltr;
        }
    }

    @media screen and (max-width: 479px) {
        .b-gr_grid {
            grid-template-columns: 1fr;
        }
    }

    .b-gr_cell {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
    }
</style>
