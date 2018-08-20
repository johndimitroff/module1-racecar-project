/* JD: "$" = jQuery*/
/* JD: when using jQuery, you use $, then brackets, 
then what you want to refer to in speech marks within
the brackets.*/

$("h1").click(function(){
  $("h1:even").css({
    backgroundColor: "deeppink",
    border: "2px solid",
    borderRadius: "2px"
  });

  $("h1:odd").css({
    backgroundColor: "black",
    color:"orange",
  });
});

$(".guess-button").click(function(){
//generate a random number betbween 0-9
var randomNumber = Math.floor(Math.random() * 10);
//get the user's guess & convert into number
//jQuery version of .value is .val(). 
//It always returns a string.
var userGuess = Number($("input").val());
//if they're the same you win
if(userGuess === randomNumber){
  $("img").attr("src", "https://media.giphy.com/media/comaQsauPA8Bq/giphy.gif");

}
//else you lose
else {
  $("img").attr("src", "https:media.giphy.com/media/Uyl1VRmBCPir6/giphy.gif");
}
});

/* YOU WIN image: https://media.giphy.com/media/comaQsauPA8Bq/giphy.gif*/
/* YOU LOSE image: https://media.giphy.com/media/Uyl1VRmBCPir6/giphy.gif */

//PLAYLIST//

$(".song-list > li").click(function (){

  // "this" is the DOM element of the tag that was just clicked. //
  // (doesn't have jQuery methods) //
  var clickedLi = this;

  // apply the CSS to ONLY the DOM element that was just clicked. //
  // (use $ to convert the normal DOM objet to a jQuery object to use ".css()").//
 

if ($(clickedLi).hasClass("playing")){
$(clickedLi).removeClass("playing");
}
else {
  $(".song-list > li").removeClass("playing");
  $(clickedLi).addClass("playing");
}
});

$(".add-song").click(function (){
// get the user's song choice from the input tags //
  var title = $(".title-input").val();
  var artist = $(".artist-input").val();

//create the new <li> tag with its contents //
var newLi = 
$("<li><b> " + title + "<b> by " + artist + " <button>Delete</button></li>");

// find all descendant <button> tags
newLi.find("button").click(function(){
  var deleteBtn = this;
  
  //find the closest ancestor (<li>) and remove it//
  //(works in more situations that ".parent()" does)//
  $(deleteBtn).closest("li").remove();
  });
  

//add the new <li> to the existing DOM//
$(".song-list").append(newLi);

// clear the user text (set to empty string) //
$(".title-input").val("");
$(".artist-input").val("");
});
$(".song-list button").click(function(){
var deleteBtn = this;

//find the closest ancestor (<li>) and remove it//
//(works in more situatiosn that ".parent()" does)//
$(deleteBtn).closest("li").remove();
});


//HEARTS//

$(".heart").click(function(){
  // "this" is the DOM element of the tag that was just clicked. //
   // (doesn't have jQuery methods) //
  var clickedHeart = this;

  $(clickedHeart).addClass("red");

  //Make all the hearts to the left red: //
  $(clickedHeart).prevAll().addClass("red");

  // make the hearts to the right grey again: //
  $(clickedHeart).nextAll().removeClass("red");
});

// TOM WAITS //

$(".waits-title").click(function(){
  //toggle does a fade in/fade out depending on whether it's currently visible or not//
//.slideToggle() and .toggle() are also options //
  $("section").fadeToggle(5000);
});

//KEY EVENT//

$(document).keyup(function(event){
switch(event.keyCode){
case 37:
$(".tom-img").css({ transform: "rotateY(180deg)" });
break;
case 38:
$(".tom-img").css({ transform: "rotateZ(-90deg)" });
break;
case 39:
$(".tom-img").css({ transform: "rotateY(0deg)" });
break;
case 40:
$(".tom-img").css({ transform: "rotateZ(90deg)" });
break;
}
});