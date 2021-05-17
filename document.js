const themeChangeButton =
document.querySelector('.theme-change-button');

themeChangeButton.addEventListener('click', () => {
  document.body.classList.toggle('theme-dark');
});