// 😱 DESCRIPTIONS
// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

// 🐱‍👤 TESTS
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);

// ✔ SOLUTION

//my solution

function positiveSum(arr) {
    return arr.reduce(function (sum, num) {
        return num > 0 ? sum + num : sum;
    }, 0);
}

console.log(positiveSum([1, 2, 3, 4, 5]));

//best practices
// function positiveSum(arr) {
//     var total = 0;    
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//       if (arr[i] > 0) {                   // if arr[i] is greater than zero
//         total += arr[i];                  // add arr[i] to total
//       }
//     }
//     return total;                         // return total
//   }