// 😱 DESCRIPTIONS

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = ["Ryan", "Kieran", "Jason", "Yous"]
// Output = ["Ryan", "Yous"]

// Input = ["Peter", "Stephen", "Joe"]
// Output = []
// Input strings will only contain letters.
// Note: keep the original order of the names in the output.

// 🐱‍👤 TESTS

// assert.deepEqual(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])
//     assert.deepEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"])
//     assert.deepEqual(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"])
//     assert.deepEqual(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"])

// ✔ SOLUTION

// my solution
function friend(friends){
 return friends.filter(str => str.length === 4)
}
console.log(friend(["Love", "Your", "Face", "1"]));

// const friend=["Love", "Your", "Face", "1"]
// const friendsTrue = friend.filter(friends => {
//   return friends.length === 4//your code here
// })

// console.log(friendsTrue);


//BEST PRACTICES
// const friend = friends => friends.filter(friend => friend.length == 4);