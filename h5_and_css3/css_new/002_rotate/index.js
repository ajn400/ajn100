const $ = function(className){return document.getElementsByClassName(className)}
if($('rotate')){
    let target = $('rotate');
    console.log(target)
    let i = 1;
    
    while(i<20){
        i++;
        target[0].setAttribute('style','transform:rotate('+i+'grad)')
    }
    // requestAnimationFrame(function(){
        
    // })
}