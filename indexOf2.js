const myString = 'JavaScriptを覚えよう';

const a1 = 'JavaScriptを覚えよう'.includes('JavaScript');
console.log(a1);

const a2 = 'JavaScriptを覚えよう'.startsWith('覚えよう');
console.log(a2);

const a3 = 'JavaSCriptを覚えよう'.endsWith('覚えよう');
console.log(a3);

const targetString = 'JavaScriptを覚えよう';

document.querySelector('.result1').innerHTML = targetString.includes('JavaScript');
document.querySelector('.result2').innerHTML = targetString.includes('覚えよう');
document.querySelector('.result3').innerHTML = targetString.startsWith('覚えよう');
document.querySelector('.result4').innerHTML = targetString.endsWith('覚えよう');