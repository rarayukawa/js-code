const userList = [
  { id: 1, name: '田中', address: '東京' },
  { id: 2, name: '鈴木', address: '宮城'},
  { id: 3, name: '高橋', address: '福岡'}
];

const container = document.querySelector('.container');
userList.forEach((userData => {
  container.innerHTML += `
  <div class="card">
  <h2>${userData.name}</h2>
  <p>出身地:${userData.address}</p>
  </div>
  `;
}));