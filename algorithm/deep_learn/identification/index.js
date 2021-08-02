//长城宽带

//定义一个图片分类器模型
// console.log(mobilenet)
let mobilenet;
let bear;
function modelReady(){
    console.log('model is ready')
    mobilenet.predict(bear,getRes)
}
function  getRes(err,result) {
    console.log(result)
    let res=""
    for(let i=0 ;i<result.length;i++){
        res+=i+1+":"+result[i].label+"\n"
    }
    document.getElementById('result').innerText=res
}

function imageReady(){
    image(bear,0,0, width ,height)
}

function setup(){
    createCanvas(960,540);
    background(0)
    bear = createImg('./cat.jpg',imageReady)
    // bear =createImg('./fantasyat.jpg',imageReady)
    bear.hide()
    //初始化模型图片是从 google 进行搜索的来训练模型，需要一定时间才能完成需要耐性等待一下。
    mobilenet=ml5.imageClassifier('MobileNet',modelReady)
}



