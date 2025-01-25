// 😱 DESCRIPTIONS
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// 🐱‍👤 TESTS
// assert.strictEqual(smash(["hello", "world"]), "hello world");
// assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
// assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");


// ✔ SOLUTION

// my solution

function smash(words) {
    return words.join(' ')
}
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));

//Best Practices

