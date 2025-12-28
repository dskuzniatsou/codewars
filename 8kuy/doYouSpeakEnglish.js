// // 😱 DESCRIPTIONS

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.



// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("should test example cases", () => {
//     assert.strictEqual(spEng("english"), true);
//     assert.strictEqual(spEng("egnlish"), false);
//   });
// });



// ✔ SOLUTION
//my solution
function spEng(sentence){
return sentence.toLowerCase().includes('english')
}
console.log(spEng("english"));

// best practices
// function spEng(s){
//    return /english/i.test(s)
// }