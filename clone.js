setTimeout(() => {
  const clonedBox = document.querySelector('#myBox').cloneNode(true);
  document.querySelector('.container').appendChild(clonedBox);
}, 3000);