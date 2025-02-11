// 😱 DESCRIPTIONS

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"
// 🐱‍👤 TESTS

// Test.assertSimilar(capitalizeWord('word'), 'Word');
// Test.assertSimilar(capitalizeWord('i'), 'I');
// Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');

// ✔ SOLUTION

// my solution
function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(capitalizeWord("glasswear"));

//Best Practices

// function mouthSize(animal) {
// const capitalizeWord = (word) => word.replace(word.charAt(0), word.charAt(0).toUpperCase());