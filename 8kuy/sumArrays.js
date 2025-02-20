// 😱 DESCRIPTIONS
// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// 🐱‍👤 TESTS
// Test.assertEquals(sum([]), 0);
// Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);

// ✔ SOLUTION
function sum (numbers) {
  return numbers.reduce((summ,el)=>summ+el,0)
}

console.log(sum([0]));

//code variations best practices
// sum = function (numbers) {
//   "use strict";
//   var total = 0;
//   for(var i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }
//   return total;
// };
