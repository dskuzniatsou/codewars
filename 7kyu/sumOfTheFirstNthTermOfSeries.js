// 😱 DESCRIPTIONS
// Task
// Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// S
// e
// r
// i
// e
// s
// :
// 1
// +
// 1
// 4
// +
// 1
// 7
// +
// 1
// 10
// +
// 1
// 13
// +
// 1
// 16
// +
// …
// Series:1+ 
// 4
// 1
// ​
//  + 
// 7
// 1
// ​
//  + 
// 10
// 1
// ​
//  + 
// 13
// 1
// ​
//  + 
// 16
// 1
// ​
//  +…
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe("Sample tests", () => {
//   it("n = 1", () => {
//     let actual = SeriesSum(1);
//     checkReturnValue(actual);
//     assert.strictEqual(actual,  "1.00", "n = 1")
//   });
//   it("n = 2", () => assert.strictEqual(SeriesSum(2),  "1.25", "n = 2"));
//   it("n = 3", () => assert.strictEqual(SeriesSum(3),  "1.39", "n = 3"));
//   it("n = 4", () => assert.strictEqual(SeriesSum(4),  "1.49", "n = 4"));
// });

// function checkReturnValue(actual) {
//   assert.isDefined(actual, "Your function did not return a value. Did you log it to console instead?");
// }



// ✔ SOLUTION

// my solution
function SeriesSum(n) {
 let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + i * 3);
  }

  return sum.toFixed(2);
}

console.log(SeriesSum(2));

//BEST PRACTICES
// function SeriesSum(n) {
//   return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
// }