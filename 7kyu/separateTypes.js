// 😱 DESCRIPTIONS

// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// 🐱‍👤 TESTS

// it("given ['a', 1, 2, false, 'b']", function() {
//   assert.deepEqual(separateTypes(['a', 1, 2, false, 'b']), {number: [1, 2],  string: ['a', 'b'], boolean: [false]});
// });

// it("given ['a', 1, 2 ]", function() {
//   assert.deepEqual(separateTypes(['a', 1, 2 ]), {number: [1, 2],  string: ['a']});

// ✔ SOLUTION

// my solution
function separateTypes(input) {
  if (input.length === 0) return {};

  const separateTypes = {number: [],string: [], boolean: []};
  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] ==="number"){
      separateTypes["number"].push(input[i])
    } else if (typeof input[i] ==="string"){
      separateTypes["string"].push(input[i])
    } else if (typeof input[i] ==="boolean") {
      separateTypes["boolean"].push(input[i])
    } 
     }
     for (let key in  separateTypes) {
          if (separateTypes[key].length === 0) {
            delete separateTypes[key];
          }
        }
     return separateTypes
}
console.log(separateTypes(['a', 1, 2]));

//BEST PRACTICES
//first
// function separateTypes(input) {
//   return input.reduce((types, value) => {
//     const valueType = typeof value
//     const type = types[valueType]
//     types[valueType] = type ? [...type, value] : [value]
//     return types
//   }, {})
// }

//second
// const separateTypes = arr => arr.reduce((sortedObj, item) => {
//   sortedObj[typeof item] 
//     ? sortedObj[typeof item].push(item) 
//     : sortedObj[typeof item] = [item]
  
//   return sortedObj
// } , {})