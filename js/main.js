var dotCanvas = document.getElementById('pacDots');
var dctx = dotCanvas.getContext('2d');
dctx.scale(2, 2);


/*if(localStorage.getItem("tokens") == null) {
    localStorage.setItem("tokens", 1);
}
var tokens=localStorage.getItem("token");

var playbtn = document.getElementById('playbtn');
if(tokens==0){
    playbtn.disabled =true;
    playbtn.className = "nes-btn is-disabled";
}

var coins=document.getElementById('coins');
coins.innerHTML="YOU HAVE: "+tokens+" TOKEN(S)!"
*/
var movCanvas = document.getElementById('moving');
var mctx = movCanvas.getContext('2d');

mctx.scale(2, 2);
var img = new Image();
img.src = 'img/pacman.png';

async function start() {
    /*tokens--;
    var coins=document.getElementById('coins');
    coins.innerHTML="YOU HAVE: "+tokens+" TOKEN(S)!"*/

    document.getElementById("bg").pause();
    mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
    var playbtn = document.getElementById('playbtn');
    playbtn.disabled =true;
    playbtn.className = "nes-btn is-disabled";


    var tab = new Array(20);
    for (var i = 0; i < tab.length; i++) {
        tab[i] = new Array(20);
    }
    tab[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tab[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0,33,34,37,38];
    tab[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0,31,32,35,36,39];
    tab[3] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0,22,23,30,29, 0,41,40];
    tab[4] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 5, 0,21,24, 0,28,43,42, 0];
    tab[5] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0,20,25,26,27,44,45, 0];
    tab[6] = [0, 0, 0, 0, 0, 0, 0, 0,11,10, 9, 0,19,18, 0, 0,47,46, 0];
    tab[7] = [0, 0, 0, 0, 0, 0, 0, 0,12,13,14,15,16,17, 0, 0,48,51,52];
    tab[8] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,49,50,53];
    tab[9] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,74,73, 0,69,68,55,54];
    tab[10] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,77,76,75,72,71,70,67,56,57];
    tab[11] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,78, 0, 0, 0, 0,65,66,59,58];
    tab[12] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,79, 0, 0, 0, 0,64,63,60, 0];
    tab[13] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,80, 0, 0, 0, 0, 0,62,61, 0];
    tab[14] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,81,82,83,84, 0, 0, 0, 0, 0];
    tab[15] =[0, 0, 0, 0, 0, 0, 0, 0, 0,89,88,87,86,85, 0, 0, 0, 0, 0];
    tab[16] =[0, 0, 0, 0, 0, 0, 0, 0, 0,90,91,92,93,94,95, 0, 0, 0, 0];
    tab[17] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,98,97,96, 0, 0, 0, 0];
    tab[18] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0,101,100,99,0,0, 0, 0, 0, 0];
    tab[19] =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    mus();
    init();
    x = 9;
    y = 1;

    function init() {
        resizeCanvas();
    }

    async function mus() {
        document.getElementById("bootup").play();
        bgm = document.getElementById("bg");
        await sleep(4500);
        bgm.volume = 0.2;
        bgm.play();
        
    }

    function resizeCanvas() {
        redraw();

    }


    async function redraw() {
        spawnDots(18, tab);
        await sleep(4500);
        move(18, tab);

        async function spawnDots(count, tab) {
            dctx.clearRect(0, 0, dotCanvas.width, dotCanvas.height);
            dctx.fillStyle = "#f6e58d";
            for (var x = 1; x <= count; x++) {
                for (var y = 1; y <= count; y++) {
                    if (tab[y][x] != 0) {
                        dctx.beginPath();
                        dctx.arc(x * 16.15 - 8, y * 16.15 - 8, 1.8, 0, 2 * Math.PI);

                        dctx.fill();
                        dctx.closePath();
                        //await sleep(10);
                    }

                }
            }
        }

        async function move(count, tab) {
            frame = 1;
            nxt = 2;
            y = 1;
            x = 9;
            ymov = 1;
            xmov = 9;
            SLP = 15;
            var isFirefox = typeof InstallTrigger !== 'undefined';
            if (isFirefox) {
                SLP = 10;
            }
            nom = document.getElementById("eat");
            nom.volume = 0.7;
            nom.play();

            tab[y][x] = 0;
            spawnDots(18, tab);

            while (nxt < 102) {
                mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                if (tab[y + 1][x] == nxt) {
                    ymov = y;
                    while (ymov - y < 1) {
                        mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                        if (frame == 1)
                            mctx.drawImage(img, 0, 200, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                        else if (frame == 2)
                            mctx.drawImage(img, 0, 250, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                        else if (frame == 3)
                            mctx.drawImage(img, 0, 300, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);

                        await sleep(SLP);
                        ymov = ymov + 0.1;

                    }
                    tab[y + 1][x] = 0;
                    spawnDots(18, tab);
                    y = y + 1;

                    nxt++;
                }
                else if (tab[y][x + 1] == nxt) {
                    xmov = x;
                    while (xmov - x < 1) {
                        mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                        if (frame == 1)
                            mctx.drawImage(img, 0, 50, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                        else if (frame == 2)
                            mctx.drawImage(img, 0, 100, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                        else if (frame == 3)
                            mctx.drawImage(img, 0, 150, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);

                        await sleep(SLP);
                        xmov = xmov + 0.1;

                    }
                    tab[y][x + 1] = 0;
                    spawnDots(18, tab);
                    x = x + 1;

                    nxt++;
                }
                else if (tab[y - 1][x] == nxt) {
                    ymov = y;
                    while (y - ymov < 1) {
                        mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                        if (frame == 1)
                            mctx.drawImage(img, 0, 449, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                        else if (frame == 2)
                            mctx.drawImage(img, 0, 502, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                        else if (frame == 3)
                            mctx.drawImage(img, 0, 550, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);

                        await sleep(SLP);
                        ymov = ymov - 0.1;
                    }
                    tab[y - 1][x] = 0;
                    spawnDots(18, tab);
                    y = y - 1;

                    nxt++;
                }
                else if (tab[y][x - 1] == nxt) {
                    xmov = x;
                    while (x - xmov < 1) {
                        mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                        if (frame == 1)
                            mctx.drawImage(img, 0, 350, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                        else if (frame == 2)
                            mctx.drawImage(img, 0, 400, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                        else if (frame == 3)
                            mctx.drawImage(img, 0, 450, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);

                        await sleep(SLP);
                        xmov = xmov - 0.1;


                    }
                    tab[y][x - 1] = 0;
                    spawnDots(18, tab);
                    x = x - 1

                    nxt++;
                }

                frame++;
                if (frame == 4)
                    frame = 1;

            }

            //zmaga/konec
            await sleep(200);




            nom.pause();
            bgm.pause();
            document.getElementById("won").play();

            flash();

            await sleep(10500);
            bgm.play();
            playbtn.disabled =false;
            playbtn.className = "nes-btn is-warning";

        }

        async function flash() {
            canvas = document.getElementById('canvasMaze');
            ctx = canvasMaze.getContext('2d');
            for (i = 0; i < 5; i++) {
                await sleep(1000);
                ctx.strokeStyle = "#FFFFFF";
                ctx.stroke();
                await sleep(1000);
                ctx.strokeStyle = "#0000FF";
                ctx.stroke();

            }

        }



    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    

}

//)();