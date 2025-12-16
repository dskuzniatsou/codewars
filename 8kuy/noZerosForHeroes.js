// // 😱 DESCRIPTIONS

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests",function() {
//   it("noBoringZeros",function() {
//     assert.strictEqual(noBoringZeros(1450), 145)
//     assert.strictEqual(noBoringZeros(960000), 96)
//     assert.strictEqual(noBoringZeros(1050), 105)
//     assert.strictEqual(noBoringZeros(-1050), -105)
//     assert.strictEqual(noBoringZeros(-105), -105)
//     assert.strictEqual(noBoringZeros(0), 0)
//   })
// })

// ✔ SOLUTION
//my solution
function noBoringZeros(n) {
  return n===0? n: Number(n.toString().replace(/[0]+$/,''))
}
console.log(noBoringZeros(240000));

// best practices
// function noBoringZeros(n) {
//   while(n%10==0 && n!=0){n/=10;}
//   return n;
// }