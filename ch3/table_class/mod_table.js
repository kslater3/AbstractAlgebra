

class Canvas {
    canvas;
    ctx;

    regFont = 'normal 12px Arial';
    boldFont = 'bold 12px Arial';


    constructor(length, parentElement) {
        this.canvas = document.createElement('canvas');
        this.canvas.style.width = length + 'px';
        this.canvas.style.height = length + 'px';
        this.canvas.width = length;
        this.canvas.height = length;
        this.canvas.style.border = '1px solid black';

        parentElement.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');
        this.ctx.font = this.regFont;
    }
}


/*
class Z_Mod_N extends Canvas {
    n;
    operation;

    constructor(length, n, operation, parentElement) {
        super(length, parentElement);

        this.n = n;

        this.operation = operation;
    }


    draw() {
        let sum;
        let left, right, top, bottom;

        for(let i = 0; i < this.n; i++) {
            for(let j = 0; j < this.n; j++) {
                sum = this.operation(i, j, this.n);

                left = this.canvas.width/this.n * i;
                right = this.canvas.width/this.n * (i+1);

                top = this.canvas.height/this.n * j;
                bottom = this.canvas.height/this.n * (j+1);

                this.ctx.fillStyle = 'rgb(' + Math.round(50 + (205/this.n) * sum) + ', 0, ' + Math.round(255 - (205/this.n) * sum) + ')';
                this.ctx.fillRect(left, top, right, bottom);
                this.ctx.fillStyle = 'black';
            }
        }


        for(let i = 0; i < this.n; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/this.n * i, 0);
            this.ctx.lineTo(this.canvas.width/this.n * i, this.canvas.height);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(0, this.canvas.height/this.n * i);
            this.ctx.lineTo(this.canvas.width, this.canvas.height/this.n * i);
            this.ctx.stroke();
        }
    }
}
*/
class Z_Mod_N extends Canvas {
    n;
    operation;

    constructor(length, n, operation, parentElement) {
        super(length, parentElement);

        this.n = n;

        this.operation = operation;
    }


    /*
    draw() {
        let sum;
        let left, right, top, bottom;

        for(let i = 0; i < this.n; i++) {
            for(let j = 0; j < this.n; j++) {
                sum = this.operation(i, j, this.n);

                left = this.canvas.width/this.n * i;
                right = this.canvas.width/this.n * (i+1);

                top = this.canvas.height/this.n * j;
                bottom = this.canvas.height/this.n * (j+1);

                this.ctx.fillStyle = 'rgb(' + Math.round(50 + (205/this.n) * sum) + ', 0, ' + Math.round(255 - (205/this.n) * sum) + ')';
                this.ctx.fillRect(left, top, right, bottom);
                this.ctx.fillStyle = 'black';
            }
        }


        for(let i = 0; i < this.n; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/this.n * i, 0);
            this.ctx.lineTo(this.canvas.width/this.n * i, this.canvas.height);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(0, this.canvas.height/this.n * i);
            this.ctx.lineTo(this.canvas.width, this.canvas.height/this.n * i);
            this.ctx.stroke();
        }
    }
    */
    draw() {
        let sum;
        let left, right, top, bottom;

        for(let i = 0; i < this.n; i++) {
            for(let j = 0; j < this.n; j++) {
                sum = this.operation(i, j, this.n);

                left = this.canvas.width/(this.n+1) * (i+1);
                right = this.canvas.width/(this.n+1) * (i+2);

                top = this.canvas.height/(this.n+1) * (j+1);
                bottom = this.canvas.height/(this.n+1) * (j+2);

                this.ctx.fillStyle = 'rgb(' + Math.round(50 + (205/this.n) * sum) + ', 0, ' + Math.round(255 - (205/this.n) * sum) + ')';
                this.ctx.fillRect(left, top, right, bottom);
                this.ctx.fillStyle = 'black';

                this.ctx.fillText(sum, left + (this.canvas.width/(this.n + 1))/5, top + 4*(this.canvas.height/(this.n + 1))/5);
            }
        }


        for(let i = 1; i < this.n + 1; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/(this.n+1) * i, this.canvas.height/(this.n+1));
            this.ctx.lineTo(this.canvas.width/(this.n+1) * i, this.canvas.height);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/(this.n+1), this.canvas.height/(this.n+1) * i);
            this.ctx.lineTo(this.canvas.width, this.canvas.height/(this.n+1) * i);
            this.ctx.stroke();


            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/(this.n+1) * i, 0);
            this.ctx.lineTo(this.canvas.width/(this.n+1) * i, this.canvas.height/(this.n+1));
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/(this.n+1) * i, this.canvas.height/(this.n+1));
            this.ctx.lineTo(this.canvas.width/(this.n+1) * (i+1), this.canvas.height/(this.n+1));
            this.ctx.stroke();


            this.ctx.beginPath();
            this.ctx.moveTo(0, this.canvas.height/(this.n+1) * i);
            this.ctx.lineTo(this.canvas.width/(this.n+1), this.canvas.height/(this.n+1) * i);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(this.canvas.width/(this.n+1), this.canvas.height/(this.n+1) * i);
            this.ctx.lineTo(this.canvas.width/(this.n+1), this.canvas.height/(this.n+1) * (i+1));
            this.ctx.stroke();
            this.ctx.lineWidth = 1;


            this.ctx.font = this.boldFont;
            this.ctx.fillText(i - 1, this.canvas.width/(this.n+1) * i + (this.canvas.width/(this.n+1))/5, 4*(this.canvas.height/(this.n+1))/5);
            this.ctx.fillText(i - 1, (this.canvas.width/(this.n+1))/5, this.canvas.height/(this.n+1) * i + 4*(this.canvas.height/(this.n+1))/5);
            this.ctx.font = this.regFont;
        }


        this.ctx.fillStyle = '#aaaaaa';
        this.ctx.fillRect(0, 0, this.canvas.width/(this.n+1), this.canvas.height/(this.n+1));
        this.ctx.fillStyle = 'black';

        this.ctx.font = this.boldFont;
        this.ctx.fillText(this.n, (this.canvas.width/(this.n+1))/5, 4*(this.canvas.height/(this.n+1))/5);
        this.ctx.font = this.regFont;
    }
}
