function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let timer = 0;

function backgroundColorSwitcher() {
  document.body.style.backgroundColor = getRandomHexColor();
}

buttonStart.addEventListener('click', () => {
  timer = setInterval(backgroundColorSwitcher, 1000);
  buttonStart.disabled = true;
});

buttonStop.addEventListener('click', () => {
  clearInterval(timer);
  buttonStart.disabled = false;
});
