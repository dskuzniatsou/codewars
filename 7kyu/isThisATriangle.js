// 😱 DESCRIPTIONS

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 


// 🐱‍👤 TESTS

// const { assert } = require("chai")

// describe("Public tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(isTriangle(1,2,2), true);
//     assert.strictEqual(isTriangle(7,2,2), false);
//   });
// })

// ✔ SOLUTION

// my solution

function isTriangle(a,b,c){
    
const arr =  [a,b,c].sort((a,b)=> a-b)
   return arr[0]+arr[1]>arr[2]

}

console.log(isTriangle(10,2,2));


//Best Practices
// var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2