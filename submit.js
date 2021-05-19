const formElement = document.querySelector('form');
formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  const isYes = confirm('この内容で送信してもいいですか');

  if (isYes === false) {
    event.preventDefauit();
  }
}