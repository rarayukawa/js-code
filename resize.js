const widthLog = document.querySelector('#widthLog');
const heightLog = document.querySelector('#heightLog');

window.addEventListener('resize', () => {
  widthLog.innerText = `${window.innerWidth}px`;
  heightLog.innerText = `${window.innerHeight}px`;
});