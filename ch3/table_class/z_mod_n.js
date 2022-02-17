
window.onload = function() {
    /*
    let n_12 = document.getElementById('n_12');
    let n_24 = document.getElementById('n_24');

    let canvas1 = new Z_Mod_N(
        300,

        12,

        (a, b, n) => {
            return (a + b) % n
        },

        n_12
    );

    canvas1.draw();


    let canvas2 = new Z_Mod_N(
        300,

        24,

        (a, b, n) => {
            return (a + b) % n
        },

        n_24
    );

    canvas2.draw();




    let slider_div = document.getElementById('slidable_div');
    let n_slider = document.getElementById('n_slider');

    n_slider.addEventListener('change', (e) => {
        canvasSlide.n = e.target.value;

        canvasSlide.draw();
    });

    let canvasSlide = new Z_Mod_N(
        300,

        2,

        (a, b, n) => {
            return (a + b) % n
        },

        slider_div
    );

    canvasSlide.draw();
    */

    let root = document.getElementById('root');

    let canvas = new Z_Mod_N(
        500,

        12,

        (a, b, n) => {
            return (a + b) % n
        },

        root
    );

    canvas.draw();
}
