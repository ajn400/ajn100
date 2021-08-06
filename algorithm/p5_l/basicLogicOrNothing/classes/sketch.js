var window_width=window.innerWidth;
var window_height=window.innerHeight;
function setup(){
    createCanvas(window_width,window_height)

    bubble1=new Bubble();
    bubble2=new Bubble();
}

function draw() {
    background(50)

    bubble1.move()
    bubble1.show()
    bubble2.move()
    bubble2.show()
}


class Bubble {
    constructor(x,y,r) {
        this.x=200;
        this.y=150
    }

    move(){
        this.x=this.x+random(-5,5)
        this.y=this.y+random(-5,5)
    }

    show(){
        stroke(255)
        strokeWeight(4);
        noFill();
        ellipse(this.x,this.y,24,24)
    }
}

