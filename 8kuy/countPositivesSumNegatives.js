// 😱 DESCRIPTIONS
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


// 🐱‍👤 TESTS
// let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// let actual = countPositivesSumNegatives(testData);
// let expected = [8, -50];    
// assert.deepEqual(actual, expected);

// ✔ SOLUTION
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
 let sum = 0
 let count=0
 for (let i = 0; i < input.length; i++) {
  if(input[i]>0){
    count +=1
  } else {
  sum+=input[i]
  }
  
 }
 return [count,sum]
 // your code here
}


console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

//code variations best practices
// function countPositivesSumNegatives(input) {
//   return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }