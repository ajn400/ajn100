var r=0;
var b=255;
var window_width=window.innerWidth;
var window_height=window.innerHeight;

function setup(){
    createCanvas(window_width,window_height)
}

function draw() {
    r=map(mouseX,0,window_width,0,255)
    b=map(mouseY,0,window_height,255,0)
    //map5个参数
    //映射的值|原始最小值|原始最大值|映射最小值|映射最大值

    background(r,66,b)
}
