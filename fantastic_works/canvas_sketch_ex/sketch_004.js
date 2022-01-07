const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 200,200]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    draw(context, width, height)
  };
};

const draw = (context, width, height) => {
  context.beginPath();
  context.arc(100,100,20,0,Math.PI*2)
  context.stroke()
}

canvasSketch(sketch, settings);
