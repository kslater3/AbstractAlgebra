
let root;
let canvas;
let ctx;


let n = 12;


function draw() {
    let sum;
    let left, right, top, bottom;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            sum = (i + j) % n;

            left = canvas.width/n * i;
            right = canvas.width/n * (i + 1);

            top = canvas.height/n * j;
            bottom = canvas.height/n * (j + 1);

            ctx.fillStyle = 'rgb(' + Math.round(100 + (155/n) * sum) + ', 0, 0)';
            ctx.fillRect(left, right, bottom, top);
        }
    }


    for(let i = 1; i < n; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width/n * i, 0);
        ctx.lineTo(canvas.width/n * i, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, canvas.height/n * i);
        ctx.lineTo(canvas.width, canvas.height/n * i);
        ctx.stroke();
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ctx.fillStyle = 'black';
            ctx.fillText((i + j) % n, canvas.width/n * i + (canvas.width/n)/5, canvas.height/n * j + 4*(canvas.height/n)/5);
        }
    }
}



window.onload = function() {
    root = document.getElementById("root");

    canvas = document.createElement('canvas');
    canvas.style.width = '200px';
    canvas.style.height = '200px';
    canvas.width = 200;
    canvas.height = 200;
    canvas.style.border = '1px solid black';

    root.appendChild(canvas);

    ctx = canvas.getContext('2d');

    draw();
}
