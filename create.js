document
  .querySelector('#create-model-button')
  .addEventListener('click', displayModalWindow);

  function displayModalWindow() {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');

    const innerElement = document.createElement('div');
    innerElement.classList.add('inner');
    innerElement.innerHTML = `
    <p>モーダルウィンドウの中身です</p>
    <div class="character"></div>`;

    modalElement.appendChild(innerElement);

    document.body.appendChild(modalElement);

    innerElement.addEventListener('click', () => {
      closeModalWindow(modalElement);
    });
  }

  function closeModalWindow(modalElement) {
    document.body.removeChild(modalElement);
  }