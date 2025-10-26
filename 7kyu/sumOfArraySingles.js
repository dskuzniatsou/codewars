// 😱 DESCRIPTIONS

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

// Good luck!

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe('Example tests', function() {
//   it('Basic tests', function() {
//     assert.strictEqual(repeats([4,5,7,5,4,8]), 15);
//     assert.strictEqual(repeats([9, 10, 19, 13, 19, 13]), 19);
//     assert.strictEqual(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
//     assert.strictEqual(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
//     assert.strictEqual(repeats([5, 10, 19, 13, 10, 13]), 24);
//   });
// });


// ✔ SOLUTION

// my solution
function repeats(arr){
return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item)).reduce((sum, n)=> sum+n,0)

};
console.log(repeats([5, 10, 19, 13, 10, 13]));


//Best Practices
// function repeats(arr) {
//   let seen = new Set(); // создаём пустое множество (в нём хранятся только уникальные значения)
//   let sum = 0;          // сюда будем складывать результат

//   for (let v of arr) {  // перебираем все элементы массива
//     if (!seen.has(v)) { // если числа ещё нет в Set
//       seen.add(v);      // добавляем его туда
//       sum += v;         // и прибавляем к сумме
//     } else {            // если число уже встречалось ранее
//       sum -= v;         // вычитаем его из суммы
//     }
//   }

//   return sum; // возвращаем итог
// }