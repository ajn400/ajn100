const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 220, 100 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    let grd= context.createLinearGradient(0,0,220,0);
    grd.addColorStop(0,'yellow');
    grd.addColorStop(1,'white');
    context.fillStyle = grd;


    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.moveTo(20,20)
    //三次贝塞尔
    context.bezierCurveTo(20,100,200,100,200,20)

    context.strokeStyle = 'blue'
    context.stroke()

    context.moveTo(20,90)
    context.lineTo(190,90)

    context.strokeStyle = 'red'
    context.stroke()

  };
};

canvasSketch(sketch, settings);
