const element = document.querySelector('#myfile');
 element.addEventListener('change', (event) => {
   const target = event.target;
   const files = target.files;
   const file = files[0];

   alert(`${file.name}が選択されました`);
 });