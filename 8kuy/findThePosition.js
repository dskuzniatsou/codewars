// 😱 DESCRIPTIONS
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(position("a"),"Position of alphabet: 1");
//     assert.strictEqual(position("z"),"Position of alphabet: 26");
//     assert.strictEqual(position("e"),"Position of alphabet: 5");
//   });
// });


// ✔ SOLUTION
//my solution

function position(letter){
return `Position of alphabet: ${letter.charCodeAt(0)-96}`
}
console.log(position("z"));

//best practices
 
// function position(letter){
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
// }