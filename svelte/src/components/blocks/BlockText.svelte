<script lang="ts">
    let {
        items = [],
    }: {
        items?: Array<{ content: string }>;
    } = $props();
</script>

<section class="section">
    <div class="grid">
        {#each items as item}
            <div class="col">
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
        grid-template-columns: repeat(4, 1fr);
        width: 100%;
        direction: rtl;
    }

    .grid > * {
        direction: ltr;
    }

    @media screen and (max-width: 991px) {
        .grid {
            display: flex;
            flex-direction: column;
        }
    }

    .col {
        display: flex;
        flex-direction: column;
        gap: var(--gap--xxs);
    }
</style>
