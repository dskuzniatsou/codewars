// 😱 DESCRIPTIONS
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic Tests", () =>{
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(quarterOf(3), 1)
//     assert.strictEqual(quarterOf(8), 3)
//     assert.strictEqual(quarterOf(11), 4)
//   });
// });


// ✔ SOLUTION
//my solution
const quarterOf = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
}

console.log(quarterOf(1));

//best practices

// const quarterOf = m => Math.ceil(m/3);