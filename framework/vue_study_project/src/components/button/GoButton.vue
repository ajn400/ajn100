<template>
    <button class="button">
            <svg aria-hidden="true" class="progress" width="70" height="70" viewBox="0 0 70 70">
                <path class="progress__circle" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"></path>
                <path class="progress__path" d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z" pathLength="1"></path>
            </svg>
            <span>Go</span>
    </button>
</template>

<script>
    export default {
        name: "GoLoadingButton"
    }
</script>

<style scoped>
    .button {
        background: none !important;
        padding: 0;
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        width: 120px;
        height: 120px;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .progress {
        position: absolute;
        width: 80px;
        height: 80px;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        transition: transform 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    }

    .button:hover .progress {
        transform: scale3d(1.2, 1.2, 1);
    }

    .progress__circle,
    .progress__path {
        fill: none;
        stroke: #f0f0f0;
        stroke-width: 1px;
    }

    .button:focus-visible .progress__circle {
        fill: rgba(252,196,63,0.4);
    }

    .progress__path {
        stroke: #a6a6a6;
        stroke-dasharray: 1;
        stroke-dashoffset: 1;
        transition: stroke-dashoffset 0.4s cubic-bezier(0.7, 0, 0.3, 1);
    }

    .button:hover .progress__path {
        stroke-dashoffset: 0;
    }


    @media screen and (min-width: 53em) {
        .frame {
            text-align: left;
            z-index: 100;
            display: grid;
            align-content: space-between;
            width: 100%;
            max-width: none;
            padding: 3rem 3.5rem;
            pointer-events: none;
            grid-template-columns: 50% 50%;
            grid-template-rows: auto auto auto;
            grid-template-areas: 'title links'
            '... ...'
            'author ...';
        }

        .frame__title-wrap {
            grid-area: title;
        }

        .frame__title {
            margin: 0;
        }

        .frame__tagline {
            position: relative;
            margin-left: 0;
        }

        .frame__links {
            grid-area: links;
            padding: 0;
            justify-self: end;
            align-self: start;
            justify-content: start;
        }

        .frame__author {
            grid-area: author;
        }

        .frame a {
            pointer-events: auto;
        }
    }
</style>
