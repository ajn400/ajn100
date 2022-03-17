const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 300, 300 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);


    context.beginPath();
    context.moveTo(20,20);

    //二次贝塞尔曲线
    context.quadraticCurveTo(20,100,200,20);

    context.strokeStyle = 'green'
    context.stroke()

  };
};

canvasSketch(sketch, settings);
