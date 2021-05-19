const cbA = document.querySelector('#myColor');
cbA.addEventListener('change', (event) => {
  const value = event.target.value;

  const log = `選択された色は${value}`;
  const logEl = document.querySelector('.log');
  logEl.innerHTML = log;
  logEl.style.backgroundColor = value;
});