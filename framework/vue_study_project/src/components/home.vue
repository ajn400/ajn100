<template>
    <div class="home">
        <main-layout ref="menu"></main-layout>
        <router-view class="view" ref="view">
        </router-view>
    </div>

</template>

<script>
    import MainLayout from "../layout/main";
    export default {
        name: "home",
        components:{
            MainLayout
        },
        mounted() {
            this.$nextTick(()=>{
                // console.log(this.$refs.view.$vnode.elm)
                // this.$refs.view.$vnode.elm
                // console.log(this.$refs.menu.$vnode.elm)
            })
        }
    }
</script>

<style scoped >
    .home{
        /*max-width: 100vw;*/
        /*overflow: hidden;*/
        white-space: nowrap;
        display: grid;
        grid-template-columns: 250px 1fr;
    }

    .view{
        max-width: 1200px;
    }



</style>
