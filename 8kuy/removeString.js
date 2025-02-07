// 😱 DESCRIPTIONS

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"
// The size will always be positive and will only use whole numbers.

// 🐱‍👤 TESTS

// doTest("Hi!", "Hi");
// doTest("Hi!!!", "Hi!!");
// doTest("!Hi", "!Hi");
// doTest("!Hi!", "!Hi");
// doTest("Hi! Hi!", "Hi! Hi");
// doTest("Hi", "Hi");


// ✔ SOLUTION

// my solution
function remove (string) {
  if (string[string.length-1] ==='!') {
  return string.slice(0,-1);
} else {return string}
}

console.log(remove("Hi! Hi!"));

//Best Practices
// const remove = s => s.replace(/!$/, '');

// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }