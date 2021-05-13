const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const label = `${month}月${day}日`;

document.querySelector('#log').innerHTML = `今日は${label}です`;