// 😱 DESCRIPTIONS
// You need to write a function that reverses the words in a given string. Words are always separated by a single space.

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"
// Happy coding!

// 🐱‍👤 TESTS
// assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
//     assert.strictEqual(reverse('This is so easy'), 'easy so is This');
//     assert.strictEqual(reverse('no one cares'), 'cares one no');
//     assert.strictEqual(reverse(''), '');
//     assert.strictEqual(reverse('CodeWars'), 'CodeWars');


// ✔ SOLUTION

// my solution
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

console.log(reverse('no one cares'));

// best practices
// const reverse = (string) =>
//   string.split(' ').reverse().join(' ');