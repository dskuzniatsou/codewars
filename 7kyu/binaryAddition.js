// // 😱 DESCRIPTIONS
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

// 🐱‍👤 TESTS

// const { assert } = require("chai");

// describe("Sample tests", function() {
//   it("Should return \"10\" for 1 + 1", function() {
//     let actual = addBinary(1,1);
//     assert.isDefined(actual, "You should return your solution! Did you log it to console instead?")
//     assert.strictEqual(actual, "10");
//   });
//   it("Should return \"1\" for 0 + 1", function() {
//     let actual = addBinary(0,1);
//     assert.strictEqual(actual, "1");
//   });
//   it("Should return \"11\" for 1 + 2", function() {
//     let actual = addBinary(1,2);
//     assert.strictEqual(actual, "11");
//   });
//   it("Should return \"111111\" for 51 + 12", function() {
//     let actual = addBinary(51,12);
//     assert.strictEqual(actual, "111111");
//   });
//   it("Should return \"1100100\"", function() {
//     let actual = addBinary(100,0);
//     assert.strictEqual(actual, "1100100");
//   });
// });

// ✔ SOLUTION

// my solution
function addBinary(a,b) {
return( a+b).toString(2)
}

console.log(addBinary(100,0));



//BEST PRACTICES
// function addBinary(a,b){
// if (a.isIntiger&& b.isIntiger){ //if all argument is intiger digits
//   return (a+b).toSting(2); //ok , return a string
//   } else {
//   return (parseInt(a,10)+parseInt(b,10)).toString(2); //if some of argument send as a string - parse values to 10 digits int. values and return as a binary 
//    }
// }