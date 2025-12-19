// // 😱 DESCRIPTIONS

// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// 🐱‍👤 TESTS
// const {assert} = require("chai");

// describe("Your 'xor' function/operator", () => {
//   it("should work for the four basic cases described above", () => {
//     assert.strictEqual(xor(false, false), false, "false xor false");
//     assert.strictEqual(xor(true, false), true, "true xor false");
//     assert.strictEqual(xor(false, true), true, "false xor true");
//     assert.strictEqual(xor(true, true), false, "true xor true");
//     assert.notStrictEqual(xor(true, true), true, "true xor true: 'xor' is NOT identical to 'or'");
//   });
// });



// ✔ SOLUTION
//my solution
function xor(a, b) {
  return (a||b)&&(a!=b)
}
console.log(xor(true, false));

// best practices
// function xor(a, b) {
//   return a != b;
// }