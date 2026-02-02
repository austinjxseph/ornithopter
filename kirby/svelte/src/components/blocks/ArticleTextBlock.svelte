<svelte:options customElement={{ tag: "article-text-block", shadow: "none" }} />

<script>
    export let columns = "2";
    export let items = "[]"; // JSON string of [{content}]

    let parsedItems = [];

    $: {
        try {
            parsedItems = JSON.parse(items);
        } catch (e) {
            parsedItems = [];
        }
    }
</script>

<section class="u-layout-vflex section">
    <div class="u-layout-vflex container-fw py-sm">
        <div class="u-layout-vflex text gap-lg">
            <div class="grid grid-cols-{columns}">
                {#each parsedItems as item}
                    <div class="u-layout-vflex col gap-xxs">
                        <div class="text-md">
                            {@html item.content}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style>
    .text {
        /* Padding removed - .section handles global margins */
    }

    .grid {
        display: grid;
        gap: var(--gap--md);
        grid-template-columns: repeat(var(--cols), 1fr);
        align-self: stretch;
        place-items: start stretch;
        direction: rtl;
    }

    .grid > * {
        direction: ltr;
    }

    .grid-cols-1 {
        --cols: 1;
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
        }
    }

    .col {
        /* Column container */
    }
</style>
