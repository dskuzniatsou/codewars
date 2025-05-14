// 😱 DESCRIPTIONS

// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
// 🐱‍👤 TESTS
// Test.assertEquals(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
// Test.assertEquals(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
// Test.assertEquals(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
// Test.assertEquals(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
// Test.assertEquals(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
// Test.assertEquals(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
// Test.assertEquals(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
// Test.assertEquals(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");

// ✔ SOLUTION

// my solution
function getDrinkByProfession(param) {
  let getDrink = param.toLowerCase()
  console.log(getDrink);
  switch (getDrink) {
    case "jabroni":
      return "Patron Tequila"
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
  }
  
}

  
  console.log(getDrinkByProfession("scHOOl counselor"));

  //Best Practices

  // function getDrinkByProfession(param) {
  //   const table = {
  //     jabroni: "Patron Tequila",
  //     "school counselor": "Anything with Alcohol",
  //     programmer: "Hipster Craft Beer",
  //     "bike gang member": "Moonshine",
  //     politician: "Your tax dollars",
  //     rapper: "Cristal",
  //   };
  //   if (param.toLowerCase() in table) {
  //     return table[param.toLowerCase()];
  //   } else {
  //     return "Beer";
  //   }
  // }