// 😱 DESCRIPTIONS
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]


// 🐱‍👤 TESTS
// assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
// assert.deepEqual(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
// assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
// assert.deepEqual(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]); 

// ✔ SOLUTION
function removeEveryOther(arr){
  
  for (let i = 1; i < arr.length; i++) {
   arr.splice(i,1)
    }
    return arr
  }

console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));

//code variations best practices
// function removeEveryOther(arr){
//   return arr.filter(function(elem, index) {
//     return index % 2 === 0;
//   });
// }