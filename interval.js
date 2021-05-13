const totalTime = 10000;
const oldTime = Date.now();
const timerID = setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;

  const remainMSec = totalTime - diff;
  const remainSec = Math.ceil(remainMSec / 1000);
  let label = `残り${remainSec}秒`;

  if (remainMSec <= 0) {
    clearInterval(timerId);
    label = '終了';
  }
  document.querySelector('#log').innerHTML = label;
}, 1000);