const element = document.querySelector('#mySelect');
const value = element.value;
const log = `選択させているのは${value}です`;
document.querySelector('.log').innerHTML = log;