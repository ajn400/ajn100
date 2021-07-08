<template>
    <div>
        simple line
        <div :id="id" :class="className" :style="{height:height,width:width}"/>
    </div>
</template>

<script>
    import echarts from 'echarts'

    console.log(echarts)
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
                default: '400px'
            },
            height: {
                type: String,
                default: '400px'
            }
        },
        mounted() {
            this.initChart()
        },
        data() {
            return {
                chart: null
            }
        },
        methods: {
            initChart() {
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
            }
        }
    }
</script>

<style scoped>

</style>