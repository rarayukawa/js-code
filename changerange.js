const element = document.querySelector('#myRange');
element.addElementListener('input', handleChange);

function handChange(event) {
  const value = event.target.value;

  document.querySelector('.log').innerHTML = `現在の値は${value}`
}