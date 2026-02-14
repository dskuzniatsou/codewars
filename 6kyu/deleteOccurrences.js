// 😱 DESCRIPTIONS

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].



// 🐱‍👤 TESTS

// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
//     assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])
//     assert.sameOrderedMembers(deleteNth([12,39,19,39,39,19,12], 1), [12, 39, 19])
//   });
// });


// ✔ SOLUTION

// my solution
function deleteNth(arr,n){
 const count = {};
  const result = [];
  
  for (const item of arr) {
    // Увеличиваем счётчик и проверяем, не превышает ли он n
    count[item] = (count[item] || 0) + 1;
    if (count[item] <= n) {
      result.push(item);
    }
  }
  
  return result;
}
console.log(deleteNth([20,37,20,21], 1));

//BEST PRACTICES
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }