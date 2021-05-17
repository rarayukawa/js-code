const container = document.querySelector('.container');
const myBox1 = document.querySelector('#myBox');
const myBox2 = document.querySelector('#myBox2');
const box2 = document.querySelector('#box2');

setTimeout (() => {
  container.insertBefore(myBox1, container.firstElementChild);
}, 3000);

setTimeout(() => {
  container.insertBefore(myBox2,box2);
}, 4000);