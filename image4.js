const container = document.querySelector('.container');
for (let i = 0; i < 10; i++) {
  const img = new Image();
  img.src = `img${i}.jpg`;
  container.appendChild(img);
}