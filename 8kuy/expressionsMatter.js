// // 😱 DESCRIPTIONS

// Given three integers a, b, and c, return the largest number obtained after inserting the operators +, *, and parentheses (). In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.

// Example
// With the numbers 1, 2, and 3, here are some possible expressions:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// The maximum value that can be obtained is 9.

// Notes
// The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.
// Input and Output Examples
// expressionsMatter(1, 2, 3) ==> 9, because (1 + 2) * 3 = 9.
// expressionsMatter(1, 1, 1) ==> 3, because 1 + 1 + 1 = 3.
// expressionsMatter(9, 1, 1) ==> 18, because 9 * (1 + 1) = 18

// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", function() {
//   it("Small values", function() {
//     assert.strictEqual(expressionMatter(2, 1, 2), 6);
//     assert.strictEqual(expressionMatter(2, 1, 1), 4);
//     assert.strictEqual(expressionMatter(1, 1, 1), 3);
//     assert.strictEqual(expressionMatter(1, 2, 3), 9);
//     assert.strictEqual(expressionMatter(1, 3, 1), 5);
//     assert.strictEqual(expressionMatter(2, 2, 2), 8);
//   });

//   it("Medium values", function() {
//     assert.strictEqual(expressionMatter(5, 1, 3), 20);
//     assert.strictEqual(expressionMatter(3, 5, 7), 105);
//     assert.strictEqual(expressionMatter(5, 6, 1), 35);
//     assert.strictEqual(expressionMatter(1, 6, 1), 8);
//     assert.strictEqual(expressionMatter(2, 6, 1), 14);
//     assert.strictEqual(expressionMatter(6, 7, 1), 48);
//   });

//   it("Mixed values", function() {
//     assert.strictEqual(expressionMatter(2, 10, 3), 60);
//     assert.strictEqual(expressionMatter(1, 8, 3), 27);
//     assert.strictEqual(expressionMatter(9, 7, 2), 126);
//     assert.strictEqual(expressionMatter(1, 1, 10), 20);
//     assert.strictEqual(expressionMatter(9, 1, 1), 18);
//     assert.strictEqual(expressionMatter(10, 5, 6), 300);
//     assert.strictEqual(expressionMatter(1, 10, 1), 12);
//   });
// });



// ✔ SOLUTION
//my solution
function expressionMatter(a, b, c) {
  const mult = function(n1,n2){
    return n1*n2
  }
  const sum = function (n1,n2){
    return n1+n2
  }
 return Math.max(mult(a,sum(b,c)), mult(a,mult(b,c)), sum(a,mult(b,c)), mult(sum(a,b),c), sum(a,sum(b,c)), sum(mult(a,b),c))

// return a+mult(b,c)
}
console.log(expressionMatter(1,1,1));

// best practices
// function expressionMatter(a, b, c) {
//   return Math.max(
//     a + b + c,
//     a * b * c,
//     a * (b + c),
//     (a + b) * c,
//     a + b * c,
//     a * b + c,
//   );
// }