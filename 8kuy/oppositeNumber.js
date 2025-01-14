// 😱 DESCRIPTIONS

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// 🐱‍👤 TESTS

// assert.strictEqual(opposite(1), -1);
// });
// it('should return 0', () => {
//   assert.strictEqual(opposite(0), 0);
// });
// it('should return -4.25', () => {
//   assert.strictEqual(opposite(4.25), -4.25);
// });
// it('should return -3.3333333', () => {
//   assert.strictEqual(opposite(3.3333333), -3.3333333);
// });
// it('should return 12525220.3325', () => {
//   assert.strictEqual(opposite(-12525220.3325), 12525220.3325);
// });
// it('should return 5', () => {
//   assert.strictEqual(opposite(-5), 5);
// });

// ✔ SOLUTION

//my solution
function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
}
console.log(opposite(-3.3333333));

// best practices

// function opposite(number) {
//     return(-number);
//   }