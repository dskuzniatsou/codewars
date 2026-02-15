// 😱 DESCRIPTIONS

// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
// 🐱‍👤 TESTS

// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertDeepEquals(snail([[]]), []);
// Test.assertDeepEquals(snail([[1]]), [1]);
// Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
// });
// });




// ✔ SOLUTION

// my solution
function snail(array) {
  if (array.length === 0) return [];
  const result = [];
  let top = 0, bottom = array.length - 1;
  let left = 0, right = array[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let i = left; i <= right; i++) {
      result.push(array[top][i]);
    }
    top++;

    // Traverse right column
    for (let i = top; i <= bottom; i++) {
      result.push(array[i][right]);
    }
    right--;

    // Traverse bottom row (if still within bounds)
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      bottom--;
    }

    // Traverse left column (if still within bounds)
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      left++;
    }
  }
  return result;
}


console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

//BEST PRACTICES
// snail = function(array) {
//   var result;
//   while (array.length) {
//     // Steal the first row.
//     result = (result ? result.concat(array.shift()) : array.shift());
//     // Steal the right items.
//     for (var i = 0; i < array.length; i++)
//       result.push(array[i].pop());
//     // Steal the bottom row.
//     result = result.concat((array.pop() || []).reverse());
//     // Steal the left items.
//     for (var i = array.length - 1; i >= 0; i--)
//       result.push(array[i].shift());
//   }
//   return result;
// }