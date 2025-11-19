// 😱 DESCRIPTIONS
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?
// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Jenny's greeting function", function(){
//   it("should greet some people normally",function(){
//     Test.assertEquals(greet("Jim"), "Hello, Jim!");
//     Test.assertEquals(greet("Jane"), "Hello, Jane!");
//     Test.assertEquals(greet("Simon"), "Hello, Simon!");
//   });
//   it("should greet Johnny a little bit more special",function(){
//     Test.assertEquals(greet("Johnny"), "Hello, my love!");
//   });
// });
// ✔ SOLUTION

// my solution

function greet(name){
  
  if(name === "Johnny"){
    return "Hello, my love!";} else
  {return "Hello, " + name + "!";}
}
console.log(greet("Johnny"));

// // best practices
// function greet(name){
//   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
// }