// 😱 DESCRIPTIONS

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// 🐱‍👤 TESTS

// const { assert, config } = require("chai");
// config.truncateThreshold = 0;

// describe("Your function", function () {

//   it("should work for basic tests", function () {
//     tester([5, 8, 12, 19, 22], 13)
//     tester([15, 28, 4, 2, 43], 6)
//     tester([3, 87, 45, 12, 7], 10)
//     tester([23, 71, 33, 82, 1], 24)
//     tester([52, 76, 14, 12, 4], 16)
//     tester([1, 2, 3, 4, 5, 6, 1], 2)
//   })

//   function tester(numbers, expected) {
//     assert.strictEqual(sumTwoSmallestNumbers(numbers), expected, `Failed for input:\n${JSON.stringify(numbers)}`);
//   }
// })


// ✔ SOLUTION

// my solution
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=> a-b).slice(0,2).reduce((sum,num)=>sum+num,0)
}

console.log(sumTwoSmallestNumbers([1, 2, 3, 4, 5, 6, 1]));

//BEST PRACTICES
// function sumTwoSmallestNumbers(numbers){  
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };