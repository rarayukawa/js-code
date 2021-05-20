const srcMap = new Map();
window.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    srcMap.set(img, img.dataset.src);
    img.removeAttribute('src');
  });
});

const byn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  const imgs = document.querySelectorAll('img');
  imgs.forEach((img) => {
    const source = srcMap.get(img);
    img.src = source;
  });
});