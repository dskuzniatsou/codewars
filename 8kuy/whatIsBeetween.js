// 😱 DESCRIPTIONS
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


// 🐱‍👤 TESTS
// describe("Basic tests", () => {
//   it("between(1, 4)", () => assert.deepStrictEqual(between(1, 4), [1, 2, 3, 4]));
//   it("between(-2, 2)", () => assert.deepStrictEqual(between(-2, 2), [-2, -1, 0, 1, 2]));
// });



// ✔ SOLUTION

// my solution
function between(a, b) {
  let arr = []
 for (let i = a; i <= b; i++) {
  arr.push(i)
 
   
 }
return arr
}


console.log(between(-3, 4));

// best practices
// const between = (a, b) => Array.from(new Array(b-a+1), (_, i) => a + i);