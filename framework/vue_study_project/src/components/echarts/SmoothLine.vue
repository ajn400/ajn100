<template>
    <div>
        <div :id="id" :class="className" :style="{height:height,width:width}"/>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "SmoothLine",
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
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line',
                        smooth: true
                    }]
                };
                this.chart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>