<script lang="ts">
    let {
        title = "404",
        message = "",
        buttonlabel = "Go back Home",
        buttonhref = "/",
    }: {
        title?: string;
        message?: string;
        buttonlabel?: string;
        buttonhref?: string;
    } = $props();
</script>

<div class="s-404_section">
    <div class="s-404_container">
        <div class="s-404_inner">
            <div class="s-404_heading">
                <div class="s-404_title">
                    <h1>{title}</h1>
                </div>
                {#if message}
                    <div class="s-404_message">
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
    .s-404_section {
        height: 100dvh;
        padding-right: var(--global--margin);
        padding-left: var(--global--margin);
    }

    @media screen and (max-width: 991px) {
        .s-404_section {
            height: auto;
            min-height: 100dvh;
        }
    }

    .s-404_container {
        max-width: var(--max-width--s);
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    .s-404_inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap--md);
    }

    .s-404_heading {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--gap--sm);
    }

    .s-404_title {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .s-404_title h1 {
        font-family: var(--typeface--secondary);
        font-size: 4.5rem;
        line-height: var(--h1--line-height);
        letter-spacing: var(--h1--letter-spacing);
        color: var(--_themes---site--text--text-primary);
        text-shadow: 4px 4px 60px black;
        font-weight: 400;
        font-style: normal;
    }

    .s-404_message {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .s-404_message p {
        font-family: var(--typeface--primary);
        font-size: var(--paragraph--font-size-l);
        line-height: var(--paragraph--line-height-s);
        letter-spacing: var(--paragraph--letter-spacing);
        color: var(--_themes---site--text--text-secondary);
        text-wrap: balance;
    }
</style>
