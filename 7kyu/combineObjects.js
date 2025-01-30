// 😱 DESCRIPTIONS

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// 🐱‍👤 TESTS

// describe('Fixed tests', () => {
//   const objA = { a: 10, b: 20, c: 30 };
//   const objB = { a: 3, c: 6, d: 3 };
//   const objC = { a: 5, d: 11, e: 8 };
//   const objD = { c: 3 };

//   it('Combine two objects', () => {
//     assert.deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
//     assert.deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });
//   });

//   it('Combine three objects', () => {
//     assert.deepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 });
//     assert.deepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 });
//   });

//   it('Handle empty objects', () => {
//     assert.deepEqual(combine({}, {}, {}), {});
//     assert.deepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 })

// ✔ SOLUTION

// my solution
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
const objC = { a: 4, d: 81, e: 8 };
const objD = { c: 3 };

const combine = (...rest) => rest.reduce( ( result, current ) => {
  for(let key in current){
      let value = current[key];
      
      if(result[key] === undefined){
        result[key] = value;
      }else{
        result[key] += value;
      }
  }
  
  return result;
}, {} );


console.log(combine({}, {}, {}));

//Best Practices

// function combine() {
//   var obj = {}

//   for (var i = 0; i < arguments.length; i++) {
//         for (var key in arguments[i]) {
//           obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
//         }
//   }

//   return obj;
// }