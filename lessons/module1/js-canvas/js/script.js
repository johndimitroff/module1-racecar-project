// get the <canvas> tag from the document //
var myCanvas = document.querySelector(".my-canvas");

//get the context object (has all the methods to draw things on the canvas)//
var ctx = myCanvas.getContext("2d");

// set color of fill//
ctx.fillStyle = "orange";

//draw a solid (filled) rectangle - parameters (x,y, size)- 
//you state where you want the rectangle in the canvas how big you want it to be //
ctx.fillRect(5, 5, 30, 15);

//set color of outline//
ctx.strokeStyle = "#aef435";
//draw a(n empty) rectangle outline (x,y) - width, height // 
ctx.strokeRect(40, 40, 20, 55);

ctx.fillStyle = "rgb(30, 70, 255)";
drawCircle(200, 100, 75);

ctx.fillStyle = "rgb(255, 70, 30)";
drawCircle(200, 100, 35);


//starts a custom drawing//
ctx.beginPath();

//draw a circle (x, y, radius, startAngle, endAngle -- in radions, not degrees)//
ctx.arc(400, 100, 50, 0, toRadians(135));

//fill or outline drawing in order to be able to actually see it//
ctx.stroke();

//ends the custom drawing//
ctx.closePath();

// draw a semi-circle//
ctx.beginPath();
ctx.arc(400, 100, 50, 0, toRadians(135));
ctx.stroke();
ctx.closePath();


//everything I draw after this will be 50% opacity (alpha);
ctx.fillStyle - "black";
ctx.globalAlpha = 0.5;
ctx.fillRect(350, 50, 100, 100);


var princeImg = new Image ();
//specify "src" as if it was from the HTML document//
princeImg.src = "./images/prince.webp";

princeImg.onload = function () {
  ctx.globalAlpha = 1;
  //draw the image on the screen (image, x, y,(position) width, height(size));
  ctx.drawImage(princeImg, 700, 200, 300, 214);
};

//--------------------------------
//if you're drawing a lot of circles/curves, you could use a function 
//like this to abstract the methods you'd use for doing so //
function drawCircle(x, y, radius){
  ctx.beginPath();
  ctx.arc(x,y, radius, 0, toRadians(360));
  ctx.fill();
  ctx.closePath();
}
//function for turning radians into degrees//
function toRadians(degrees){
  return degrees * (Math.PI / 180);
}

