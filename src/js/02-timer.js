import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

let timer = null;

const startButton = document.querySelector('[data-start]');
const dateChosen = document.querySelector('#datetime-picker');
const d = document.querySelector('[data-days]');
const h = document.querySelector('[data-hours]');
const m = document.querySelector('[data-minutes]');
const s = document.querySelector('[data-seconds]');

startButton.addEventListener('click', countdown);

startButton.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      startButton.disabled = false;
      zeroing();
      convertToMs();
    } else {
      startButton.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

function countdown() {
  timer = setInterval(() => {
    startButton.disabled = true;
    const dateChoosenMs = new Date(
      dateChosen.value.replace(/-/g, '/')
    ).getTime();
    const now = new Date().getTime();
    const timeLeft = dateChoosenMs - now;
    if (timeLeft < 1000) {
      clearInterval(timer);
      // startButton.disabled = false;
      Notiflix.Notify.failure('Time is over!');
    }
    const { days, hours, minutes, seconds } = convertToMs(timeLeft);

    d.innerHTML = zeroing(days);
    h.innerHTML = zeroing(hours);
    m.innerHTML = zeroing(minutes);
    s.innerHTML = zeroing(seconds);
  }, 0);
}

function zeroing(value) {
  const stringValue = String(value);
  return stringValue.padStart(2, '0');
}

function convertToMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

flatpickr(dateChosen, options);
