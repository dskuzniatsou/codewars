// 😱 DESCRIPTIONS

// Your task is to implement a function that takes two inputs, x and y, and returns the value of x raised to the power of y.

// Simple, right? But you are NOT allowed to use Math.pow();

// Both x and y will be natural numbers (non-negative integers) in range 0 <= x,y <= 13.

// Special Case: For this challenge, 0^0 is defined to be 1.

// 🐱‍👤 TESTS

// assert.strictEqual(power(1, 701270), 1);
// assert.strictEqual(power(2, 2), 4);
// assert.strictEqual(power(3, 2), 9);
// assert.strictEqual(power(-1, 40), 1); 

// ✔ SOLUTION

// my solution
function power(x, y) {
  if (0 <= x || 0 <= y <= 13) {
    return x ** y
  }
}

console.log(power(2, 2));

// best practices

// function power(x,y){
//   return x**y;
// }