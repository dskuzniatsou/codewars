// 😱 DESCRIPTIONS
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
// 🐱‍👤 TESTS
// assert.deepEqual(distinct([1]), [1]);
// assert.deepEqual(distinct([1,2]), [1,2]);
// assert.deepEqual(distinct([1,1,2]), [1,2]);

// ✔ SOLUTION

// my solution

function distinct(a) {
    return [...new Set(a)]
  }

console.log(distinct([1,1,2]));


//Best Practices

// function distinct(arr) {
//     let res = []; 
    
//     for(let i = 0; i < arr.length; i++){
//       if(!res.includes(arr[i])){
//         res.push(arr[i]);
//       }
//   }
//   return res;
//   }