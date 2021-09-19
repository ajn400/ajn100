<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script >
    import Vue from 'vue'
    import VueX from 'vuex'
    Vue.use(VueX)
    export default {
        name: 'App'
    }
</script>

<style >
    body{
        overflow: hidden;
    }
</style>
