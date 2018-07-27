let countdown;
let hours;
let minutes;
let seconds;

const timerDisplay = document.querySelector('.display__time-left');

function timer(totalSeconds) {
  const now = Date.now();
  const then = now + totalSeconds * 1000;

  displayTimeLeft(totalSeconds)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(totalSeconds) {
  hours = Math.floor(totalSeconds / 3600);
  minutes = Math.floor((totalSeconds % 3600) / 60);
  seconds = (totalSeconds % 3600) % 60;

  const display = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function formatTime(n) {
  return n < 10 ? `0${n}` : n
}
