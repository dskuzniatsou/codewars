// // 😱 DESCRIPTIONS

// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid could have equal sides (could be a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer
// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(cubeChecker(  8, 3), false);
//     assert.strictEqual(cubeChecker(  8, 2), true );
//     assert.strictEqual(cubeChecker( -8,-2), false);
//     assert.strictEqual(cubeChecker(  0, 0), false);
//     assert.strictEqual(cubeChecker(  1, 5), false);
//     assert.strictEqual(cubeChecker(125, 5), true );
//   });
// });

// ✔ SOLUTION
//my solution
function cubeChecker(volume, side){
  return (side>0)&&(Math.pow(side,3)===volume)
};
console.log(cubeChecker(  -8, -2));

// best practices
// var cubeChecker = function(volume, side){
//   if (side<=0 || volume<=0){
//     return false;
//   }else if(Math.pow(side,3)!==volume){
//     return false;
//   }else{
//     return true;
//   }
// };