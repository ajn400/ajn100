let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

FONT_HEIGHT = 15;
MARGIN = 50;
HAND_TRUNCATION = canvas.width / 25;
HOUR_HAND_TRUNCATION = canvas.width / 10;
NUMERAL_SPACING = 20;
RADIUS = canvas.width / 2 - MARGIN;
HAND_RADIUS = RADIUS + NUMERAL_SPACING;

//绘制时钟表面
function drawCircle() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true)
    context.stroke();
}

//绘制钟面周围的数字
function drawNumerals() {
    let numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let angle = 0;
    let numeralWidth = 0;

    numerals.forEach(function (numral) {
        angle = Math.PI / 6 * (numral - 3);
        numeralWidth = context.measureText(numral).width;
        context.fillText(numral,
            canvas.width / 2 + Math.cos(angle) * (HAND_RADIUS) - numeralWidth / 2,
            canvas.height / 2 + Math.sin(angle) * (HAND_RADIUS) - FONT_HEIGHT / 3)
    })
}

function drawCenter() {
    context.beginPath();
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true)
    context.fill()
}

function drawHand(loc, isHour) {
    let angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2;
    let handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION : RADIUS - HAND_TRUNCATION;
    console.log(handRadius)
    context.moveTo(canvas.width / 2, canvas
        .height / 2);
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius,
        canvas.height / 2 + Math.sin(angle) * handRadius);


    let gradient = context.createLinearGradient(0, 0, 170, 0);
    gradient.addColorStop('0', "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    function hour_Style() {
        context.strokeStyle = gradient;
        context.lineWidth = 10;
    }

    function not_hour_style() {
        context.strokeStyle = '#000';
        context.lineWidth = 5
    }

    isHour ? hour_Style() : not_hour_style();
    context.stroke()
}

function drawHands() {
    let date = new Date();
    let hour = date.getHours()
    hour = hour > 12 ? hour - 12 : hour;
    drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true, .5);
    drawHand(date.getMinutes(), false, 0.5)
    drawHand(date.getSeconds(), false, 0.5)
}

function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawCircle();
    drawCenter();
    drawHands();
    drawNumerals();
}

context.font = FONT_HEIGHT + 'px Arial';
loop = setInterval(drawClock, 100)