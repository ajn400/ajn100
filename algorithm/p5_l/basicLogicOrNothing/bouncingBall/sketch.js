var x=0;
var speed=3;
var window_width=window.innerWidth;
var window_height=window.innerHeight;
function setup(){
    createCanvas(window_width,window_height)
}

function draw() {
// background(0);
// stroke(255);
// strokeWeight(4);
// noFill();
//
// ellipse(x,200,100,100);
// if(x>width){
//     speed=-3;
// }
// if(x<0){
//     speed=3
// }
// x=x+speed
//     console.log(random(1,2))
//     background(254)
//     line(1,2,100,200)

    background(0);
    strokeWeight(4);
    stroke(255);

    // var x = 0;
    // while (x <= width) {
    //     fill(0, 200, 255);
    //     ellipse(x, 100, 25, 25);
    //     x = x + 50;
    // }
    //
    // for (var x = 0; x <= width; x += 50) {
    //     fill(255, 0, 200);
    //     ellipse(x, 300, 25, 25);
    // }

    for (let x = 0; x <= width; x += 50) {
        for (let y = 0; y <= height; y += 50) {
            fill(random(255), 0, random(255));
            ellipse(x, y, 25, 25);
        }
    }
}
