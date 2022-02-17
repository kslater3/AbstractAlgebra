
let root;
let canvas;
let ctx;


let n = 12;


const regFont = 'normal 12px Arial';
const boldFont = 'bold 12px Arial';


/*
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
*/
/*
function draw() {
    let sum;
    let left, right, top, bottom;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            sum = (i + j) % n;

            left = canvas.width/(n + 1) * (i + 1);
            right = canvas.width/(n + 1) * (i + 2);

            top = canvas.height/(n + 1) * (j + 1);
            bottom = canvas.height/(n + 1) * (j + 2);

            ctx.fillStyle = 'rgb(' + Math.round(100 + (155/n) * sum) + ', 0, 0)';
            ctx.fillRect(left, right, bottom, top);
        }
    }


    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(canvas.width/(n + 1), 0);
    ctx.lineTo(canvas.width/(n + 1), canvas.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height/(n + 1));
    ctx.lineTo(canvas.width, canvas.height/(n + 1));
    ctx.stroke();

    for(let i = 1; i < n + 1; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width/(n + 1) * i, 0);
        ctx.lineTo(canvas.width/(n + 1) * i, canvas.height/(n + 1));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, canvas.height/n * i);
        ctx.lineTo(canvas.width/(n + 1), canvas.height/(n + 1) * i);
        ctx.stroke();

        ctx.fillText(i - 1, canvas.width/(n + 1) * i + (canvas.width/(n + 1))/5, canvas.height/(n + 1) * i + 4*(canvas.height/(n + 1))/5);
    }

    ctx.lineWidth = 1;


    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            ctx.fillStyle = 'black';
            ctx.fillText((i + j) % n, canvas.width/(n + 1) * (i + 1) + (canvas.width/(n + 1))/5, canvas.height/(n + 1) * (j + 1) + 4*(canvas.height/(n + 1))/5);
        }
    }
}
*/
function draw() {
    let sum;
    let left, right, top, bottom;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            sum = (i + j) % n;

            left = canvas.width/(n+1) * (i+1);
            right = canvas.width/(n+1) * (i+2);

            top = canvas.height/(n+1) * (j+1);
            bottom = canvas.height/(n+1) * (j+2);

            ctx.fillStyle = 'rgb(' + Math.round(50 + (205/n) * sum) + ', 0, ' + Math.round(255 - (205/n) * sum) + ')';
            ctx.fillRect(left, top, right, bottom);
            ctx.fillStyle = 'black';

            ctx.fillText(sum, left + (canvas.width/(n + 1))/5, top + 4*(canvas.height/(n + 1))/5);
        }
    }


    for(let i = 1; i < n + 1; i++) {
        ctx.beginPath();
        ctx.moveTo(canvas.width/(n+1) * i, canvas.height/(n+1));
        ctx.lineTo(canvas.width/(n+1) * i, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width/(n+1), canvas.height/(n+1) * i);
        ctx.lineTo(canvas.width, canvas.height/(n+1) * i);
        ctx.stroke();


        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(canvas.width/(n+1) * i, 0);
        ctx.lineTo(canvas.width/(n+1) * i, canvas.height/(n+1));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width/(n+1) * i, canvas.height/(n+1));
        ctx.lineTo(canvas.width/(n+1) * (i+1), canvas.height/(n+1));
        ctx.stroke();


        ctx.beginPath();
        ctx.moveTo(0, canvas.height/(n+1) * i);
        ctx.lineTo(canvas.width/(n+1), canvas.height/(n+1) * i);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width/(n+1), canvas.height/(n+1) * i);
        ctx.lineTo(canvas.width/(n+1), canvas.height/(n+1) * (i+1));
        ctx.stroke();
        ctx.lineWidth = 1;


        ctx.font = boldFont;
        ctx.fillText(i - 1, canvas.width/(n+1) * i + (canvas.width/(n+1))/5, 4*(canvas.height/(n+1))/5);
        ctx.fillText(i - 1, (canvas.width/(n+1))/5, canvas.height/(n+1) * i + 4*(canvas.height/(n+1))/5);
        ctx.font = regFont;
    }


    ctx.fillStyle = '#aaaaaa';
    ctx.fillRect(0, 0, canvas.width/(n+1), canvas.height/(n+1));
    ctx.fillStyle = 'black';

    ctx.font = boldFont;
    ctx.fillText(n, (canvas.width/(n+1))/5, 4*(canvas.height/(n+1))/5);
    ctx.font = regFont;
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
