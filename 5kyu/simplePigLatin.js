// 😱 DESCRIPTIONS
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// 🐱‍👤 TESTS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });


// ✔ SOLUTION

// my solution
function pigIt(str){
 return str.replace(/\b(\w)(\w*)\b/g, '$2$1ay');
}

console.log(pigIt('Pig latin is cool'));

//BEST PRACTICES
// function pigIt(str) {
//   return str.replace(/\w+/g, (w) => {
//     return w.slice(1) + w[0] + 'ay';
//   });
// }