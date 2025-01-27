// 😱 DESCRIPTIONS
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// 🐱‍👤 TESTS
// Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')


// ✔ SOLUTION

// my solution
function greet (name, owner) {
 return name===owner?'Hello boss':'Hello guest' // Add code here
}
console.log(greet('Greg', 'Daniel'));

// best practices
// function greet (name, owner) {
//     return `Hello ${name==owner?'boss':'guest'}`
//   }