// 😱 DESCRIPTIONS
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]


// 🐱‍👤 TESTS
// assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);

// ✔ SOLUTION
//my solution

const reverseSeq = n => {
  const array=[]
  while (n>0) {
    
    array.push(n)
    n--
  }
return array
  
};
console.log(reverseSeq(5));

//best practices
 
// const reverseSeq = n => {
//   let arr = [];
//     for (let i=n; i>0; i--) {
//       arr.push(i);
//       } return arr;
//   };

// const reverseSeq = n => {
//   return Array(n).fill(0).map((e, i) => n - i );
// };