// 😱 DESCRIPTIONS

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;


// describe("Sample Tests", () => {
//   it("Should pass Sample Tests", () => {
//     assert.strictEqual(stray([1, 1, 2]), 2);
//     assert.strictEqual(stray([1, 2, 1]), 2);
//     assert.strictEqual(stray([2, 1, 1]), 2);
//   });
// });



// ✔ SOLUTION

// my solution
function stray(numbers) {
  return Number(numbers.filter(item => numbers.indexOf(item) === numbers.lastIndexOf(item)))
}


console.log(stray([2, 1, 1]));

//BEST PRACTICES
// const stray = nums => nums.reduce((a, b) => a ^ b);