// 😱 DESCRIPTIONS

// What is the Fibonacci sequence
// The Fibonacci sequence starts with the numbers 0 and 1, and every next number is given by adding the previous two together. So 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, etc.

// The challenge
// Your challenge is, given two numbers in a Fibonacci-like sequence (where the next number is found by adding the two previous numbers), to find the lowest possible non-negative numbers that the sequence originates from. For example, if you are given the numbers 398 and 644, which come from this sequence:

// 2, 6, 8, 14, 22, 36, 58, 94, 152, 246, 398, 644
// Then you would return 2 and 6, as they are the numbers which started the sequence.

// Note that 8 and 14, while they also start a sequence containing 398 and 644, are not correct as they are not the lowest possible sequence start.

// Note
// For the purposes of this puzzle, Fibonacci-like sequences don't decrease. This means that the following sequence is not considered Fibonacci-like, and 4 and 2 are NOT solutions to the puzzle:
// 4, 2, 6, 8, 14, 22, 36, 58, 94, 152, 246, 398, 644
// 🐱‍👤 TESTS
// const {assert} = require("chai");

// describe("First Fibonacci", () => {
//   it("example tests", () => {
//     assert.deepEqual( solution(398,644), [2,6], `solution(398,644)` );
//     assert.deepEqual( solution(15,28), [2,13], `solution(15,28)` );
//     assert.deepEqual( solution(186,301), [3,7], `solution(186,301)` );
//     assert.deepEqual( solution(265,429), [1,12], `solution(265,429)` );
//     assert.deepEqual( solution(1186,1919), [2,7], `solution(1186,1919)` );
//   });
// });

// ✔ SOLUTION

// my solution
function solution(first,second) {
let arr = [first,second]

while (arr[0]<=arr[1]&&arr[0]>=0) {
  let num = arr[1]-arr[0]
  arr.unshift(num)

}
if (arr[0]===0) {
  return arr.slice(0,2)
} else {
return arr.slice(1,3)
}

  
  
}
console.log( solution(20295,32838));

//Best Practices
// function solution(first,second) {
  
//   while( (second - first) <= first && (second - first) >= 0){
//     let result = second - first;
//     second = first;
//     first = result;
//   }
//   return [ first, second ];
// }