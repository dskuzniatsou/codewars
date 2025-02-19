// 😱 DESCRIPTIONS

// Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

// For example:

// [ 1, 2, 3] ==> 6

// [ 1, 3, 8, 1, 8] ==> 12

// [ -1, -1, 5, 2, -7] ==> -1

// [] ==> null

// 🐱‍👤 TESTS

// Test.assertEquals(uniqueSum([1,2,3]), 6)
// Test.assertEquals(uniqueSum([1,3,8,1,8]), 12)
// Test.assertEquals(uniqueSum([-1,-1,5,2,-7]), -1)
// Test.assertEquals(uniqueSum([]), null)

// ✔ SOLUTION

// my solution
function uniqueSum(lst){
  return Array.from(new Set(lst)).reduce((sum,n) => sum+n,null)
}

console.log(uniqueSum([1,3,8,1,8]));

//BEST PRACTICES
//first
// function uniqueSum(lst){
//   return [...new Set(lst)].reduce((a,b)=>a+b,null);
// }

//second
// function uniqueSum(lst){
//   return lst.length > 0 ? [...new Set(lst)].reduce((s,n)=> s + n, 0) : null
// }