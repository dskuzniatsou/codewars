// 😱 DESCRIPTIONS
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// 🐱‍👤 TESTS
//     assert.strictEqual(fakeBin('45385593107843568'), '01011110001100111');
//     assert.strictEqual(fakeBin('509321967506747'), '101000111101101'); 
//     assert.strictEqual(fakeBin('366058562030849490134388085'), '011011110000101010000011011');

// ✔ SOLUTION
//my solution

function fakeBin(x){
return x.replace(/[1234]/g, '0').replace(/[56789]/g,'1')
}
console.log(fakeBin("058562030849490134388"));

//best practices
// function fakeBin(x) {
//   return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }

// function fakeBin(x) {
//   return x.replace(/\d/g, d => d < 5 ? 0 : 1);
// }