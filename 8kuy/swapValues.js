// 😱 DESCRIPTIONS

// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// 🐱‍👤 TESTS

// Test.assertEquals(arr[0], 2, "Failed swapping numbers")
// Test.assertEquals(arr[1], 1, "Failed swapping numbers")



// ✔ SOLUTION

// my solution

function swapValues(arr) {
 [arr[0], arr[1]] = [arr[1], arr[0]]
 return arr
}
console.log(swapValues([1,2]));

//Best Practices

// function swapValues(arr) {
//     return arr.reverse();
// }