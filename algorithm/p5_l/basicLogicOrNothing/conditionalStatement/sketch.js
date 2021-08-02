
var window_width=window.innerWidth;
var window_height=window.innerHeight;

function setup(){
    createCanvas(window_width,window_height)
}

function draw() {
    background(0)


    stroke(255)

    strokeWeight(4)

    noFill()

    if(mouseX>300){
        fill(255,0,200);
    }

    ellipse(300,200,100,100)
}
