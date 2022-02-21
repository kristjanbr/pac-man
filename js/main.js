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
}

/*----IMAGES INIT.------*/
var img = new Image();
img.src = 'img/pacman.png';
var f_img = new Image();
f_img.src = 'img/fruits.png';


randmaze = Math.floor(Math.random() * 3);
localStorage.setItem("mazeno", randmaze.toString());
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
    var maze_no = parseInt(localStorage.getItem("mazeno"));
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

    const response = await fetch("js/mazes.json");
    const data = await response.json();
    tab = data[maze_no].path;
    finish = data[maze_no].end;
    mus();
    spawnDots(18, tab);
    var fruit_loc = Math.floor(Math.random() *(65-15+1) + 15);
    fruit_tab = decideFruit(data, fruit_loc, maze_no)
    spawnFruit(18, fruit_tab)
    await sleep(4500);
    move(tab, finish);
    x = 9;
    y = 1;


    function decideFruit(data, fruit_loc, maze_no) {
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
        playbtn.disabled = false;
        playbtn.onclick = halt;
        playbtn.innerHTML = 'Pause';

        frame = 1;
        nxt = 2;
        y = 1;
        x = 9;
        ymov = 1;
        xmov = 9;
        SLP = 15;
        boolSLP = false;
        boolAfterSLP = false;
        /*var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            SLP = 10;
        }*/

        nom = document.getElementById("eat");
        nom.volume = 0.7;
        nom.play();
        async function halt(){
            document.getElementById("infoMaze").style.visibility = "visible";
            nom.pause();
            playbtn.onclick = cont;
            playbtn.innerHTML = 'Resume';
            boolSLP=true;
        }
        async function cont(){
            document.getElementById("infoMaze").style.visibility = "hidden";
            nom.play();
            boolSLP=false;
            boolAfterSLP=true;
            playbtn.onclick = halt;
            playbtn.innerHTML = 'Pause';
        }
        
        tab[y][x] = 0;
        spawnDots(18, tab);

        while (nxt < finish) {
            if (tab[y + 1][x] == nxt) { 
                while (ymov - y < 1 && !boolSLP) {
                    mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                    if (frame == 1)
                        mctx.drawImage(img, 0, 200, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                    else if (frame == 2)
                        mctx.drawImage(img, 0, 250, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                    else if (frame == 3)
                        mctx.drawImage(img, 0, 300, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);

                    await sleep(SLP);
                    ymov = ymov + 0.1;
                    boolAfterSLP=false;

                }
                if(!boolSLP){
                    tab[y + 1][x] = 0;
                    spawnDots(18, tab);
                    y = y + 1;

                    nxt++;
                }
                //ymov = y;
                
            }
            else if (tab[y][x + 1] == nxt) {
                while (xmov - x < 1 && !boolSLP) {
                    mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                    if (frame == 1)
                        mctx.drawImage(img, 0, 50, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                    else if (frame == 2)
                        mctx.drawImage(img, 0, 100, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                    else if (frame == 3)
                        mctx.drawImage(img, 0, 150, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);

                    await sleep(SLP);
                    xmov = xmov + 0.1;
                    boolAfterSLP=false;

                }
                if(!boolSLP){
                    tab[y][x + 1] = 0;
                    spawnDots(18, tab);
                    x = x + 1;

                    nxt++;
                }
                //xmov = x;
            }
            else if (tab[y - 1][x] == nxt) {
                while (y - ymov < 1 && !boolSLP) {
                    mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                    if (frame == 1)
                        mctx.drawImage(img, 0, 449, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                    else if (frame == 2)
                        mctx.drawImage(img, 0, 502, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);
                    else if (frame == 3)
                        mctx.drawImage(img, 0, 550, 33, 33, x * 16.15 - 12, ymov * 16.15 - 12, 10, 10);

                    await sleep(SLP);
                    ymov = ymov - 0.1;
                    boolAfterSLP=false;

                }
                if(!boolSLP){
                    tab[y - 1][x] = 0;
                    spawnDots(18, tab);
                    y = y - 1;

                    nxt++;
                } 
                //ymov = y;
            }
            else if (tab[y][x - 1] == nxt) {                    
                while (x - xmov < 1 && !boolSLP) {
                    mctx.clearRect(0, 0, movCanvas.width, movCanvas.height);
                    if (frame == 1)
                        mctx.drawImage(img, 0, 350, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                    else if (frame == 2)
                        mctx.drawImage(img, 0, 400, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);
                    else if (frame == 3)
                        mctx.drawImage(img, 0, 450, 33, 33, xmov * 16.15 - 12, y * 16.15 - 12, 10, 10);

                    await sleep(SLP);

                    xmov = xmov - 0.1;
                    boolAfterSLP=false;

                }
                if(!boolSLP){
                    tab[y][x - 1] = 0;
                    spawnDots(18, tab);
                    x = x - 1

                    nxt++;
                }
                //xmov = x;
            }
            if(!boolSLP){
                if (nxt == fruit_loc + 1) {
                    fctx.clearRect(0, 0, fruitCanvas.width, fruitCanvas.height);
                    await sleep(SLP);
                    document.getElementById("food").play();
                }
                frame++;
                if (frame == 4)
                    frame = 1;
            }
            else{
                await sleep(100);
            }

        }

        //zmaga/konec
        await sleep(200);

        nom.pause();
        bgm.pause();
        document.getElementById("won").play();

        document.getElementById("infoMaze").style.visibility = "hidden";
        playbtn.disabled=true;
        flash(); //<--- onclick && innerHTML 'start'

        await sleep(10500);
        bgm.play();
        isplaying = false;

        gen();

        if (tokens > 0) {
            playbtn.disabled = false;
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

        playbtn.onclick = start;
        playbtn.innerHTML = 'Start';

    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    function sleepbad(miliseconds) {
        var currentTime = new Date().getTime();
     
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
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
            }
        }
    })

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}