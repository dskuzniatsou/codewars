// 😱 DESCRIPTIONS

// If you can't sleep, just count sheeps!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

// 🐱‍👤 TESTS

// assert.strictEqual(countSheep(0), "");
// assert.strictEqual(countSheep(1), "1  ");
// assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
// assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");


// ✔ SOLUTION

// my solution

var countSheep = function (num){
 let countedSheep = "";
 let index = 1
 const sheep = " sheep..."
     while (index <= num)  {
       countedSheep =countedSheep + index + sheep
       index++
  }
  return countedSheep//your code here
}

console.log(countSheep(0));

//Best Practices

// var countSheep = function (num){
//   let str = "";
//   for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
//   return str;
// }