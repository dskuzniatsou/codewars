// 😱 DESCRIPTIONS

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

// 🐱‍👤 TESTS

// const Test = require('@codewars/test-compat');

// describe("KataTests", function(){
//   it("exampleTests", function(){
//     Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//     Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//   });
// });


// ✔ SOLUTION

// my solution
function findMissingLetter(array){
  
    
  for (let i = 0; i < array.length - 1; i++) {
    // Сравниваем код текущей буквы + 1 с кодом следующей
    if (array[i].charCodeAt(0) + 1 !== array[i + 1].charCodeAt(0)) {
      return String.fromCharCode(array[i].charCodeAt(0) + 1); // найден разрыв
    }
  }
  return true;
}
console.log(findMissingLetter(['O','Q','R','S']));

//BEST PRACTICES
// const findMissingLetter = (array) => {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   const start = alphabet.indexOf(array[0]);
//   return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
// };