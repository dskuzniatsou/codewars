// 😱 DESCRIPTIONS

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(rowSumOddNumbers(2), 8);
//     assert.strictEqual(rowSumOddNumbers(42), 74088);
//   });
// });

// ✔ SOLUTION

// my solution

function rowSumOddNumbers(rows) {
    let result = [];
  let currentOdd = 1;

  for (let r = 1; r <= rows; r++) {
    let row = [];

    for (let i = 0; i < r; i++) {
      row.push(currentOdd);
      currentOdd += 2; // следующее нечетное
    }

    result.push(row);
  }

  return result[rows-1].reduce((sum,n)=>sum+n,0)
}
console.log(rowSumOddNumbers(2));


//Best Practices
// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }