<template>
    <div>
        <router-view></router-view>
        <router-link to="simple-line" class="link">基础折线图</router-link>
        <br>
        <router-link to="smooth-line" class="link">基础平滑折线图</router-link>
    </div>

</template>

<script>
    export default {
        name: "home"
    }
</script>

<style scoped>
    .link{
        text-decoration: none;
        color:#876543;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
    }
</style>