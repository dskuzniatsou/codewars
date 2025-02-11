// 😱 DESCRIPTIONS

// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

// Note: Input will either be a positive integer (or a string for untyped languages).

// 🐱‍👤 TESTS
// assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
// assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 
// })

// ✔ SOLUTION

// my solution
function apple(x){
return Math.pow(+x,2)>1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

console.log(apple(4));

//Best Practices

// function apple(x){
  
//   if (Math.pow(x,2) > 1000) {
//     return "It's hotter than the sun!!";
//   } else {
//     return "Help yourself to a honeycomb Yorkie for the glovebox.";
  
//   }

// }