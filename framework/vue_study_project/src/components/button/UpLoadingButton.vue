<template>
    <button class="button">
        <span>
            upload
        </span>
    </button>
</template>

<script>
    export default {
        name: "UpLoadingButton"
    }
</script>

<style scoped>
    button{
        font-family: aktiv-grotesk-extended, sans-serif;
        font-weight: 700;
        border: 2px solid #000;
        border-radius: 3rem;
        overflow: hidden;
        color: #fff;
    }

    button::before {
        content: '';
        background: #000;
        transition: transform 0.3s cubic-bezier(0.7, 0, 0.2, 1);
    }

    button:hover::before {
        transform: translate3d(0,-100%,0);
    }

    span {
        position: relative;
        mix-blend-mode: difference;
    }
</style>
