const targetBox = document.querySelector('.box');
const logArea = document.querySelector('.log');

targetBox.addEventListener('touchstart', () => {
  logArea.innerHTML = 'タッチ開始';
});

targetBox.addEventListener('touchmove', () => {
  logArea.innerHTML = 'タッチ位置移動';
});

targetBox.addEventListener('touchend', () => {
  logArea.innerHTML = 'タッチ終了';
});