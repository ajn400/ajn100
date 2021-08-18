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

                // Create a new texture
                // Create a 5x5 grid of bunnies
                for (let i = 0; i < 25; i++) {
                    const bunny = new PIXI.Sprite(texture);
                    bunny.anchor.set(0.5);
                    bunny.x = (i % 5) * 40;
                    bunny.y = Math.floor(i / 5) * 40;
                    container.addChild(bunny);
                }

                container.x = app.screen.width / 2;
                container.y = app.screen.height / 2;

                //使用pivot设置精灵的位置
                container.pivot.x = container.width / 2;
                container.pivot.y = container.height / 2;


                app.ticker.add((delta) => {
                    // rotate the container!
                    // use delta to create frame-independent transform
                    container.rotation -= 0.01 * delta;
                });

                // // Create a 5x5 grid of bunnies
                // for (let i = 0; i < 25; i++) {
                //     const bunny = new PIXI.Sprite(texture);
                //     bunny.anchor.set(0.5);
                //     bunny.x = (i % 5) * 40;
                //     bunny.y = Math.floor(i / 5) * 40;
                //     container.addChild(bunny);
                // }
                //
                // // Move container to the center
                // container.x = app.screen.width / 2;
                // container.y = app.screen.height / 2;
                //
                //     // Center bunny sprite in local container coordinates
                // container.pivot.x = container.width / 2;
                // container.pivot.y = container.height / 2;
                //
                //     // Listen for animate update
                // app.ticker.add((delta) => {
                //     // rotate the container!
                //     // use delta to create frame-independent transform
                //     container.rotation -= 0.01 * delta;
                // });
            },
        },

        mounted() {
            this.drawPixi()
        },
    }
</script>
