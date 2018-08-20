function simulationMessage (message) {
  var newLi = document.createElement("li");

  newLi.innerHTML = message;

  var ulTag = document.querySelector("ul");
  ulTag.appendChild(newLi);
}

simulationMessage("Let's order some CHINESE food!");
setTimeout(function () {
  simulationMessage("Chinese food has arrived!");
}, 10000);

simulationMessage("Let's order some ITALIAN food 🍕");
setTimeout(function () {
  simulationMessage("Italian food has arrived");
}, 6000);

simulationMessage("Let's order some CHINESE food 🍜️");
setTimeout(function () {
  simulationMessage("Billy has arrived instead of Chinese Food after 15 seconds!🧛‍!");
}, 15000);

simulationMessage("Let's order some MEXICAN food 🌮");;
setTimeout(function (){
  simulationMessage("Mexican food has arrived");
 }, 2000);

 simulationMessage("TOO DESPERATE, having a coffee ☕️")

 //setTimeOUt is the asynchronous process. simulationMessage is the callback.//
 

 //----------------------------------------------------------------------------------------

 var alarmButton = document.querySelector(".alarm-start");
 var alarmH2 = document.querySelector(".alarm-message");

 alarmButton.onclick = function () {
  alarmH2.innerHTML = "Alarm Set...";

  setTimeout(function () {
    alarmH2.innerHTML = "🚨 10 seconds have passed 🚨";
  }, 10000);
 };
 

  //----------------------------------------------------------------------------------------

  var countdownStartButton = document.querySelector(".countdown-start");
  var countdownStopButton = document.querySelector(".countdown-message");
  var countdownH2 = document.querySelector(".countdown-message");
  var countdownId;
  
  countdownStartButton.onclick = function () {
  var count = 20;
  countdownH2.innerHTML = 20;

  //stop old countdown before starting a new one - 
  clearInterval(countdownId);

  //save the interval's ID so we can stop it later - 
  countdownId = 
  setInterval(function () {
    count -= 1;
    countdownH2.innerHTML = count;
  }, 1000);
};

countdownStopButton.onclick = function () {
  clearInterval(countdownId);
};
