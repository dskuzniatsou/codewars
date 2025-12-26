// // 😱 DESCRIPTIONS

// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe('Fixed tests', function() {
  
//   it('getLength([1,2,3])', function() {
//     assert.deepEqual(getLength([1, 2, 3]), 3);
//   });
//   it('getFirst([1,2,3])', function() {
//     assert.deepEqual(getFirst([1, 2, 3]), 1);
//   });
//   it('getLast([1,2,3])', function() {
//     assert.deepEqual(getLast([1, 2, 3]), 3);
//   });
//   it('pushElement([1,2,3]).length', function() {
//     assert.deepEqual(pushElement([1, 2, 3])?.length, 4);
//   });
//   it('popElement([1,2,3])', function() {
//     assert.deepEqual(popElement([1, 2, 3]), [1, 2]);
//   });
// });



// ✔ SOLUTION
//my solution
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  return arr[0]
}
function getLast(arr){
  //return the last element of arr
  return arr.pop()
}
function pushElement(arr){
  var el=1;
  //push el to arr
  arr.push(el)
  return arr
}
function popElement(arr){
  //pop an element from arr
  arr.pop()
  return arr
}
console.log(popElement([1, 2, 3]));

// best practices
// const getLength = array => array.length;

// const getFirst = array => array[0];

// const getLast = array => array[array.length - 1];

// const pushElement = array => array.concat(0);

// const popElement = array => array.splice(0, array.length - 1);