const userDataList = [
  { id: 2, name: '鈴木' },
  { id: 10, name: '田中' },
  { id: 4, name: '佐藤' },
  { id: 29, name: '高橋' },
  { id: 101, name: '小笠原' }
];

function updateList() {
  let listHtml = '';
  for (const data of userDataList) {
    listHtml += `<li>${data.id} : ${data.name}</li>`;
  }
  document.querySelector('.user_list').innerHTML = listHtml;
}

function sortByAscending() {
  userDataList.sort((a, b) => {
    return a.id - b.id;
  });
  updateList();
}

function sortByDescending() {
  userDataList.sort((a, b) => {
    return b.id - a.id;
  });
  updateList();
}

document.querySelector('.ascending').addEventListener('click', (event) => {
  sortByAscending();
});

document.querySelector('.descending').addEventListener('click', () => {
  sortByDescending();
});

sortByAscending();