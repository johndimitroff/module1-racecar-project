function Pipe (myX, myY, myWidth, myHeight) {
  this.x = myX;
  this.y = myY;
  this.width = myWidth;
  this.height = myHeight;
  this.isCrashed = false;
}

Pipe.prototype.drawMr = function () {
  if (this.isCrashed){
   ctx.fillStyle = "crimson";
    } else {
      this.x -= 2;
    if(this.x < -this.width){
      this.x = 1000;
    }
    ctx.fillStyle = "#057e04";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

function collision (rectA, rectB){
  return rectA.y + rectA.height >= rectB.y 
    && rectA.y <= rectB.y + rectB.height
    && rectA.x + rectA.width >= rectB.x
    && rectA.x <= rectB.x + rectB.width;
};


var myCanvas = document.querySelector(".flappy-canvas");
var ctx = myCanvas.getContext("2d");

//Our Celine object and her image
var celineImg = new Image (); 
celineImg.src= "./images/celine.webp";

var celine = {
  x: 0,
  y: 285,
  width: 100, 
  height: 81,
  isCrashed: false,
  drawMe: function () {
    ctx.drawImage(celineImg, this.x, this.y, this.width, this.height);
  },
  controlBoundries: function() {
    if (this.x < 0){
      this.x = 0;
    }
    if (this.y < 0){
      this.y = 0;
  }

  if (this.x > 1000 - this.width) {
    this.x = 1000 - this.width;
  }
  if (this.y > 650 - this.height){
    this.y = 650 - this.height;
  }
  }
};

//Our first pipe
var pipe1 = new Pipe(970, 0, 30, 300);
var pipe2 = new Pipe (800, 450, 30, 200);
var pipe3 = new Pipe(650, 0, 30, 250);
var pipe4 = new Pipe (1020, 350, 30, 300);
var pipe5 = new Pipe (1170, 0, 45, 200);
var pipe6 = new Pipe (1320, 400, 30, 200);

var allPipes = [pipe1, pipe2, pipe3, pipe4, pipe5, pipe6]


  var pipe1 = {
  x: 970,
  y: 0,
  width: 30,
  height: 300,
  isCrashed: false,
  drawMe: function (){
    if (this.isCrashed) {
      ctx.fillStyle = "crimson";
    } else {
      this.x -= 2;
    if(this.x < -this.width){
      this.x = 1000;
    }
    ctx.fillStyle = "#057e04";
    }
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

};

var gameOver = {
  x: 120,
  y: 330,
  opacity: 0,
  drawMe: function () {
    if (this.opacity < 1){
      this.opacity += 0.02;
    }
    //fade in the text with globalAlpha
    ctx.globalAlpha = this.opacity;
    ctx.font = "150px monospace";
    ctx.fillStyle = "rebeccapurple";
    ctx.fillText("Game Over", this.x, this.y);
    
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.strokeText("Game Over", this.x, this.y);
    ctx.globalAlpha = 1;
  }
}

// --------------------------------------------------------------------

function drawScene (){
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  celine.drawMe();

  allPipes.forEach(function (onePipe){
  onePipe.drawMe();
  });


  if(collision(celine, onePipe)) {
    celine.isCrashed = true;
    onePipe.isCrashed = true;
  }
  if (celine.isCrashed){
    gameOver.drawMe();
  }


  requestAnimationFrame(function(){
    drawScene();
  });
}

drawScene();

// --------------------------------------------------------------------

document.onkeydown = function (event) {
  if (celine.isCrashed){
    // exit the function without moving if Celine is crashed. 
    return;
  }
  switch(event.keyCode) {
    case 37: 
    celine.x -= 30;
    break;

    case 32:
    case 38:
    celine.y -= 30;
    break;

    case 39:
    celine.x += 30;
    break;

    case 40:
    celine.y += 30;
    break;
  }
  celine.controlBoundries();
};