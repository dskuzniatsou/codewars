// 😱 DESCRIPTIONS
// Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
// ("Hello", 'o')  =>  1
// ("Hello", 'l')  =>  2
// ("", 'z')       =>  0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

// 🐱‍👤 TESTS
// assert.strictEqual(strCount('Hello', 'o'), 1);
// assert.strictEqual(strCount('Hello', 'l'), 2);
// assert.strictEqual(strCount('',      'z'), 0);

// ✔ SOLUTION

// my solution
function strCount(str, letter) {
  let count = 0
  for (let index = 0; index < str.length; index++) {
    if (str[index] === letter) {
      count += 1
    }
  }
  return count
}
console.log(strCount('Hello', 'b'));



// best practices

//  function strCount(str, letter){  
//   return str.split(letter).length-1
// }