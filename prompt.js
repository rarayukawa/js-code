const text = prompt('どうですか？', 'デフォルト文言');
console.log(text);
document.querySelector('.log').innerHTML = text;