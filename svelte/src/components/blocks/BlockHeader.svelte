<script lang="ts">
    let { title = "", description = "", layout = "column" } = $props();

    // Strip wrapping <p> tags from Kirbytext output
    const strippedTitle = $derived(title.replace(/^<p>(.*)<\/p>$/s, "$1"));
    const strippedDescription = $derived(
        description.replace(/^<p>(.*)<\/p>$/s, "$1"),
    );
</script>

<header class="header" class:is-row={layout === "row"}>
    <div class="heading">
        <h2>
            {@html strippedTitle}
        </h2>
    </div>
    {#if description}
        <div class="text">
            <div class="text-md">
                {@html strippedDescription}
            </div>
        </div>
    {/if}
</header>

<style>
    /* Host element — ensure custom element stretches */
    :global(b-header) {
        display: block;
        align-self: stretch;
    }

    /* Column layout (default) */
    .header {
        display: flex;
        flex-direction: column;
        gap: var(--gap--md);
        align-self: stretch;
        padding-left: var(--global--margin);
        padding-right: var(--global--margin);
        padding-top: var(--padding--xl);
        padding-bottom: var(--padding--md);
    }

    /* Row layout */
    .header.is-row {
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
        .header.is-row {
            display: flex;
            flex-direction: column;
            gap: var(--gap--xl);
            padding-top: var(--padding--xl);
            padding-bottom: var(--padding--sm);
        }
    }

    .heading {
        max-width: 480px;
    }

    .is-row .heading {
        grid-column: span 2;
        max-width: 36rem;
    }

    @media screen and (max-width: 991px) {
        .is-row .heading {
            max-width: none;
        }
    }

    /* Heading typography — h2 for both variants */
    h2 {
        font-family: var(--typeface--primary);
        font-size: var(--h2--font-size);
        line-height: var(--h2--line-height);
        letter-spacing: var(--h2--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        font-weight: 400;
        margin: 0;
    }

    h2 :global(em) {
        font-family: var(--typeface--secondary);
        font-style: normal;
    }

    .text {
        display: flex;
        flex-direction: column;
        gap: var(--gap--md);
    }

    .text :global(p) {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-s);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-primary);
    }

    .text :global(a) {
        color: var(--_themes---site--text--text-primary);
        text-decoration: underline;
    }
</style>
