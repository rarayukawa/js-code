const userDataList = [
  { name: '鈴木', age: 18 },
  { name: '田中', age: 27 },
  { name: '佐藤', age: 32 },
  { name: '高橋', age: 41 },
  { name: '小笠原', age: 56 }
];

document.querySelectorAll('.button').forEach((element) => {
  element.addEventListener('click', (event) => {
    onClickButton(event);
  });
});

function onClickButton(event) {
  const button = event.target;
  const targetAge = button.dataset.age;
  const filterdList = userDataList.filter((data) => data.age >= targetAge);
  updateList(filterdList);
}

function updateList(filterdList) {
  let listHtml = '';
  for (const data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}歳</li>`;
  }
  document.querySelector('.user_list').innerHTML = listHtml;
}