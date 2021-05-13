const date = new Date();
const hour = date.getHours();
let meridiem;
let hour2;
if (hour < 12) {
  meridiem = '午前';
  hour2 = hour;
} else {
  meridiem = '午後';
  hour2 = hour - 12;
}

const label = `${meridiem}${hour2}時`;

document.querySelector('#log').innerHTML = `現在時刻は${label}です`;