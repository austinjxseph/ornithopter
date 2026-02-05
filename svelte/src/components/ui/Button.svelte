<script lang="ts">
    let { href = "#", label = "Button", active = false } = $props();
</script>

<div class="c-button {active ? 'c-button_active' : ''}">
    <div class="c-button_motion">
        <div class="c-button_glow"></div>
        <div class="c-button_mask">
            <div class="c-button_cone"></div>
        </div>
    </div>
    <div class="c-button_orb">
        <div class="c-button_border"></div>
    </div>
    <a {href} class="c-button_wrapper">
        <div class="c-button_label">
            {label}
        </div>
    </a>
</div>

<style>
    .c-button {
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

    .c-button.c-button_active:hover {
        background-image: radial-gradient(
            circle closest-corner at 50% 50%,
            var(--_themes---site--bg--bg-primary),
            #0205084d 70%,
            #bcbcbd33 90%,
            #fff6
        );
        border-color: #fff9;
    }

    .c-button_active .c-button_motion,
    .c-button_active .c-button_orb {
        opacity: 1;
    }

    .c-button_motion {
        opacity: 0;
        width: 100%;
        transition: opacity 1s;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }

    .c-button_motion * {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .c-button_glow {
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

    .c-button_mask {
        opacity: 1;
        -webkit-mask: url("data:image/svg+xml,url('data:image/svg+xml,%253Csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%253E%253Crect width='28' height='24' fill='black'/%253E%253C/svg%253E%250A');");
        mask: url("data:image/svg+xml,url('data:image/svg+xml,%253Csvg width='28' height='24' viewBox='0 0 28 24' fill='none' xmlns='http://www.w3.org/2000/svg'%253E%253Crect width='28' height='24' fill='black'/%253E%253C/svg%253E%250A');");
        mask-repeat: repeat;
        -webkit-mask-size: auto;
        mask-size: auto;
    }

    .c-button_cone {
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

    .c-button_orb {
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

    .c-button_border {
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

    .c-button_motion:before,
    .c-button_border:before {
        content: "";
        float: left;
        padding-top: 100%;
    }

    .c-button_motion:after,
    .c-button_border:after {
        clear: both;
        content: "";
        display: block;
    }

    .c-button_wrapper {
        z-index: 1;
        color: #fff;
        letter-spacing: -0.01em;
        border-radius: 62.5rem;
        padding: 0.5rem 1.5rem;
        font-size: 0.88rem;
        line-height: 1.42;
        text-decoration: none;
        position: relative;
        display: inline-block;
    }

    .c-button_label {
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
        .c-button {
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
