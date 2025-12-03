// 😱 DESCRIPTIONS
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Examples:
// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Sample tests", () => {
//   it("integer = 15", () => assert.deepEqual(divisors(15), [3, 5]));
//   it("integer = 12", () => assert.deepEqual(divisors(12), [2, 3, 4, 6]));
//   it("integer = 13", () => assert.deepEqual(divisors(13), "13 is prime"));
// });



// ✔ SOLUTION

// my solution
function divisors(integer) {
  const res = []
  const limit = Math.sqrt(Math.abs(integer));

  for (let i = 2; i <=limit; i++) {
    if (integer%i===0) {
      res.push(i)
      const pair = integer/ i;
      if (pair !== i) res.push(pair)
    }
    
  }
 return res.length? res.sort((a, b) => a - b): `${integer} is prime`
  
}


console.log(divisors(13));

//Best Practices
// function divisors(integer) {
//   var res = []
//   for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//   return res.length ? res : integer + ' is prime'
// };