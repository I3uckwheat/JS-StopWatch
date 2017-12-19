"use strict";
const timerDisplay = document.getElementById("stopWatchDisplay");
const resetButton = document.getElementById("reset");
const pastTimes = document.getElementById("pastTimes");
const startStopButton = document.getElementById("startStop");
const recordButton = document.getElementById("recordTime");
let interval;
let timerValue = 0;

startStopButton.addEventListener("click", () => {
  if(interval){
    stopClock();
  } else {
    startClock();
  }
})

resetButton.addEventListener("click", () => reset());

recordButton.addEventListener("click", () => storeTime());

function startClock(){
  interval = setInterval(() => {
    timerValue++
    timerDisplay.textContent = timerValue / 100;
  }, 10)
}

function stopClock(){
  clearInterval(interval);
  interval = null;
}

function reset(){
  stopClock();
  timerValue = 0
  timerDisplay.textContent = 0;
  pastTimes.innerHTML = "";
}

function storeTime(){
  const time = document.createElement("p");
  time.textContent = timerValue / 100;
  pastTimes.appendChild(time);
}
