const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

update();

function update() {
  const currentTime = new Date();

  const hour = currentTime.getHours();
  hourElement.innerText = addZeroPadding(hour);

  const minute = currentTime.getMinutes();
  minuteElement.innerText = addZeroPadding(minute);

  const second = currentTime.getSeconds();
  secondElement.innerText = addZeroPadding(second);

  requestAnimationFrame(update);
}
/**
 * @param num
  @returns {string}
 * 
 * 
 */
  

function addZeroPadding(num) {
  return String(num).padStart(2, '0');
}