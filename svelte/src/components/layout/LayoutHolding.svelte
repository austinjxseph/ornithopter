<script lang="ts">
    let {
        title = "coming soon.",
        message = "Still in progress. One day I'll stop overthinking it, ship something minimal, and pretend it was always the plan - but not today.",
        buttonlabel = "Go back Home",
        buttonhref = "/",
    }: {
        title?: string;
        message?: string;
        buttonlabel?: string;
        buttonhref?: string;
    } = $props();
</script>

<div class="section">
    <div class="container">
        <div class="inner">
            <div class="heading">
                <div class="title">
                    <h1>{title}</h1>
                </div>
                {#if message}
                    <div class="message">
                        <p>{message}</p>
                    </div>
                {/if}
            </div>
            <c-button href={buttonhref} label={buttonlabel} active="true"
            ></c-button>
        </div>
    </div>
</div>

<style>
    .section {
        height: 100dvh;
        padding-right: var(--global--margin);
        padding-left: var(--global--margin);
    }

    @media screen and (max-width: 991px) {
        .section {
            height: auto;
            min-height: 100dvh;
        }
    }

    .container {
        max-width: var(--max-width--s);
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap--md);
    }

    .heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap--sm);
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title h1 {
        font-family: var(--typeface--secondary);
        font-size: 2.5rem;
        line-height: var(--h1--line-height);
        letter-spacing: var(--h1--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        text-shadow: 4px 4px 60px black;
        font-weight: 400;
        font-style: normal;
    }

    .message {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .message p {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-l);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-secondary);
        text-wrap: balance;
    }
</style>
