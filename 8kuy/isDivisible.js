// 😱 DESCRIPTIONS
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

// Examples:
// 1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
// 2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
// 3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// 4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5

// 🐱‍👤 TESTS
// assert.strictEqual(isDivisible(3,3,4),false);
//     assert.strictEqual(isDivisible(12,3,4),true);
//     assert.strictEqual(isDivisible(8,3,4),false);
//     assert.strictEqual(isDivisible(48,3,4),true);

// ✔ SOLUTION

// my solution

function isDivisible(n, x, y) {
 return ((n%x===0)&&(n%y===0))?true:false
}

console.log(isDivisible(48,3,4));


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