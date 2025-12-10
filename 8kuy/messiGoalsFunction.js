// // 😱 DESCRIPTIONS
// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

// For example:

// 5, 10, 2  -->  17
// 🐱‍👤 TESTS
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(goals(0,0,0), 0)
// Test.assertEquals(goals(43, 10, 5), 58)
//   });
// });


// ✔ SOLUTION
//my solution
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}

console.log(goals(43, 10, 5));

// best practices
// const goals = (...a) => a.reduce((s, v) => s + v, 0);