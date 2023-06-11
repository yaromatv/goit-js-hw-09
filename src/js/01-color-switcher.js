const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let colorInterval = null;

function onStartBtnClick() {
  colorInterval = setInterval(setRandomBodyColor, 1000);
  startBtn.disabled = true;
}

function setRandomBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStopBtnClick() {
  if (!colorInterval) {
    return;
  }
  clearInterval(colorInterval);
  startBtn.disabled = false;
}
