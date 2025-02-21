// 😱 DESCRIPTIONS
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

// 🐱‍👤 TESTS
// assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
//     assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
//     assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//     assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//     assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

// ✔ SOLUTION
function monkeyCount(n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i)
  }
  return z;
}

console.log(monkeyCount(10));

//code variations best practices
// function monkeyCount(n) {
//   return Array.from({length:n}, (_,i)=>i+1)
// }