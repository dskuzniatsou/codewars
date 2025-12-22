// // 😱 DESCRIPTIONS

// Write the function polygonArea(A,B,C,D) that finds the area of polygons of this type:

// alt text

// Assume D always equals B/2.
// Assume the angles formed by AB and BC are right angles.

// 🐱‍👤 TESTS
// const assert = require('chai').assert;

// describe('polygonArea', function () {
//   it('polygonArea(2,4,4,2) === 12', function () {
//     assert.strictEqual(polygonArea(2, 4, 4, 2), 12);
//   });

//   it('polygonArea(0,0,0,0) === 0', function () {
//     assert.strictEqual(polygonArea(0, 0, 0, 0), 0);
//   });

//   it('polygonArea(2,5,10,2.5) === 30', function () {
//     assert.strictEqual(polygonArea(2, 5, 10, 2.5), 30);
//   });
// });




// ✔ SOLUTION
//my solution
function polygonArea(A,B,C,D){
return B*C-((C-A)*D/2 + (C-A)*(B-D)/2)
}
console.log(polygonArea(2, 4, 4, 2));

// best practices
// function polygonArea(A,B,C,D){
//   return D*(A+C);
// }