const oldTime = Date.now();
setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;
  const sec = Math.floor(diff / 1000);
  document.querySelector('#log').innerHTML = `${sec}秒が経過`;
}, 1000);