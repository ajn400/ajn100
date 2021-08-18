<template>
    <ol class="content">
        <li class="content-item">
            <uploadingbutton></uploadingbutton>
        </li>
        <li class="content-item">
            <newpagebutton></newpagebutton>
        </li>
        <li class="content-item">
            <gobutton></gobutton>
        </li>
    </ol>
</template>

<script>
    import uploadingbutton from  "./UpLoadingButton"
    import newpagebutton from "./NewPageButton"
    import gobutton from "./GoButton"
    export default {
        name: "buttons",
        components: {
            uploadingbutton:uploadingbutton,
            newpagebutton:newpagebutton,
            gobutton:gobutton,
        }
    }
</script>

<style scoped>

    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        --color-text: #111;
        --color-number: #999;
        --color-bg: #fff;
        --color-link: #1352d1;
        --color-link-hover: #111;
        color: var(--color-text);
        background-color: var(--color-bg);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .content {
        display: grid;
        width: 100%;
        margin: 0 auto;
        padding: 10vh 25px;
        max-width: 1300px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-auto-rows: 200px;
        grid-gap: 4rem;
        grid-row-gap: 6rem;
        justify-content: center;
        list-style: none;
    }

    .content-item {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        counter-increment: itemcounter;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
        pointer-events: none;
    }

    .content-item::before {
        color: var(--color-number);
        position: absolute;
        top: 0;
        left: 0;
        content: counters(itemcounter, ".", decimal-leading-zero);
    }

    .button{
        pointer-events: auto;
        cursor: pointer;
        background: #e7e7e7;
        border: none;
        padding: 1.5rem 3rem;
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        position: relative;
        display: inline-block;
    }

    .button::before, .button::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }


</style>
