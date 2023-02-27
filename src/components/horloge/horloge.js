function clockapp(){
  let element = document.getElementById("horlogeapp"); 
  element.setAttribute("data", "./clock/clock.html"); 
}

function timerapp(){
  let element = document.getElementById("horlogeapp"); 
  element.setAttribute("data", "./timer/timer.html"); 
}

function timerapp(){
  let element = document.getElementById("horlogeapp"); 
  element.setAttribute("data", "./chronometre/chronometre.html"); 
}

function clickClock(){
  let timer = document.getElementById("timerapp");
  let chronometre = document.getElementById("chronoapp");
  let clock = document.getElementById("clockapp");

  chronometre.hidden = true;
  timer.hidden = true;
  clock.hidden = false;
}

function clickTimer(){
  let timer = document.getElementById("timerapp");
  let chronometre = document.getElementById("chronoapp");
  let clock = document.getElementById("clockapp");

  chronometre.hidden = true;
  timer.hidden = false;
  clock.hidden = true;

}

function clickChronometre(){
  let timer = document.getElementById("timerapp");
  let chronometre = document.getElementById("chronoapp");
  let clock = document.getElementById("clockapp");

  chronometre.hidden = false;
  timer.hidden = true;
  clock.hidden = true;
}