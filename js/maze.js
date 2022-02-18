(function () {
    
    init(); //nice init init?

    function init() {
        resizeCanvas();
    }

    async function redraw() {



        const response = await fetch("js/mazes.json");
        const data = await response.json();
        tab = data[1].layout;
        j = 0;
        for (i = 0; i < tab.length; i++) {
            for (r = 0; r < 2; r++) {
                if (j == 0) {
                    ctx.moveTo(tab[i][j], tab[i][j + 1]);
                    j = 2;
                }
                else {
                    ctx.lineTo(tab[i][j], tab[i][j + 1]);
                    j = 0;
                }


            }
        }
        ctx.strokeStyle = "#0000FF";
        ctx.fill();
        ctx.stroke();


    }

    function resizeCanvas() {
        redraw();

    }
})();