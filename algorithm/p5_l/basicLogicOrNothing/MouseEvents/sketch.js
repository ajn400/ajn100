
function setup() {
    createCanvas(400, 400);
}

let index=0
function draw() {
    background(index,index,index);
    fill(index);
    textSize(32);
    textAlign(CENTER);
}

function mousePressed(event) {
    if(mouseButton === "left"){
        index=random(1,255)
    }
}
