// // 😱 DESCRIPTIONS
// Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be added as 0 since it can't be added.

// If your language can handle float binaries assume the array won't contain float or doubles.

// arr2bin([1,2]) == '11'
// arr2bin([1,2,'a']) == '11'
// arr2bin([]) == '0'

// NOTE: NaN is a number too in javascript for decimal, binary and n-ary base
// Return "NaN" if the sum of all numbers is NaN.

// This is a modification on the Kata: Array2Binary addition hope you like it

// 🐱‍👤 TESTS
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     let actual = arr2bin([1,2]);
//     assertReturn(actual);
//     assert.strictEqual(actual, "11")
//     assert.strictEqual(arr2bin([1,2,3,4,5]), "1111")
//     assert.strictEqual(arr2bin([1,10,100,1000]), "10001010111")
//     assert.strictEqual(arr2bin([null]), "0")
//     assert.strictEqual(arr2bin([true,true,false,15]),"1111")
//   });
//   function assertReturn(v) {
//     assert.isDefined(v, "Your function did not return any value. Did you log it to the console instead?");
//   }
// });





// ✔ SOLUTION
//my solution
function arr2bin(arr){
// return arr.join(',').replace(/\D/g,'').split(',').map(Number).reduce((n,sum)=> n+sum, 0).toString(2)
return arr.reduce((sum, n)=> sum+((typeof n ==='number')? n:0),0 ).toString(2)

}
console.log(arr2bin([1,10,100,1000]));

// best practices
// const arr2bin = (arr) => {
//   return arr
//     .filter( (e) => typeof e == 'number' )
//     .reduce( (a, b) => a + b, 0 ).toString(2);
// };