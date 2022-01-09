const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000,20]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    draw(context, width, height)
  };
};

const draw = (context, width, height) => {
  // console.log(canvasSketch.__proto__)
  context.beginPath();
  let startX=0,startY=0;
  context.moveTo(startX,startY);
  for(let i=0;startX<width;){
    i++;
    startX+=20
    if(i%2 === 0){
      context.quadraticCurveTo(startX,0,startX,0)

    }else{
      context.quadraticCurveTo(startX,20,startX,20)
    }

  }
  context.stroke()
}

canvasSketch(sketch, settings);
