const familyNameText = document.querySelector('#familyNameText');
const firstNameText = document.querySelector('#firstNameText');
const fullName = document.querySelector('#fullName');

firstNameText.addEventListener('keyup', onKeyUp);
familyNameText.addEventListener('keyup', onKeyUp);

function onKeyUp() {
  const familyName = familyNameText.value;
  const firstName = firstNameText.value;
  fullName.innerHTML = familyName + ' ' + firstName;
}