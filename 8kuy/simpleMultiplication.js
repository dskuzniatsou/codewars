// 😱 DESCRIPTIONS
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// 🐱‍👤 TESTS
// assert.strictEqual(simpleMultiplication(2),16,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(1),9, 'Should return given argument times nine...')
// assert.strictEqual(simpleMultiplication(8),64,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(4),32,'Should return given argument times eight...')
// assert.strictEqual(simpleMultiplication(5),45,'Should return given argument times nine...')

// ✔ SOLUTION
//my solution

function simpleMultiplication(number) {
 return number%2===0? number*8: number*9
}
console.log(simpleMultiplication(4));

//best practices
 
// function simpleMultiplication(n) {
//   return n * (n % 2 ? 9 : 8);
// }