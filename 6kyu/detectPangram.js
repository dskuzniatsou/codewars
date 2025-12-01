// 😱 DESCRIPTIONS
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 

// 🐱‍👤 TESTS
// const { assert, config } = require("chai");
// config.truncateThreshold = 0;


// describe("isPangram", function() {
//     it("Sample Tests", function() {
//         tester("The quick brown fox jumps over the lazy dog.", true);
//         tester("This is not a pangram.", false);
//         tester("abcdefghijklmnopqrstuvwxy .", false);
//     });

//     function tester(string, expected) {
//         assert.strictEqual(isPangram(string), expected, `Failed for input: ${JSON.stringify(string)}\n\n`);
//     }
// });

// ✔ SOLUTION

// my solution
function isPangram(string){
string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every(ch => string.includes(ch));
}


console.log(isPangram("The quick brown fox jumps over the lazy dog.") );

//BEST PRACTICES
// function tribonacci(signature,n) {
//   const result = signature.slice(0, n);
//   while (result.length < n) {
//     result[result.length] = result.slice(-3).reduce((p,c) => p + c, 0);
//   }
//   return result;
// }