// 😱 DESCRIPTIONS

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


// 🐱‍👤 TESTS

// const { assert } = require("chai");

// describe("Sample tests", () => {
//   it("Sample test 1", () => {
//     assert.strictEqual(solution(""), "", `solution("")`);
//   });
//   it("Sample test 2", () => {
//     assert.strictEqual(solution("camelCasing"), "camel Casing", `solution("camelCasing")`);
//   });
//   it("Sample test 3", () => {
//     assert.strictEqual(solution("camelCasingTest"), "camel Casing Test", `solution("camelCasingTest")`);
//   });
// });

// ✔ SOLUTION

// my solution
function solution(string) {

  return string.replace(/[A-Z]/g,' $&')
  
}
console.log(solution(""));

//BEST PRACTICES
// function solution(string) {
//   string = string.split('').map(function (el) {
//     if (el === el.toUpperCase()) {
//       el = ' ' + el
//     }
//     return el
//   })
//   return string.join('')
// }