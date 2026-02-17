// 😱 DESCRIPTIONS

// Define a method/function that removes from a given array of integers all the values contained in a second array.

// Examples (input -> output):
// * [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
// * [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
// * [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]

// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe("Basic Tests", () => {
//   let l = new Array();

//   it("should remove specified values from the list", () => {
//     let integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
//     let values_list = [1, 3];
//     assert.deepEqual(l.remove_(integer_list, values_list), [2, 2, 4]);

//     integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
//     values_list = [1, 3, 4, 2];
//     assert.deepEqual(l.remove_(integer_list, values_list), [5, 6, 7, 8]);

//     integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3];
//     values_list = [2, 4, 3];
//     assert.deepEqual(l.remove_(integer_list, values_list), [8, 7, 6, 5, 1]);

//     integer_list = [4, 4, 2, 3];
//     values_list = [2, 2, 4, 3];
//     assert.deepEqual(l.remove_(integer_list, values_list), []);

//     integer_list = [];
//     values_list = [2, 2, 4, 3];
//     assert.deepEqual(l.remove_(integer_list, values_list), []);
//   });
// });

// ✔ SOLUTION

// my solution
l=[]
Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(el=> !values_list.includes(el))
}
console.log(l.remove_([4, 4, 2, 3],[2, 2, 4, 3]));

//Best Practices
// Array.prototype.remove_ = function(integer_list, values_list){
// 	return integer_list.filter(function (element) {
//   	return values_list.indexOf(element) === -1;
//   });
// }