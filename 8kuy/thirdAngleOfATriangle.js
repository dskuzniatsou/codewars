// 😱 DESCRIPTIONS
// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.


// 🐱‍👤 TESTS
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(otherAngle(30, 60), 90);
//     assert.strictEqual(otherAngle(60, 60), 60);
//     assert.strictEqual(otherAngle(43, 78), 59);
//     assert.strictEqual(otherAngle(10, 20), 150);
//   });
// });

// ✔ SOLUTION
//my solution

function otherAngle(a, b) {
  return 180-(a+b)
}
console.log(otherAngle(10, 20));

//best practices

// function otherAngle(a, b) {
//   if(a<0 || b<0) //ensure no negative angles
//     return 0;
//   if((a+b)>=180) //ensure 2 angles don't sum up to 180
//     return 0;
//   return 180 - a - b; //return missing angle
// }