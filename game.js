//DOM selector
var h1 = document.querySelector("h1");
var startermole = document.querySelector("#mole");
var starterdirt = document.querySelector("#mud");
var startbtn = document.querySelector("#start");
var points = document.querySelector(".points");
var dirt = document.querySelectorAll(".dirt");
var mole = document.querySelectorAll(".mole");
var points2 = document.querySelector(".points2");
var p = 0;

function start() {
  var pp = 60000;

  h1.style.visibility = "hidden";
  startermole.style.visibility = "hidden";
  starterdirt.style.visibility = "hidden";
  startbtn.style.visibility = "hidden";
  points.style.visibility = "visible";
  points2.style.visibility = "visible";
  dirt[0].style.visibility = "visible";
  for (var i = 0; i < 6; i++) {
    dirt[i].style.visibility = "visible";
  }
  
  startti();

  setInterval(visi, 1000);

  function visi() {
    var random = Math.floor(Math.random() * 6);
    mole[random].style.visibility = "visible";

    setTimeout(hidi, 800);

    function hidi() {
      mole[random].style.visibility = "hidden";
    }
  }
  setTimeout(result, pp);

  function result() {
    if (pp == 60000) {
      console.log("result");
      console.log(p);
      localStorage.setItem("point", p);
      window.location.href = "gameEnd.html";
    }
  }


}
function point() {
  p = p + 1;
  document.getElementById("score").innerHTML = p;
}
function play() {
  var audio = new Audio("./images/Powerful-Trap-.mp3");
  audio.play();
}




var timer; 
var timeLeft = 60; 
function gameOver() {
 
  cancelInterval(timer);


}

function updateTimer() {
  timeLeft = timeLeft - 1;
  if(timeLeft >= 0)
 
    document.getElementById('score2').innerHTML=timeLeft;
  else {
    gameOver();
  }
}

function startti() {

  timer = setInterval(updateTimer, 1000);
  
 
  updateTimer();
  

}
