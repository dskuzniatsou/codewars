// // 😱 DESCRIPTIONS
// Write a function which takes a number and returns the corresponding ASCII char for that value.

// Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0
// For ASCII table, you can refer to http://www.asciitable.com/

// 🐱‍👤 TESTS
// const { assert } = require("chai");

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(getChar(55),'7')
//     assert.strictEqual(getChar(56),'8')
//     assert.strictEqual(getChar(57),'9')
//     assert.strictEqual(getChar(58),':')
//     assert.strictEqual(getChar(59),';')
//     assert.strictEqual(getChar(60),'<')
//     assert.strictEqual(getChar(61),'=')
//     assert.strictEqual(getChar(62),'>')
//     assert.strictEqual(getChar(63),'?')
//     assert.strictEqual(getChar(64),'@')
//     assert.strictEqual(getChar(65),'A')
//   });
// });





// ✔ SOLUTION
//my solution
function getChar(c){
 return String.fromCharCode(c)
}
console.log(getChar(65));

// best practices
// function getChar(c){
//   return String.fromCodePoint(c);
// }
