var myCanvas=document.querySelector(".canvas-tag");
var ctx = myCanvas.getContext("2d");

var princeImg = new Image();

princeImg.src = "./images/prince.webp";

var ghostImg = new Image ();

ghostImg.src = "./images/ghost.gif";

var princeWidth = 300;
var princeHeight = 214;
var ghostX = 400;
var ghostY = 550;

function drawScene () {
  //erase the whole scene before drawing(x, y, width, height)
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
// automatically update Prince's variables (automatic movement)
  princeWidth += 2;

  if(princeWidth === myCanvas.width * 2){
    princeWidth = 300;
  }
  princeHeight = princeWidth * (214 / 300);

  //draw prince's image (image, x, y, width, height)
ctx.drawImage(princeImg, 0, 0, princeWidth, princeHeight);

//draw ghost image (image, x, y, width, height)
ctx.drawImage(ghostImg, ghostX, ghostY, 100, 100);

//ask the browser for the enxt chance to re-draw the scene
requestAnimationFrame(function (){
//this loops because the function is calling itself
  drawScene();
});
}

drawScene();

//------------------------------------------------------------------------------------

//keydown event handler for ghost's movement (when user hits any key)
document.onkeydown = function (event) {
  switch(event.keyCode){
    case 37://left arrow
  ghostX -= 30;
  break;

  case 32:
  case 38: //up arrow
  ghostY -=30;
  break;

  case 39: //right arrow
  ghostX +=30;
  break;

  case 40: //down arrow
  ghostY += 30;
  break;
}


// limit ghost's movements so that if user moves it offscreen it returns to center position
if (ghostX <= -100 || ghostX >= 1000 || ghostY <=-100 || ghostY >= 650) {
  ghostX = 400;
  ghostY = 275;
}
};