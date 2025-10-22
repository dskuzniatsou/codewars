// 😱 DESCRIPTIONS

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     assert.strictEqual(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//     assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
//   })
// })

// ✔ SOLUTION

// my solution
function findShort(s){
// return  s.split(' ').reduce((a, b) => a.length <= b.length ? a.length : b.length);
const words = s.split(" ")
let shortest = words[0];

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest.length;


}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));


//BEST PRACTICES
// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }