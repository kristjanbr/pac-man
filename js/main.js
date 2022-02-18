/*----CANVAS INIT.------*/
var canvas = document.getElementById('canvasMaze');
var ctx = canvas.getContext('2d');
ctx.scale(2, 2);

var dotCanvas = document.getElementById('pacDots');
var dctx = dotCanvas.getContext('2d');
dctx.scale(2, 2);

var fruitCanvas = document.getElementById('fruity');
var fctx = fruitCanvas.getContext('2d');
fctx.scale(2, 2);

var movCanvas = document.getElementById('moving');
var mctx = movCanvas.getContext('2d');
mctx.scale(2, 2);

/*----LOCALSTORAGE.------*/
if (localStorage.getItem("tokens") == null) {
    localStorage.setItem("tokens", "1");
}
var tokens = parseInt(localStorage.getItem("tokens"));

var playbtn = document.getElementById('playbtn');

var coins = document.getElementById('coins');
coins.innerHTML = "No. of tokens: " + tokens;

if (tokens <= 0) {
    playbtn.disabled = true;
    playbtn.className = "nes-btn is-disabled";
}

/*----IMAGES INIT.------*/
var img = new Image();
img.src = 'img/pacman.png';
var f_img = new Image();
f_img.src = 'img/fruits.png';


