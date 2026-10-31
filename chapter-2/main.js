// Nested IF Statment
// Grade Distinction Checker
let grade = 92;

if (grade >= 50) {
  console.log("Congratulations you Passed");

  if (grade >= 90) {
    console.log("You passed with distinction");
  } else {
    console.log("You did not pass with distinction");
  }
} else {
  console.log("Sorry you failed. Please Re-take the exam.");
}

console.log("===========================================");

// Exercise 1
let vanillaCake = 5000;
let chocolateCake = 5000;
let strawberryCake = 5000;
let blueCake = 5000;

let totalCakePrice = vanillaCake + chocolateCake + strawberryCake + blueCake;

console.log(`Your total cake price is ${totalCakePrice}`);

if (totalCakePrice >= 10000) {
  console.log("You won 10% discount. Thank you for doing business with us.");

  if (totalCakePrice >= 20000) {
    console.log("You are also eligible for delivery.");
  } else {
    console.log("But you are not eligible for delivery.");
  }
} else {
  console.log("Thank you for doing business with us.");
}
