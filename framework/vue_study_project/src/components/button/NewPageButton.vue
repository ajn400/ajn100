<template>
    <button class="button">
        <span>
           <span>
               New Page
           </span>
        </span>
    </button>
</template>

<script>
    export default {
        name: "NewPageButton"
    }
</script>

<style scoped>
    button {
        font-family: input-mono-narrow, monospace;
        font-weight: 500;
        padding: 1rem 1.5rem;
        border: 1px solid #000;
        overflow: hidden;
        color: #fff;
    }

    button span {
        display: block;
        position: relative;
    }

    button > span {
        overflow: hidden;
    }

    button > span > span {
        overflow: hidden;
        mix-blend-mode: difference;
    }

    button:hover > span > span {
        animation: MoveUpInitial 0.2s forwards, MoveUpEnd 0.2s forwards 0.2s;
    }

    @keyframes MoveUpInitial {
        to {
            transform: translate3d(0,-105%,0);
        }
    }

    @keyframes MoveUpEnd {
        from {
            transform: translate3d(0,100%,0);
        }
        to {
            transform: translate3d(0,0,0);
        }
    }

    button::before {
        content: '';
        background: #000;
        transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
        transform-origin: 100% 50%;
    }

    button:hover::before {
        transform: scale3d(0,1,1);
        transform-origin: 0% 50%;
    }

</style>
