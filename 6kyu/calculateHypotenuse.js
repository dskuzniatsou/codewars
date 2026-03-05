// 😱 DESCRIPTIONS

// To solve this Kata, complete the function which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

// The returned value should be a number rounded to three decimal places
// An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)
// calculateHypotenuse(1,1); // returns 1.414
// calculateHypotenuse(3,4); // returns 5
// calculateHypotenuse(-2,1); // throws error
// calculateHypotenuse("one", "two"); // throws error

// 🐱‍👤 TESTS

// const chai = require("chai");
// const assert = chai.assert;

// describe("Sample tests", function() {
//   it("valid inputs", function() {
//     assert.strictEqual(calculateHypotenuse(1,1), 1.414, "Failed for calculateHypotenuse(1, 1)");
//     assert.strictEqual(calculateHypotenuse(3,4), 5.000, "Failed for calculateHypotenuse(3, 4)");
//     assert.strictEqual(calculateHypotenuse(9,9), 12.728, "Failed for calculateHypotenuse(9, 9)");
//    });

//   it("invalid inputs", function() {
//     assert.throws(() => calculateHypotenuse(-2,1), undefined, undefined, "calculateHypotenuse(-2,1) should throw an error");
//     assert.throws(() => calculateHypotenuse(2,-3), undefined, undefined, "calculateHypotenuse(2,-3) should throw an error");
//     assert.throws(() => calculateHypotenuse(9,0), undefined, undefined, "calculateHypotenuse(9,0) should throw an error");
//     assert.throws(() => calculateHypotenuse("one",1), undefined, undefined, "calculateHypotenuse('one',1) should throw an error");
//     assert.throws(() => calculateHypotenuse(3,"two"), undefined, undefined, "calculateHypotenuse(3,'two') should throw an error");
//     assert.throws(() => calculateHypotenuse(3), undefined, undefined, "calculateHypotenuse(3) should throw an error");
//     assert.throws(() => calculateHypotenuse(), undefined, undefined, "calculateHypotenuse() should throw an error");
//     assert.throws(() => calculateHypotenuse(true,4), undefined, undefined, "calculateHypotenuse(true,4) should throw an error");
//     assert.throws(() => calculateHypotenuse(2,false), undefined, undefined, "calculateHypotenuse(2,false) should throw an error");
//     assert.throws(() => calculateHypotenuse(NaN,5), undefined, undefined, "calculateHypotenuse(NaN,5) should throw an error");
//     assert.throws(() => calculateHypotenuse(6,NaN), undefined, undefined, "calculateHypotenuse(6,NaN) should throw an error");
//   });
// });

// ✔ SOLUTION

// my solution
function calculateHypotenuse(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Invalid input: arguments must be finite numbers');
  }
  
  if (a <= 0 || b <= 0) {
    throw new Error('Invalid input: sides must be greater than zero');
  }
 return  +Math.sqrt(a**2+b**2).toFixed(3) 
}



console.log(calculateHypotenuse(9,9));

//BEST PRACTICES
// const calculateHypotenuse = (a, b) =>
//   Number.isFinite(a) && Number.isFinite(b) && a > 0 && b > 0 ? Math.round(Math.hypot(a, b) * 1e3) / 1e3 : (() => {throw new Error();})();