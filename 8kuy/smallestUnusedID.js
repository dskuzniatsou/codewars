// // 😱 DESCRIPTIONS

// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!



// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe('method: nextId', function() {
//   it('returns the lowestNextId', function() {
//     Test.assertEquals(nextId([0,1,2,3,5]), 4);
//   });
//   it('returns the lowestNextId', function() {
//     Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
//   });
//   it('returns the lowestNextId - unsorted input with duplicates', function() {
//     Test.assertEquals(nextId([1,2,0,2,3,5]), 4);
//   });
// });

// ✔ SOLUTION
//my solution
function nextId(ids){
 const usedSet = new Set(ids);
  let id = 0;
  while (usedSet.has(id)) {
    id++;
  }
  return id;
}

console.log(nextId([1,2,0,2,3,5]));

// best practices
// function nextId(ids){
// 	const used = new Set(ids);
//   for (let i = 0; i <= ids.length; i++) {
//   	if (!used.has(i)) return i;
//   }
// }