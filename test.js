const phoneNumberText = document.querySelector('#phoneNumberText');
const warningMessage = document.querySelector('#warningMessage');

phoneNumberText.addEventListener('keyup', () => {
  const phoneNumber = phoneNumberText.value;
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

  if (/^[0][0-9]{9,10}$/.test(trimmedPhoneNumber) === false) {
    warningMessage.innerText = '電話番号を正しく入力してください';
  } else {
    warningMessage.innerText = '';
  }
});