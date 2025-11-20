// 😱 DESCRIPTIONS

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual( digitalRoot(16), 7 )
//     assert.strictEqual( digitalRoot(456), 6 )
//   });
// });


// ✔ SOLUTION

// my solution
function digitalRoot(n) {
    while (n>=10) {
        
      n = n.toString().split('').map(Number).reduce((a,b)=>a+b,0)
    }
    
return n
}



console.log(digitalRoot(456));

//BEST PRACTICES
// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }