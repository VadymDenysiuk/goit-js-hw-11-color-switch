const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]')
}
let intervalId = null;

refs.startBtn.addEventListener('click', onStartClick)

function onStartClick() {
  intervalId = setInterval(changeColor, 1000)
  refs.startBtn.setAttribute('disabled', 'disabled')
}
function changeColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
}

refs.stopBtn.addEventListener('click', onStopClick)

function onStopClick() {
  clearInterval(intervalId);
  refs.startBtn.removeAttribute('disabled')
}