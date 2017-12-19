const timerDisplay = document.getElementById("stopWatchDisplay");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");
let interval;
let timerValue = 0;

startStopButton.addEventListener("click", () => {
  if(interval){
    stopClock();
  } else {
    startClock();
  }
})

resetButton.addEventListener("click", () => reset())

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
  timerValue = 0
  timerDisplay.textContent = 0;
}
