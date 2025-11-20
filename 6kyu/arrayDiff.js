// 😱 DESCRIPTIONS

// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Should pass Basic tests", () => {
//     assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
//     assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
//     assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
//     assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
//     assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
//     assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
//   });
// });


// ✔ SOLUTION

// my solution
function arrayDiff(a, b) {
return a.filter(num => !b.includes(num))
}




console.log(arrayDiff([1,2,2], [1]));

//BEST PRACTICES
// function arrayDiff(a, b) {
//   if(b.length==0 || a.length==0)
//     return a;
//   for(let i =0;i<a.length;i++){
//     for(let j=0;j<b.length;j++){
//       if(a[i]==b[j]){
//         a.splice(i,1);
//         i--;
//       }
//     }
//   }
//   return a;
// }