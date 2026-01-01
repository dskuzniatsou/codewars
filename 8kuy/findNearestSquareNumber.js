// // 😱 DESCRIPTIONS

// Your task is to find the nearest square number of a positive integer n. In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// For example, if n = 111, then the nearest square number equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If n is already a perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.

// Good luck :)

// 🐱‍👤 TESTS
// const chai = require('chai');
// const assert = chai.assert;

// describe("Find Nearest square number",() => {
//   it("Sample tests", () => {
//     assert.strictEqual(nearestSq(1), 1, "nearestSq(1) = 1");
//     assert.strictEqual(nearestSq(2), 1, "nearestSq(2) = 1");
//     assert.strictEqual(nearestSq(10), 9, "nearestSq(10) = 9");
//     assert.strictEqual(nearestSq(111), 121, "nearestSq(111) = 121");
//     assert.strictEqual(nearestSq(9999), 10000, "nearestSq(9999) = 10000");
//   })
// });



// ✔ SOLUTION
//my solution
function nearestSq(n){
    const sqrt = Math.sqrt(n)
    const small = Math.floor(sqrt)
    const big = Math.ceil(sqrt)

   if (sqrt%1===0) {
    return n
   } else if  ((n-small**2) <(big**2-n)){
return small**2
   } else {
    return big**2
   }

}
console.log(nearestSq(9999));

// best practices
// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2)