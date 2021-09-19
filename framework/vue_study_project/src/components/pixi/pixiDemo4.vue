<template>
    <div class="connections">
        <h1>messageCount:{{messageCount}}</h1>
        <h1>mapMessageCount:{{mapMessageCount}}</h1>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'pixiDemo',

        methods: {
        },

        mounted() {
            // console.log(this.$store)
            // let ws=new WebSocket('/api/message')
            // console.log("websocket",ws)
        },

        computed:{
            ...mapState(["mapMessageCount","messageCount"])
        },
    }
</script>
