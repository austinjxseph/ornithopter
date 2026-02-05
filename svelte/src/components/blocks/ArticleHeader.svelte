<script lang="ts">
    let { title = "", description = "" } = $props();
</script>

<header class="b-ah_header">
    <div class="b-ah_heading">
        <h2>{title}</h2>
    </div>
    <div class="b-ah_text">
        <div class="text-md">
            {@html description}
        </div>
    </div>
</header>

<style>
    .b-ah_header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: var(--gap--md);
        padding-left: var(--global--margin);
        padding-right: var(--global--margin);
        padding-top: var(--padding--xl);
        padding-bottom: var(--padding--md);
        align-self: stretch;
    }

    @media screen and (max-width: 991px) {
        .b-ah_header {
            display: flex;
            flex-direction: column;
            gap: var(--gap--xl);
            padding-top: var(--padding--xl);
            padding-bottom: var(--padding--sm);
        }
    }

    .b-ah_heading {
        grid-column: span 2;
        max-width: 36rem;
    }

    @media screen and (max-width: 991px) {
        .b-ah_heading {
            max-width: none;
        }
    }

    .b-ah_text {
        display: flex;
        flex-direction: column;
        gap: var(--gap--lg);
    }
</style>
