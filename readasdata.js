const element = document.querySelector('#myFile');
const imgEl = document.querySelector('.log img');

element.addEventListener('input', (event) => {
  const target = event.target;
  const files = target.files;
  const file = files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    imgEl.src = reader.result;
  });
  reader.readAsDataURL(file);
});