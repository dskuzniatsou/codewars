// // 😱 DESCRIPTIONS

// Complete the function which converts hex number (given as a string) to a decimal number.

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(hexToDec("1"), 1);
//     assert.strictEqual(hexToDec("a"), 10);
//     assert.strictEqual(hexToDec("10"), 16);
//     assert.strictEqual(hexToDec("FF"), 255);
//     assert.strictEqual(hexToDec("-C"), -12);
//   })
// })



// ✔ SOLUTION
//my solution
function hexToDec(hexString){
  return parseInt(hexString,16)
  //your code here
}
console.log(hexToDec("a"));

// best practices
// function hexToDec(hexString){
//   var htd = { '0': 0, '1': 1,  '2': 2,  '3': 3,  '4': 4,  '5': 5,  '6': 6,
//   '7': 7,  '8': 8,  '9': 9,  a: 10,  b: 11,  c: 12,  d: 13,  e: 14,  f: 15 }
//   return hexString.toLowerCase().split('').reverse().reduce((c,v,i)=> (v==='-')?(-c):(c+htd[v]*Math.pow(16,i)),0);
// }