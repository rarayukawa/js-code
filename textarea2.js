const element = document.querySelector('#myText');
element.addEventListener('input', handleChange);

function handleChange(event) {
  const value = event.target.value;
  const htmlStr = value.split('\n').join('<br />');
  document.querySelector('.log').innerHTML = htmlStr;
}