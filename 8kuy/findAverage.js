// 😱 DESCRIPTIONS
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.



// 🐱‍👤 TESTS
// assert.strictEqual(findAverage([1,1,1]), 1);
// assert.strictEqual(findAverage([1,2,3]), 2);
// assert.strictEqual(findAverage([1,2,3,4]), 2.5);

// ✔ SOLUTION
function findAverage(array) {
    if (array.length === 0) return 0;
    return array.reduce((sum, el) => sum + el, 0) / array.length

}


console.log(findAverage([]));

//code variations best practices
// var find_average = (array) => {  
//     return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
//   }