randmaze = Math.floor(Math.random() * 3);
localStorage.setItem("mazeno", randmaze.toString());
/*
a();
async function a() {
    const response = await fetch("js/mazes.json");
    const data = await response.json();
    tab = data[1].path;
    spawnDotsa(18, tab);
}
async function spawnDotsa(count, tab) {
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
}*/
isplaying = false;
redrawMazeTemp(randmaze)
async function redrawMazeTemp(randmaze) {
    const response = await fetch("js/mazes.json");
    const data = await response.json();
    tab = data[randmaze].layout;
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

async function start() {
    console.log("start");
    var maze_no = parseInt(localStorage.getItem("mazeno"));
    console.log(maze_no)
    redrawMaze(maze_no);
    isplaying = true;
    tokens = parseInt(localStorage.getItem("tokens"));
    tokens--;
    localStorage.setItem("tokens", tokens.toString());
    var coins = document.getElementById('coins');
    coins.innerHTML = "No. of tokens: " + tokens;

    document.getElementById("bg").pause();

    mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);

    var playbtn = document.getElementById('playbtn');
    playbtn.disabled = true;
    playbtn.className = "nes-btn is-disabled";

    const response = await fetch("js/mazes.json");
    const data = await response.json();
    tab = data[maze_no].path;
    finish = data[maze_no].end;
    /*var tab = new Array(20);
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
*/
    mus();
    spawnDots(18, tab);
    var fruit_loc = Math.floor(Math.random() * 65 - 15 + 1) + 15;
    fruit_tab = decideFruit(data, fruit_loc, maze_no)
    spawnFruit(18, fruit_tab)
    await sleep(4500);
    move(tab, finish);
    x = 9;
    y = 1;


    function decideFruit(data, fruit_loc, maze_no) {
        console.log("decidefruit");
        var fruit_tab = Array.from(Array(20), () => new Array(20).fill(0));
        tab = data[maze_no].path;
        for (i = 1; i < tab.length; i++) {
            for (j = 1; j < tab[i].length; j++) {
                if (tab[i][j] == fruit_loc) {
                    fruit_tab[i][j] = 1;
                }
            }
        }
        return fruit_tab;
    }

    async function mus() {
        document.getElementById("bootup").play();
        bgm = document.getElementById("bg");
        await sleep(4500);
        bgm.volume = 0.2;
        bgm.play();

    }

    async function redrawMaze(randmaze) {
        console.log("redrawmaze");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const response = await fetch("js/mazes.json");
        const data = await response.json();
        tab = data[randmaze].layout;
        j = 0;
        ctx.beginPath();
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
        ctx.closePath();
    }

    async function spawnDots(count, tab) {
        console.log("pawndots");
        dctx.clearRect(0, 0, dotCanvas.width, dotCanvas.height);
        dctx.fillStyle = "#f6e58d";
        for (var x = 1; x <= count; x++) {
            for (var y = 1; y <= count; y++) {
                if (tab[y][x] != 0) {
                    dctx.beginPath();
                    dctx.arc(x * 16.15 - 8, y * 16.15 - 8, 1.8, 0, 2 * Math.PI);
                    dctx.fill();
                    dctx.closePath();
                }

            }
        }
    }

    async function spawnFruit(count, tab) {
        console.log("spawnfruit");
        console.log(tab);
        fctx.clearRect(0, 0, fruitCanvas.width, fruitCanvas.height);
        for (var x = 1; x <= count; x++) {
            for (var y = 1; y <= count; y++) {
                if (tab[y][x] == 1) {
                    ran = Math.floor(Math.random() * 3);
                    fctx.drawImage(f_img, 0, (12 * ran), 12, 12, x * 16.15 - 12, y * 16.15 - 12, 10, 10);
                }

            }
        }
    }

    async function move(tab, finish) {
        console.log("move");
        frame = 1;
        nxt = 2;
        y = 1;
        x = 9;
        ymov = 1;
        xmov = 9;
        SLP = 15;
        /*var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            SLP = 10;
        }*/
        nom = document.getElementById("eat");
        nom.volume = 0.7;
        nom.play();

        tab[y][x] = 0;
        spawnDots(18, tab);

        while (nxt < finish) {
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
            if (nxt == fruit_loc + 1) {
                fctx.clearRect(0, 0, fruitCanvas.width, fruitCanvas.height);
                await sleep(SLP);
                document.getElementById("food").play();
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
        isplaying = false;

        gen();

        if (tokens > 0) {
            playbtn.disabled = false;
            playbtn.className = "nes-btn is-warning";
        }
    }

    async function gen(){
        mze = Math.floor(Math.random() * 3);
        if(parseInt(localStorage.getItem("mazeno")==mze)){
            gen();
        }
        else{
            localStorage.setItem("mazeno", mze.toString());
        }
    }

    async function flash() {
        canvas = document.getElementById('canvasMaze');
        ctx = canvas.getContext('2d');
        for (i = 0; i < 5; i++) {
            await sleep(1000);
            ctx.strokeStyle = "#FFFFFF";
            ctx.stroke();
            await sleep(1000);
            ctx.strokeStyle = "#0000FF";
            ctx.stroke();

        }

    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}
var oglasi = new Array(6);
oglasi[0] = "https://www.youtube.com/watch?v=SJqEfdGzunA";
oglasi[1] = "https://www.youtube.com/watch?v=i5Amt4ecYBE";
oglasi[2] = "https://www.youtube.com/watch?v=kmkjGPgMwhw";
oglasi[3] = "https://www.youtube.com/watch?v=vGJZvhDh5ts";
oglasi[4] = "https://www.youtube.com/watch?v=cUofaxVXU-g";
oglasi[5] = "https://www.youtube.com/watch?v=WYZaD3iiWGU";

function watchAd() {
    var a = oglasi[Math.floor(Math.random() * 6)];

    Swal.fire({
        title: 'Do you want to see an ad?',
        text: "You will get one token per ad!",
        iconHtml: '<img src="img/dollar.png">', // OKAY...
        customClass: {
            icon: 'no-border',
            confirmButton: 'no-border',
            cancelButton: 'no-border'
        },
        showCancelButton: true,
        confirmButtonColor: '#ffa801',
        cancelButtonColor: '#485460',
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(a);
            var tokens = parseInt(localStorage.getItem("tokens"));
            tokens++;
            localStorage.setItem("tokens", tokens.toString());

            var coins = document.getElementById('coins');
            coins.innerHTML = "No. of tokens: " + tokens;

            var playbtn = document.getElementById('playbtn');
            if (tokens > 0 && isplaying == false) {
                playbtn.disabled = false;
                playbtn.className = "nes-btn is-warning";
            }
        }
    })

}