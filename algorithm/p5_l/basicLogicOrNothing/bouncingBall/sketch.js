var x=0;
var speed=3;
var window_width=window.innerWidth;
var window_height=window.innerHeight;
function setup(){
    createCanvas(window_width,window_height)
}

function draw() {
background(0);
stroke(255);
strokeWeight(4);
noFill();

ellipse(x,200,100,100);
if(x>width){
    speed=-3;
}
if(x<0){
    speed=3
}
x=x+speed
}
