// 😱 DESCRIPTIONS
// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// 🐱‍👤 TESTS
// assert.strictEqual(nameShuffler('john McClane'),'McClane john');
// assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
// assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')

// ✔ SOLUTION

// my solution
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')//Shuffle It
}

console.log(nameShuffler('tom jerry'));

