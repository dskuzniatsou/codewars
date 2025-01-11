// 😱 DESCRIPTIONS
//Complete the square sum function so that it squares each number passed into it and then sums the results together.



// 🐱‍👤 TESTS
//     assert.strictEqual(squareSum([1,2]), 5);
//     assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
//     assert.strictEqual(squareSum([]), 0);

// ✔ SOLUTION

function squareSum(numbers){
return numbers.reduce(function(sum, n){
    return (n*n) + sum;
}, 0) 
}
   console.log(squareSum([]));
   