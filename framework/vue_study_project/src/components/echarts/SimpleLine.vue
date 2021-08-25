<template>
    <div>
        <div :id="id" :class="className" :style="{height:height,width:width}"/>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "SimpleLine",
        props: {
            className: {
                type: String,
                default: 'chart'
            },
            id: {
                type: String,
                default: 'chart'
            },
            width: {
                type: String,
                default: '80%'
            },
            height: {
                type: String,
                default: '80%'
            }
        },
        mounted() {

                var that=this;
                that.initChart()
                window.onresize=() => {
                    //不知道为啥不起作用
                    that.initChart()
                    this.$router.go(0)
                }



        },
        destroyed() {
            window.onresize=null;
        },
        data() {
            return {
                chart: null
            }
        },
        methods: {
            initChart() {
                this.$nextTick(()=>{
                    this.chart = echarts.init(document.getElementById(this.id))
                    let option = {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [150, 230, 224, 218, 135, 147, 260],
                            type: 'line'
                        }]
                    };
                    this.chart.setOption(option)
                })


            }
        }
    }
</script>

<style scoped>

</style>
