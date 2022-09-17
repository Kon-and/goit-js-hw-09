function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const timer = null;
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const backgroundColorSwitcher = function () {
  body.style.backgroundColor = getRandomHexColor();
};

startButton.addEventListener('click', () => {
  timer = setInterval(backgroundColorSwitcher, 1000);
  startButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  startButton.disabled = false;
});
