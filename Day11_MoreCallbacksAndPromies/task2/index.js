let intervalID = undefined;
let startTime = 0;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const timer = document.getElementById("timer");

const startTimer = () => {
  if (intervalID) return;

  startTime = new Date().getTime();
  intervalID = setInterval(() => {
    timer.innerHTML = new Date().getTime() - startTime;
  }, 1);
};

const stopTimer = () => {
  clearInterval(intervalID);
  intervalID = undefined;
};
