// // 😱 DESCRIPTIONS

// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites 1,000 times.



// 🐱‍👤 TESTS
// const chai = require('chai');
// const assert = chai.assert;

// describe("Tests", () => {
//   it("Length Check", () => {
//     assert.strictEqual(websites.length, 1000, `Expected websites.length == 1000, but got ${websites.length}`);
//   })
  
//   it("Type Check", () => {
//     assert.isTrue(Array.isArray(websites), true, `Expected websites to be an array`)
//   })
     
//   it("Content Check", () => {
//     assert.isTrue(websites.every(e => e === 'codewars'), 'Every element in the array must contain the value "codewars"');
//   });
  
// });


// ✔ SOLUTION
//my solution
let websites = []
websites = new Array(1000).fill("codewars")

console.log(websites);

// best practices
// var websites = [];
// while (websites.length < 1000) websites.push("codewars")