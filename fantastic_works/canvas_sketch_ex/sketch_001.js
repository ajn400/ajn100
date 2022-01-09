const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "#ababcc";
    context.rect(width / 4, height / 4, width / 2, height / 2);
    context.fill();
  };
};

canvasSketch(sketch, settings);
