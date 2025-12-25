// // 😱 DESCRIPTIONS

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.isFunction(main)
//     assert.strictEqual(main('take ', 'item'), 'take item')
//     assert.strictEqual(main('use ', 'sword'), 'use sword')
//   });
// });




// ✔ SOLUTION
//my solution
function main (verb, noun){
  return verb + noun
}
console.log(main('take ', 'item'));

// best practices
// function main(verb, noun) {
//   if(arguments.length > 1)
//     return verb.trim() + ' ' + noun.trim();
// }