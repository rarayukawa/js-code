const container = document.querySelector('.container');
const myBox = document.querySelector('#myBox');

setTimeout(() => {
  container.appendChild(myBox);
}, 3000);