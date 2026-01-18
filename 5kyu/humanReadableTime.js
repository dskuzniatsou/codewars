// 😱 DESCRIPTIONS
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.



// 🐱‍👤 TESTS

// describe('tests', function() {

//   const { strictEqual } = require("chai").assert;

//   function doTest(seconds, expected) {
//     const actual = humanReadable(seconds);
//     strictEqual(actual, expected, `for ${seconds} seconds\n`);
//   }

//   it('sample tests', function() {
//     doTest(     0, '00:00:00');
//     doTest(    59, '00:00:59');
//     doTest(    60, '00:01:00');
//     doTest(    90, '00:01:30');
//     doTest(  3599, '00:59:59');
//     doTest(  3600, '01:00:00');
//     doTest( 45296, '12:34:56');
//     doTest( 86399, '23:59:59');
//     doTest( 86400, '24:00:00');
//     doTest(359999, '99:59:59');
//   });
// });

// ✔ SOLUTION

// my solution
function humanReadable (seconds) {
 const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  
  return `${hours>=10?hours:`0${hours}`}:${minutes>=10?minutes:`0${minutes}`}:${secs>=10?secs:`0${secs}`}`;

}

console.log(humanReadable( 0));

//BEST PRACTICES
// function humanReadable(seconds) {
//   var pad = function(x) { return (x < 10) ? "0"+x : x; }
//   return pad(parseInt(seconds / (60*60))) + ":" +
//          pad(parseInt(seconds / 60 % 60)) + ":" +
//          pad(seconds % 60)
// }