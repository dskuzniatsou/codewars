// 😱 DESCRIPTIONS
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


// 🐱‍👤 TESTS
// assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
// assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
// assert.deepEqual(norm(invert([])), []);
// assert.deepEqual(norm(invert([0])), [0]);

// ✔ SOLUTION
function invert(array) {
  return array.map(num=> num!==0? -num:0);
}


console.log(invert([]));

//code variations best practices
// function invert(array) {
//   var newArr = [];
//   for(var i = 0; i < array.length; i++){
//     newArr.push(-array[i]);
//   }
//    return newArr;
// }

// function invert(array) {
//   return array.map(i => 0 - i);
// }