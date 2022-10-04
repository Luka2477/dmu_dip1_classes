let intervalID = undefined;
let time = 0;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const timer = document.getElementById("timer");

const startTimer = () => {
  if (intervalID) return;

  intervalID = setInterval(() => {
    time += 10;
    tempTime = time;
    milliseconds = tempTime % 1000;
    tempTime -= milliseconds;
    seconds = tempTime % 60000;
    tempTime -= seconds;
    minutes = tempTime / 60000;
    timer.innerHTML = `${(minutes + "").padStart(2, "0")}:${(
      seconds / 1000 +
      ""
    ).padStart(2, "0")}.${(milliseconds / 10 + "").padStart(2, "0")}`;
  }, 10);
};

const stopTimer = () => {
  clearInterval(intervalID);
  intervalID = undefined;
};
