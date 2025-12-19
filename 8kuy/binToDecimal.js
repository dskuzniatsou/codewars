// // 😱 DESCRIPTIONS
// Complete the function which converts a binary number (given as a string) to a decimal number.

// 🐱‍👤 TESTS
// const {assert} = require('chai');

// describe('Sample Tests', function() {
//   const tests = [
//     ['0', 0],
//     ['1', 1],
//     ['10', 2],
//     ['1001001', 73],
//   ];

//   for (let [input, expected] of tests) {
//     it(`bin = '${input}'`, function() {
//       assert.strictEqual(binToDec(input), expected);
//     });
//   }
// });


// ✔ SOLUTION
//my solution
function binToDec(bin) {
  return parseInt(bin,2)

}
console.log(binToDec(10));

// best practices
// const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);