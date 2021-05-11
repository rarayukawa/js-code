const imageName = 'image1.png';
imageName.replace('1,png', '2.png');

const inputText = '鈴木\n一郎';
inputText.replace('\n', '');

let phoneNumber = '090-1234-5678';
phoneNumber.replace('-', '');

phoneNumber.replace(/-/g, '');

document.querySelector('#submitButton').addEventListener('click', (event) => {
  const phoneNumber = document.querySelector('#phoneNumberText').value;
  const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');
  alert(`電話番号は${trimmedPhoneNumber}です`);
  event.preventDefault();
})