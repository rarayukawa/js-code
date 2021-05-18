const weatherElement = document.querySelector('#weather');

setTimeout(() => {
  weatherElement.textContent = '気温は２４℃の予想です';
}, 3000);