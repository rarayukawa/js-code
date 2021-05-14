const isOnline = navigator.onLine;
if (isOnline === true) {
  console.log('オンラインです');
  document.querySelector('.log').innerHTML = `オンラインです！！！！！`
} else {
  console.log('オフラインです');
  document.querySelector('.log').innerHTML = `オフラインです・・・`
}

window.addEventListener('onLine', () => {
  console.log('オンラインです');
});

window.addEventListener('offLine', () => {
  console.log('オフラインです');
});