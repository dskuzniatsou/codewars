// // 😱 DESCRIPTIONS

// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(correctTail("Fox", "x"), true);
//     assert.strictEqual(correctTail("Rhino", "o"), true);
//     assert.strictEqual(correctTail("Meerkat", "t"), true);   
//   })
// })



// ✔ SOLUTION
//my solution
function correctTail(body, tail) { ;
    return body[body.length-1]===tail
  }

console.log(correctTail("Rhino", "o"));

// best practices
// const correctTail = (x,y)=>x.endsWith(y)

// const correctTail = (body, tail) => body.slice(-1) === tail[0]