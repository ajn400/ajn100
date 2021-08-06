var window_width=window.innerWidth;
var window_height=window.innerHeight;
function setup(){
    createCanvas(500,500)
}
var ball={
    x:300,
    y:200,
    xspeed:4,
    yspeed:-3
}
function draw() {
    background(250)
    move()
    bounce()
    display()
}
function move() {
    ball.x=ball.x+ball.xspeed;
    ball.y=ball.y+ball.yspeed;
}
function bounce(){
    if(ball.x>width-12||ball.x<12){
        ball.xspeed=ball.xspeed*-1
    }
    if(ball.y>height-12||ball.y<12){
        ball.yspeed=ball.yspeed*-1
    }
}
function display() {
    stroke(255);
    strokeWeight(4);
    fill(200,0,200);
    ellipse(ball.x,ball.y,24,24)
}



