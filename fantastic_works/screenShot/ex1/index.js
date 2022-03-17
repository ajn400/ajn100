let btn = document.querySelector('.record-btn');
btn.addEventListener("click", async function(){

    
    let stream = await navigator.mediaDevices.getDisplayMedia({
        video:true
    })
    const mine = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")?"video/webm;codecs=vp9":"video/webm"
    let mediaRecoder =new MediaRecorder(stream,{
        mimeType:mine
    })
    let chunks = [];
    mediaRecoder.addEventListener('dataavailable',function (e) {
        chunks.push(e.data)
    })
    mediaRecoder.addEventListener('stop',function () {
        let blob = new Blob(chunks,{
            type:chunks[0].type
        })
        let url = URL.createObjectURL(blob);
        let video =document.querySelector(".video");
        video.src =url;
        let a = document.createElement('a')
        a.href = url
        a.download = 'video.webm'
        a.click()
    })
    mediaRecoder.start()
})
