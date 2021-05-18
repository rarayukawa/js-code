const weatherElement = document.querySelector('#weather');
setTimeout(() => {
  weatherElement.innerHTML = '気温は<strong>-3℃</strong>の予想です。';
}, 3000);