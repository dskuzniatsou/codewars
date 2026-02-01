// // 😱 DESCRIPTIONS

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(parseF("1"), 1.0);
//   });
// });


// ✔ SOLUTION
//my solution
function parseF(s) {
  const num = parseFloat(s);
  return isNaN(num) ? null : num;
}

console.log(parseF("1"));

// best practices
// function parseF(s) {
//   return isNaN(parseFloat(s)) ? null : parseFloat(s);
// }