// 😱 DESCRIPTIONS
// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// 🐱‍👤 TESTS
// input = [ 100, 101, 5, 5, 1, 1 ];
// expected = [ 10, 10201, 25, 25, 1, 1 ];
// Test.assertSimilar(squareOrSquareRoot(input), expected);

// input = [ 1, 2, 3, 4, 5, 6 ];
// expected = [ 1, 4, 9, 2, 25, 36 ];
// Test.assertSimilar(squareOrSquareRoot(input), expected);

// ✔ SOLUTION

// my solution

function squareOrSquareRoot(array) {
    let arr=[]
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(Math.sqrt(array[i]))) {
            arr.push(Math.sqrt(array[i]))
        } else {arr.push(Math.pow(array[i],2))}
        
    } 
    return arr
  }


console.log(squareOrSquareRoot( [ 1, 2, 3, 4, 5, 6 ]));


//Best Practices
// const squareOrSquareRoot = array => array.map(a => Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : (a * a));

// function squareOrSquareRoot(array) {
//     return array.map(x => {
//       const r = Math.sqrt(x);
//       return (r % 1 == 0) ? r : (x*x);
//     });  
//   }