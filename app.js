var miliSec = 0;
var sec = 0;
var minute = 0;
var hour = 0;
var display = document.getElementById("display");
var interval;
var startBtn = document.getElementById("startBtn");
function timer() {
  miliSec++;
  if (miliSec === 100) {
    miliSec = 0;
    sec++;
  }
  if (sec > 59) {
    sec = 0;
    minute++;
  }
  if (minute > 59) {
    minute = 0;
    hour++;
  }
  if (hour > 23) {
    hour = 0;
  }
  display.innerHTML = `${hour}:${minute}:${sec}:${miliSec}`;
}

function startTimer() {
  interval = setInterval(timer, 10);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(interval);
  startBtn.disabled = false;
}
function resetTimer() {
  clearInterval(interval);
  display.innerHTML = `00:00:00:00`;
  miliSec = 0;
  sec = 0;
  minute = 0;
  hour = 0;
  startBtn.disabled = false;
}
