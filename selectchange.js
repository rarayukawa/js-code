const element = document.querySelector('#mySelect');
element.addEventListener('change', handleChange);

function handleChange(event) {
  const value = element.value;

  const log = `選択されているのは${value}`;
  document.querySelector('.log').innerHTML = log;
}
