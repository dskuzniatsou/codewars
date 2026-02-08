// 😱 DESCRIPTIONS
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"
// 🐱‍👤 TESTS

// describe("Tests", () => {

//   const { strictEqual } = require('chai').assert;

//   function doTest(r, g, b, expected) {
//       const actual = rgb(r, g, b);
//       const message = `for r = ${r} g = ${g} b = ${b}`;
//       strictEqual(actual, expected, message);
//   }

//   it("Sample Tests", () => {
//     doTest(  0,   0,   0, '000000');
//     doTest(  0,   0, -20, '000000');
//     doTest(300, 255, 255, 'FFFFFF');
//     doTest(173, 255,  47, 'ADFF2F');
//   });
// });


// ✔ SOLUTION

// my solution
function rgb(r, g, b) {
  let rgbmin = [r,g,b].map(x=> x<0? 0:x>255? 255:x)
    return rgbmin.map(num=>num.toString(16,0).padStart(2,0)).join('').toUpperCase()
}

console.log(rgb(300, 255, 255));

//BEST PRACTICES
// function rgb(r, g, b){
//   return [r,g,b].map(function(x) {
//     return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
//   }).join('').toUpperCase();
// }

// function rgb(r, g, b){
// 	return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }