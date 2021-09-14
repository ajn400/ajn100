<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <input type="file" accept=".docx" @change="handelFile" ref="fileinput">
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import mammoth from 'mammoth'


export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
    console.log(mammoth)
  },
  methods:{
    handelFile:function(){
      let true_result=0;

      let fileList=this.$refs.fileinput?.files
      const file = fileList[0];

      console.log(file)
      const reader = new FileReader();
      reader.onload = function() {
        true_result=this.result;
        // if(true_result){
        //   mammoth.convertToHtml({ true_result }).then(function(){
        //     console.log("成功",this)
        //   })
        // }
        console.log("888",true_result)
      };

      //fucking undefined
      var result=reader.readAsArrayBuffer(file)
      console.log("haha",result)

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
