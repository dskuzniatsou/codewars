// // 😱 DESCRIPTIONS
// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

// 🐱‍👤 TESTS
// describe("Basic Tests", function () {
//     it("It should work for sample tests", function () {
//         doTest("Hi!", "H!!");
//         doTest("!Hi! Hi!", "!H!! H!!");
//         doTest("aeiou", "!!!!!");
//         doTest("ABCDE", "!BCD!");
//     });

//     const { assert } = require('chai');

//     function doTest(input, expected) {
//         const message = `for s = ${JSON.stringify(input)}\n`;
//         const actual = replace(input);
//         assert.strictEqual(actual, expected, message);
//     }
// });

// ✔ SOLUTION
//my solution
function replace(s) {
  
    return s.replace(/[aieouAEIOU]/g,'!')
}

console.log(replace("aeiou"));

// best practices
// function replace(s){
//   return s.replace(/[aeoiu]/ig, '!')  
// }