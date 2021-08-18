<template>
    <div class="connections">
        <canvas id="pixi"></canvas>
    </div>
</template>

<script>
    import * as PIXI from 'pixi.js'

    export default {
        name: 'pixiDemo',

        methods: {
            drawPixi() {
                var canvas = document.getElementById('pixi')
                const app = new PIXI.Application({
                    width: window.innerWidth,
                    height: window.innerHeight,
                    antialias: true,
                    transparent: true,
                    view: canvas,
                })
                let graphics = new PIXI.Graphics()
                graphics.lineStyle(100, 0x000000)
                //start
                graphics.moveTo(0, 250)
                //end
                graphics.lineTo(500, 250)
                app.stage.addChild(graphics)
            },
        },

        mounted() {
            this.drawPixi()
        },
    }
</script>
