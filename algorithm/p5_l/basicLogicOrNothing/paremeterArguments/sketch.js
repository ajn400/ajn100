var x=0;
var speed=3;
var window_width=window.innerWidth;
var window_height=window.innerHeight;
function setup(){
    createCanvas(window_width,window_height)
}

function draw() {
    background(50)
    lollipop(100,100,50)

    lollipop(300,200,150)

}

function lollipop(x,y,diameter) {
    fill(0,200,255)

    rect(x-10,y,20,150);

    fill(255,0,200)

    ellipse(x,y,diameter,diameter)
}
