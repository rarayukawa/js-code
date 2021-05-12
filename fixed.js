const secondElement = document.querySelector('.second');
const goalTime = new Date().getTime() + 15 * 1000;
update();
function update() {
  const currentTime = new Date().getTime();
  const leftTime = goalTime - currentTime;
  if (leftTime <= 0) {
    secondElement.innerText = '15秒経ちました';
    return;
  }

  secondElement.innerText = (leftTime / 1000).toFixed(2);

  requestAnimationFrame(update);
}

