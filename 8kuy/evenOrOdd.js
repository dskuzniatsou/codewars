// 😱 DESCRIPTIONS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// 🐱‍👤 TESTS
//   it("2 is even", () => {
//     assert.strictEqual(evenOrOdd(2), "Even");
//   });
//   it("7 is odd", () => {
//     assert.strictEqual(evenOrOdd(7), "Odd");
//   });
//   it("-42 is even", () => {
//     assert.strictEqual(evenOrOdd(-42), "Even");
//   });
//   it("-7 is odd", () => {
//     assert.strictEqual(evenOrOdd(-7), "Odd");
//   });
//   it("0 is even", () => {
//     assert.strictEqual(evenOrOdd(0), "Even");
//   });

// ✔ SOLUTION

// my solution
function evenOrOdd(number) {
  return (Math.abs(number % 2) !== 1) ? "Even": "Odd"
}
   console.log( evenOrOdd(-42));
   
// best practices

// function evenOrOdd(number) {
//     return number % 2 === 0 ? 'Even' : 'Odd';
//   }