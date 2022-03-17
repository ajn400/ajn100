const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080 , 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    // 画个背景

    context.fillStyle = 'black';

    const x = width  * 0.5;
    const y = height * 0.5;
    const w = width  * 0.3;
    const h = height * 0.3;

    context.save();
    // context.translate(x,y)
    context.rotate(0.3)

    context.beginPath();
    context.rect(w * 0.5,h * 0.5, w, h);
    context.fill()
    context.restore()




    

  };
};

canvasSketch(sketch, settings);
