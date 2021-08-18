<template>
    <div class="connections">
        <canvas id="pixi"></canvas>
    </div>
</template>

<script>
    //https://github.com/Zainking/learningPixi#%E7%A7%BB%E5%8A%A8%E7%B2%BE%E7%81%B5
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
                    backgroundColor: 0x000000,
                    resolution: window.devicePixelRatio || 1,
                    view:canvas
                })
                const container = new PIXI.Container();

                const bees = [];

                const totalDudes = 20;

                for(let i=0 ;i<totalDudes;i++){
                    const bee= PIXI.Sprite.from(texture);
                    bee.anchor.set(0.5);

                    bee.scale.set(2+ Math.random()*4);
                    bee.x=Math.random()*app.screen.width;
                    bee.y=Math.random()*app.screen.height;

                    bee.tint=Math.random()*0xffffff;

                    bee.direction=Math.random()*Math.PI*2;
                    bee.turningSpeed = Math.random()-0.8;
                    bee.speed=2 + Math.random()*2

                    bees.push(bee)
                    container.addChild(bee)
                }

                const dudeBoundsPadding = 100;
                const dudeBounds = new PIXI.Rectangle(-dudeBoundsPadding,
                    -dudeBoundsPadding,
                    app.screen.width + dudeBoundsPadding * 2,
                    app.screen.height + dudeBoundsPadding * 2);

                app.ticker.add(() => {
                    // iterate through the dudes and update their position
                    for (let i = 0; i < bees.length; i++) {
                        const dude = bees[i];
                        dude.direction += dude.turningSpeed * 0.01;
                        dude.x += Math.sin(dude.direction) * dude.speed;
                        dude.y += Math.cos(dude.direction) * dude.speed;
                        dude.rotation = -dude.direction - Math.PI / 2;

                        // wrap the dudes by testing their bounds...
                        if (dude.x < dudeBounds.x) {
                            dude.x += dudeBounds.width;
                        } else if (dude.x > dudeBounds.x + dudeBounds.width) {
                            dude.x -= dudeBounds.width;
                        }

                        if (dude.y < dudeBounds.y) {
                            dude.y += dudeBounds.height;
                        } else if (dude.y > dudeBounds.y + dudeBounds.height) {
                            dude.y -= dudeBounds.height;
                        }
                    }
                });


                app.stage.addChild(container);
            },
        },

        mounted() {
            this.drawPixi()
        },
    }
</script>
