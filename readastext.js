const element = document.querySelector('#myFile');
const pEl = document.querySelector('.log');

element.addEventListener('input', (event) => {
  const target = event.target;
  const files = target.files;
  const file = files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    pEl.textContent = reader.result;
  });
  reader.readAsText(file);
});