// 😱 DESCRIPTIONS
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.
// 🐱‍👤 TESTS

// assert.strictEqual(unusedDigits(12, 34, 56, 78), "09")
// 	  assert.strictEqual(unusedDigits(2015, 8, 26), "3479")

// ✔ SOLUTION

// my solution

function unusedDigits(...args) {
  const allDigits = new Set('0123456789');
    const foundDigits = new Set(); // To track digits found in input numbers

    // Step 2: Collect digits from input arguments
    for (const number of args) {
        const digits = String(number); // Convert number to string
        for (const digit of digits) {
            foundDigits.add(digit); // Add each digit to foundDigits
        }
    }

    // Step 3: Find missing digits
    const missingDigits = [...allDigits].filter(digit => !foundDigits.has(digit));

    // Step 4: Sort and format the result
    return missingDigits.sort().join(''); // Sort and join the result
}  


console.log(unusedDigits(2015, 8, 26));

//BEST PRACTICES
//first
// function unusedDigits(...args){
//   return "0123456789".replace(new RegExp('['+args.join('')+']','g'), '')
// }

//second
// function unusedDigits(...args) {
//   // Given: varying # of integer arguments
//   // define the parameter
//   // create a variable   
  
//   const numbers = [0,1,2,3,4,5,6,7,8,9];
  
//   // change the arguments from integer into a string   
//   //join 
//   let numStr = args.join('');  
  
//   // filter out those that are not present in any of the arguments
//   // Return: a sorted string of digits
//   return numbers.filter(element => !numStr.includes(element)).join('')
// }