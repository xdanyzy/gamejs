
var RedDot;
var obstacle;

// fungsi dipanggil dari html <body onload="startGame()"

function startGame(){
    gamearea.start();
    RedDot = new Component(20, 20, "red", (gamearea.canvas.width) / 2, (gamearea.canvas.height) / 2);
}

// fungsi apply : untuk tambah komponen dalam canvas
// dan update setiap 10 milisaat

function areaUpdate(){
    gamearea.clear();
    RedDot.update();
    obstacle.update();
}

// buat canvas

var gamearea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 720;
        this.canvas.height = 480;

        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.alwaysupdate = setInterval(areaUpdate, 10);
    },

    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop : function() {
        clearInterval(this.alwaysupdate);
    }
}

// komponen

function Component(WIDTH, HEIGHT, COLOR, POS_X, POS_Y){
    this.WIDTH = WIDTH;
    this.HEIGHT = HEIGHT;
    this.POS_X = POS_X;
    this.POS_Y = POS_Y;

    this.update = function() {
        context_update = gamearea.context;
        context_update.fillStyle = COLOR;
        context_update.fillRect(this.POS_X, this.POS_Y, this.WIDTH, this.HEIGHT);
    }

    this.spawn = function() {
        this.POS_X = POS_X;
        this.POS_Y = POS_Y;
    }

    KeyboardEvent();
}

// event
function KeyboardEvent(){
    document.addEventListener("keydown", event => {

        document.querySelector(".caption").style.display = "none";

        if (event.key === "d"){
            RedDot.POS_X += 10;
        }

        if (event.key === "a"){
            RedDot.POS_X -= 10;
        }

        if (event.key === "w"){
            RedDot.POS_Y -= 10;
        }

        if (event.key === "s"){
            RedDot.POS_Y += 10;
        }

        if (event.key === "Escape"){
            return RedDot.spawn();
        }
    });
}

