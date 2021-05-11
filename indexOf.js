const myString = 'Javascriptを覚えよう';

const a1 = myString.indexOf('JavaScript');
console.log(a1);

const a2 = myString.indexOf('覚えよう');
console.log(a2);

const a3 = myString.indexOf('a');
console.log(a3);

const b1 = myString.indexOf('HTML');
console.log(b1);

const b2 = myString.indexOf('j');
console.log(b2);

const c1 = myString.indexOf('JavaScript', 4);
console.log(c1);

const targetString = 'JavaScriptを覚えよう'

document.querySelector('.result1').innerHTML = targetString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML = targetString.indexOf('覚えよう');
document.querySelector('.result3').innerHTML = targetString.indexOf('a');
document.querySelector('.result4').innerHTML = targetString.indexOf('HTML');
document.querySelector('.result5').innerHTML = targetString.indexOf('j');
document.querySelector('.result6').innerHTML = targetString.indexOf('JavaScript');
