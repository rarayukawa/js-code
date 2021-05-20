const img = document.querySelector('#myImage');
img.onload = () => {
  img.classList.remove('loading');
};
img.scr = 'img5.JPG';
img.classList.add('loading');