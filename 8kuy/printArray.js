// 😱 DESCRIPTIONS
// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

// Note: if this seems too simple for you try the next level

// Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕


// 🐱‍👤 TESTS
// tester([ 2 ], "2");
// tester([ 2, 4, 5, 2 ], "2,4,5,2");
// tester([ 2.0, 4.2, 5.1 ,2.2 ], "2,4.2,5.1,2.2");
// tester([ "2", "4", "5", "2" ], "2,4,5,2");
// tester([ [ "hello", "this", "is", "an", "array!" ], [ "a", "b", "c", "d", "e!" ] ], "hello,this,is,an,array!,a,b,c,d,e!");
// tester([ [ "hello", "this", "is", "an", "array!" ], [ 1, 2, 3, 4, 5 ] ], "hello,this,is,an,array!,1,2,3,4,5");
// tester([ { firstName: "Ruslan", lastName: "López" }, { firstName: "John", lastName: "Doe" } ], '[object Object],[object Object]');
// tester([ true, false ], 'true,false');
// ✔ SOLUTION

// my solution
function printArray(array){
  return array.join();
}
console.log(printArray([ 2 ]));


//Best Practices
// const printArray=array=>array.join();