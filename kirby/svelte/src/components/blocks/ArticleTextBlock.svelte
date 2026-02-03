<svelte:options customElement={{ tag: "ar-text", shadow: "none" }} />

<script>
    export let items = "[]";

    let parsedItems = [];

    $: {
        try {
            parsedItems = JSON.parse(items);
        } catch (e) {
            parsedItems = [];
        }
    }
</script>

<section class="b-tb_section">
    <div class="b-tb_grid">
        {#each parsedItems as item}
            <div class="b-tb_col">
                <div class="text-md">
                    {@html item.content}
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .b-tb_section {
        padding: var(--padding--sm) var(--global--margin);
    }

    .b-tb_grid {
        display: grid;
        gap: var(--gap--md);
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        direction: rtl;
    }

    .b-tb_grid > * {
        direction: ltr;
    }

    @media screen and (max-width: 991px) {
        .b-tb_grid {
            display: flex;
            flex-direction: column;
        }
    }

    .b-tb_col {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
    }
</style>
