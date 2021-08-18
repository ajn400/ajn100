<template>
    <div class="home">
        <div class="grid">
            <router-link to="simple-line" class="link">基础折线图</router-link>
            <router-link to="smooth-line" class="link">基础平滑折线图</router-link>
            <router-link to="fantastic" class="link">多个平滑曲线图</router-link>
            <router-link to="mindmap" class="link">思维导图</router-link>
            <router-link to="demo1" class="link">旋转三色球</router-link>
            <router-link to="stickyMenu" class="link">粘性表头(花里胡哨)</router-link>
            <router-link to="buttons" class="link">按钮们</router-link>
            <router-link to="pixiDemo" class="link">pixi示例</router-link>
            <router-link to="pixiexample1" class="link">旋转的蜜蜂</router-link>
            <router-link to="pixiexample2" class="link">一只旋转的蜜蜂</router-link>
            <router-link to="pixiexample3" class="link">一群的蜜蜂</router-link>



        </div>
        <router-view class="view"></router-view>
    </div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped >
    .home{
        display: flex;
        flex-direction: column;
    }
    .grid{
        display: grid;
        width: 100%;
        grid-template-columns: repeat(5,15vw);
        grid-gap: 20px;
        margin-bottom: 20px;
    }

    .grid .link{
        text-decoration: none;
        color:#876543;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .view{
        position: relative;
    }

</style>
