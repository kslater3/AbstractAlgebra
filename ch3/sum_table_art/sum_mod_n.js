
let root;
let canvas;
let ctx;


let n = 24; //12;


const regFont = 'normal 12px Arial';
const boldFont = 'bold 12px Arial';


function draw() {
    let sum;
    let left, right, top, bottom;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            sum = (i + j) % n;
            //sum = (i + j) % 12;

            left = canvas.width/n * i;
            right = canvas.width/n * (i+1);

            top = canvas.height/n * j;
            bottom = canvas.height/n * (j+1);

            ctx.fillStyle = 'rgb(' + Math.round(50 + (205/n) * sum) + ', 0, ' + Math.round(255 - (205/n) * sum) + ')';
            ctx.fillRect(left, top, right, bottom);
            ctx.fillStyle = 'black';
        }
    }


    for(let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width/n * i, 0);
        ctx.lineTo(canvas.width/n * i, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, canvas.height/n * i);
        ctx.lineTo(canvas.width, canvas.height/n * i);
        ctx.stroke();
    }
}




window.onload = function() {
    root = document.getElementById("root");

    canvas = document.createElement('canvas');
    canvas.style.width = '300px';
    canvas.style.height = '300px';
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.border = '1px solid black';

    root.appendChild(canvas);

    ctx = canvas.getContext('2d');
    ctx.font = regFont;

    draw();
}
