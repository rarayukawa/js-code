const balloon = document.querySelector('#balloon');
const paragraph = document.querySelector('.paragraph');

paragraph.addEventListener('selectstart', () => {
  paragraph.addEventListener(
    'mouseup',
    (event) => {
      const selectionCharacters = window.getSelection().toString();

      if (selectionCharacters.length > 0) {
        balloon.innerHTML = selectionCharacters;
        balloon.classList.add('on');
        balloon.style.left =
          `${event.clientX - balloon.clientWidth / 2}px`;
        balloon.style.top =
        `${event.clientY - balloon.clientHeight * 2}px`;
      } else {
        removePopup();
      }
    },
    {
      once: true
    }
  );
});

balloon.addEventListener('click', removePopup);

function removePopup() {
  balloon.classList.remove('on');
}