// 😱 DESCRIPTIONS
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// 🐱‍👤 TESTS
// it("sumOfDifferences([1, 2, 10]", function() {
//     assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
//   });

//   it("sumOfDifferences([-3, -2, -1])", function() {
//     assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);

// ✔ SOLUTION

// my solution
function sumOfDifferences(arr) {
    let sum=0
    const newArr = arr.sort((a,b)=> b-a)
    for (let i = 0; i < newArr.length-1; i++) {
       sum += newArr[i]-newArr[i+1]
        
    }
    return sum
}


console.log(sumOfDifferences([1, 2, 10]));


//Best Practices

// function sumOfDifferences(arr) {
//     return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
// }

// const sumOfDifferences = arr => arr
//   .sort((a, b) => b - a)
//   .map((a, i) => a - arr[i + 1] || 0)
//   .reduce((a, b) => a + b, 0);