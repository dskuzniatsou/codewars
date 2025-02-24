// 😱 DESCRIPTIONS

// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

// 🐱‍👤 TESTS

// it(`Testing for [${input.join(", ")}]`, function() {
//     assert.deepStrictEqual(sumNoDuplicates(input), expected);

// ✔ SOLUTION

// my solution

// function sumNoDuplicates(arr) {

//   let countMap = {};
//   arr.forEach(num => {
//     countMap[num] = (countMap[num] || 0) + 1;
//   });

//   return arr.filter(num => countMap[num] === 1)
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumNoDuplicates([9, 8, 3, 1, 8, 1, 7]));



//BEST PRACTICES
function sumNoDuplicates(numList) {
  if (!Array.isArray(numList)) return 0;
  return numList.reduce((a,b)=>numList.indexOf(b)===numList.lastIndexOf(b) ? a+b : a,0);
}
console.log(sumNoDuplicates([9, 8, 3, 1, 8, 1, 7]));