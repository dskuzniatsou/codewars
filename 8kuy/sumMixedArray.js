// 😱 DESCRIPTIONS

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// 🐱‍👤 TESTS
// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 


// ✔ SOLUTION

// my solution
function sumMix(x) {
    return x.reduce(function (sum, number) {
        return +number + sum;
    }, 0)
}
console.log(sumMix([]));

//Best Practices

// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }