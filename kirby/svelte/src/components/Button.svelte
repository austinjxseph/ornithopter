<svelte:options customElement={{ tag: "animated-button", shadow: "open" }} />

<script>
    export let href = "#";
    export let label = "Button";
    export let active = false;
</script>

<div class="button {active ? 'active' : ''}">
    <div class="motion">
        <div class="glow"></div>
        <div class="mask">
            <div class="cone"></div>
        </div>
    </div>
    <div class="orb">
        <div class="border"></div>
    </div>
    <a {href} class="wrapper u-inline-block">
        <div class="label">
            {label}
        </div>
    </a>
</div>

<style>
    @import url('/assets/css/variables.css');
    @import url('/assets/css/styles.css');
    .button {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        background-color: var(--_themes---site--bg--bg-primary);
        color: var(--_themes---site--text--text-primary);
        text-align: center;
        border: 1px solid #fff3;
        border-radius: 62.5rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        transition: all 1s;
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .button.cc-text {
        color: #3898ec;
        background-color: #0000;
        border: 2px solid #0000;
    }

    .button.cc-sm {
        padding: 0.7rem 1.25rem 0.5rem;
    }

    .button.cc-lg {
        padding: 1.25rem 2rem 1rem;
    }

    .button.cc-sec {
        color: #3898ec;
        -webkit-text-stroke-color: #3898ec;
        background-color: #0000;
        border: 2px solid #3898ec;
    }

    .button.cc-icon {
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        display: flex;
    }

    .button.active:hover {
        background-image: radial-gradient(
            circle closest-corner at 50% 50%,
            var(--_themes---site--bg--bg-primary),
            #0205084d 70%,
            #bcbcbd33 90%,
            #fff6
        );
        border-color: #fff9;
    }

    .active .motion,
    .active .orb {
        opacity: 1;
    }

    .motion {
        opacity: 0;
        width: 100%;
        transition: opacity 1s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .motion * {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .glow {
        opacity: 0.12;
        filter: blur(8px);
        animation: borderTurn 2.5s infinite linear;
        background-image: conic-gradient(
            from 0 at 50% 50%,
            rgba(255, 255, 255, 0.5) 0deg,
            rgba(255, 255, 255, 0) 60deg,
            rgba(255, 255, 255, 0) 310deg,
            rgba(255, 255, 255, 0.5) 360deg
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .mask {
        opacity: 1;
        -webkit-mask: url("data:image/svg+xml,url('data:image/svg+xml,%253Csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%253E%253Crect width='28' height='24' fill='black'/%253E%253C/svg%253E%250A');");
        mask: url("data:image/svg+xml,url('data:image/svg+xml,%253Csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%253E%253Crect width='28' height='24' fill='black'/%253E%253C/svg%253E%250A');");
        mask-repeat: repeat;
        -webkit-mask-size: auto;
        mask-size: auto;
    }

    .cone {
        opacity: 1;
        animation: borderTurn 2.5s infinite linear;
        background-image: conic-gradient(
            from 0 at 50% 50%,
            rgba(255, 255, 255, 0.5) 0deg,
            rgba(255, 255, 255, 0) 60deg,
            rgba(255, 255, 255, 0) 310deg,
            rgba(255, 255, 255, 0.5) 360deg
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .orb {
        opacity: 0;
        border-radius: 62.5rem;
        width: 100%;
        padding: 0.06rem;
        line-height: 100%;
        transition: opacity 1s;
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        inset: 0;
        -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
    }

    .border {
        opacity: 1;
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: borderTurnWithTranslate 2.5s infinite linear;
        background-image: conic-gradient(
            from 0 at 50% 50%,
            rgba(255, 255, 255, 0.5) 0deg,
            rgba(255, 255, 255, 0) 60deg,
            rgba(255, 255, 255, 0) 310deg,
            rgba(255, 255, 255, 0.5) 360deg
        );
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .motion:before,
    .border:before {
        content: "";
        float: left;
        padding-top: 100%;
    }

    .motion:after,
    .border:after {
        clear: both;
        content: "";
        display: block;
    }

    .wrapper {
        z-index: 1;
        color: #fff;
        letter-spacing: -0.01em;
        border-radius: 62.5rem;
        padding: 0.5rem 1.5rem;
        font-size: 0.88rem;
        line-height: 1.42;
        text-decoration: none;
        position: relative;
    }

    .label {
        z-index: 2;
        color: #0000;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(#fff6, #fff);
        -webkit-background-clip: text;
        background-clip: text;
        font-weight: 500;
        position: relative;
    }

    @media screen and (max-width: 991px) {
        .button {
            color: var(--_themes---site--text--text-primary);
            font-size: var(--paragraph--font-size-m);
        }
    }

    @keyframes borderTurn {
        0% {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }

    @keyframes borderTurnWithTranslate {
        0% {
            transform: translate(-50%, -50%) rotate(0);
        }

        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
</style>
