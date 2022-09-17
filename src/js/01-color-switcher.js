function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

stopButton.disabled = true;
let timer = 0;

startButton.addEventListener('click', onStartBtnClick);

function onStartBtnClick(e) {
  e.target.disabled = true;
  stopButton.disabled = false;

  changeBodyColor();
  timer = setInterval(changeBodyColor, 1000);

  stopButton.addEventListener('click', onStopBtnClick);
  startButton.removeEventListener('click', onStartBtnClick);
}

function onStopBtnClick(e) {
  e.target.disabled = true;
  startButton.disabled = false;

  clearInterval(timer);

  startButton.addEventListener('click', onStartBtnClick);
  stopButton.removeEventListener('click', onStopBtnClick);
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
