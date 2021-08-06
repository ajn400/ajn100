var words = ["你好","世界","东京奥运会"];

var index = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(200);
    fill(255);
    textSize(32);
    text(words[index], 200, height/2-16);
}

function mousePressed() {
    index = index + 1;
    if (index == words.length) {
        index = 0;
    }
}
