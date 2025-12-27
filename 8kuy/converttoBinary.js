// // 😱 DESCRIPTIONS

// Task Overview
// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// n = 1 should return 1
// n = 5 should return 101
// n = 11 should return 1011

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(toBinary(1), 1);
//     assert.strictEqual(toBinary(2), 10);
//     assert.strictEqual(toBinary(3), 11);
//     assert.strictEqual(toBinary(5), 101);  
//   });
// })




// ✔ SOLUTION
//my solution
function toBinary(n){
  return n.toString(2)
}
console.log(toBinary(2));

// best practices
// function toBinary(n){
//   return +n.toString(2);
// }