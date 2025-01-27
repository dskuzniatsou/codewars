// 😱 DESCRIPTIONS
// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz

// 🐱‍👤 TESTS
// assert.strictEqual(contamination("abc","z"), "zzz")
//     assert.strictEqual(contamination("","z"), "")
//     assert.strictEqual(contamination("abc",""), "")
//     assert.strictEqual(contamination("_3ebzgh4","&"), "&&&&&&&&")
//     assert.strictEqual(contamination("case//"," "), "      ")

// ✔ SOLUTION
//my solution
function contamination(text, char) {
  let newText = ''
  for (let index = 0; index < text.length; index++) {
    text[index] = char;
    newText += char
  }
  return newText
}

console.log(contamination("abc", "z"));

