<template>
    <div class="connections">
        <canvas id="pixi1"></canvas>
    </div>
</template>

<script>
    import * as PIXI from 'pixi.js'
    import bee from '../../assets/images/bee.svg'

    const texture = PIXI.Texture.from(bee);
    export default {
        name: 'pixiDemo2',

        methods: {
            drawPixi() {
                var canvas = document.getElementById('pixi1')
                const app = new PIXI.Application({
                    width: 800,
                    height: 600,
                    backgroundColor: 0x1099bb,
                    resolution: window.devicePixelRatio || 1,
                    view:canvas
                })
                const container = new PIXI.Container();
                const bee = PIXI.Sprite.from(texture);
                bee.anchor.set(0.5)

                bee.x=app.screen.width/2;
                bee.y=app.screen.height/2;
                container.addChild(bee);
                // container.pivot.x = container.width / 2;
                // container.pivot.y = container.height / 2;

                app.stage.addChild(container);

                app.ticker.add(()=>{
                    bee.rotation+=0.1
                })


            },
        },

        mounted() {
            this.drawPixi()
        },
    }
</script>
