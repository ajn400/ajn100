<template>
    <div class="connections">
        <canvas id="pixi"></canvas>
    </div>
</template>

<script>
    import * as PIXI from 'pixi.js'
    import bee from '../../assets/images/bee.svg'

    const texture = PIXI.Texture.from(bee);
    export default {
        name: 'pixiDemo',

        methods: {
            drawPixi() {
                var canvas = document.getElementById('pixi')
                const app = new PIXI.Application({
                    width: 800,
                    height: 600,
                    backgroundColor: 0x1099bb,
                    resolution: window.devicePixelRatio || 1,
                    view:canvas
                })
                const container = new PIXI.Container();
                app.stage.addChild(container);
            },
        },

        mounted() {
            this.drawPixi()
        },
    }
</script>
