// // 😱 DESCRIPTIONS

// Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

// For example (Input --> Output)

// "Yes" --> "Yes?" 
// "No?" --> "No?"

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Ensure question", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(ensureQuestion(""),"?","Expected: '?'");
//     assert.strictEqual(ensureQuestion("Yes"),"Yes?","Expected: '?'");
//     assert.strictEqual(ensureQuestion("No?"),"No?","Expected: '?'");
//   });
// });


// ✔ SOLUTION
//my solution
function ensureQuestion(s) {
  return s.at(-1)!=='?'? `${s}?`: s
}
console.log(ensureQuestion(""));

// best practices
// const ensureQuestion = s => s.endsWith('?') ? s : s+'?'