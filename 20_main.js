const a = 10;
const b = 20;

console.log(a < b); //結果: true
console.log(a > b); //結果: false

// iphoneかどうか
const isIOs =navigator.userAgent.includes('iPhone');

if (isIOs) {
  alert('iPhoneからのアクセス')
}

//こんにちは鈴木さんとアラート表示
const userName = '鈴木';
if (userName) {
  alert('こんにちは${userName}さん');
}

//addressが''なので、アラートは表示されない
const address = '';
if (address) {
  alert('あなたは${userName}に住んでいますね？')
}

//JavaScriptに「a」が含まれているかどうか
const flg = 'JavaScript'.includes('a');
console.log(!flg);

console.log(!'鈴木');
console.log(!24);
console.log(![1,2,3]);

console.log(!!'鈴木');
console.log(!!24);
console.log(!![1,2,3]);