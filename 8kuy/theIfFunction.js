// // 😱 DESCRIPTIONS
// Create a function that takes three arguments:

// a value to be evaluated for truthiness.
// a function to execute if the first argument is truthy.
// a function to execute if the first argument is falsy.
// If the first argument evaluates to truthy, call the second argument (a function). If it evaluates to falsy, call the third argument instead (also a function).

// In statically-typed languages, the first argument will be a boolean. In dynamically-typed languages that attribute a truth value to all expressions, it may be of any type.


// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
  
//   const unexpectedTrue  = () => assert.fail("'true' function unexpectedly called");
//   const unexpectedFalse = () => assert.fail("'false' function unexpectedly called");
  
  
//   it("test true function", () => {
//     let testvar = 0;
//     _if(true,  () => testvar = 42,   unexpectedFalse);
//     assert.strictEqual(testvar, 42, "'true' function has not been called");
//   });
//   it("test false function", () => {
//     let testvar = 0;
//     _if(false, unexpectedTrue, () => testvar=42);
//     assert.strictEqual(testvar, 42, "'false' function has not been called");
//   });  
// });


// ✔ SOLUTION
//my solution

function _if(bool, func1, func2) {
  return bool? func1():func2()
}


// best practices
// var _if = function IF(condition, isTruthy, isFalsey) {
//   (condition ? isTruthy : isFalsey)();
// };