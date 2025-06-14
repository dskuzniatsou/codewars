// 😱 DESCRIPTIONS
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4
// 🐱‍👤 TESTS
// assert.approximately(findAverage([1]), 1, 1e-9);
// assert.approximately(findAverage([1, 3, 5, 7]), 4, 1e-9);

// ✔ SOLUTION

// my solution
function findAverage(nums) {
  return nums.reduce((sum, el) => sum + el, 0) / nums.length
}


console.log(findAverage([1, 3, 5, 7]));


//Best Practices
// var findAverage = function (nums) {
//   var sum = 0;
//   for (num in nums) {
//     sum += nums[num];
//   }
//   return sum / (nums.length);
