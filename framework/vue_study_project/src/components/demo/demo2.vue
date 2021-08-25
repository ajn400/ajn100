<template>
    <div class="form">
        <input type="text" class="flex" v-model="textInput">
        上述输入为：<br>
        <div>
            {{textInput}}
        </div>
    </div>
</template>

<script>
    //vue表单输入绑定
    export default {
        name: "demo2",
        data(){
            return{
                textInput:''
            }
        }
    }
</script>

<style scoped>

</style>
