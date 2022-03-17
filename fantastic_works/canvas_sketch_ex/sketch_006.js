const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 80, 120 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    draw(context,width,height)

  };
};

const draw = (ctx, width, height) => {
    ctx.beginPath();
    ctx.moveTo(20,20);
    ctx.lineTo(20,100);
    ctx.lineTo(60,60)
    ctx.closePath()
    ctx.stroke()
}

canvasSketch(sketch, settings);
