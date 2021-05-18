setTimeout(() => {
  const container = document.querySelector('.container');
  const oldBox = document.querySelector('.old-box');
  const newBox = document.createElement('div');

  newBox.textContent = '新ボックス';
  newBox.classList.add('new-box', 'box');
  container.replaceChild(newBox, oldBox);
}, 3000);
