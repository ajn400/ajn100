let canvas =document.getElementById('canvas');
let context=canvas.getContext('2d');

context.font='38pt Arial';

context.fillStyle='#987654';

context.strokeStyle='blue';

context.fillText('Hello World',canvas.width/2-150,canvas.height/2+50);

context.strokeText('Hello World',canvas.width/2-150,canvas.height/2+50);