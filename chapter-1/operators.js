// OPERATORS

// 1. Mathematical Operators
// Addition operators (+)
let num1 = 20
let num2 = 10
let sum = num1 + num2 // Additional Operator Usage
let difference = num1 - num2 // Subtration Operator Usage
let product = num1 * num2 // Multiplication Operator Usage
let quotient = num1 / num2 // Division Operator Usage
let remainder = num1 % num2 // Modulus Operator Usage


console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Comparison Operator
console.log(num1 > num2); //Greater than Operator Usage
console.log(num1 < num2); //Less than Operator Usage
console.log(num1 >= num2); //Greater than or Equal Operator Usage
console.log(num1 <= num2); //Less than or Equal Operator Usage
console.log(num1 == num2); //Equal to Operator or Loose Equal Usage
console.log(num1 == num2); //Equal to Operator or Strict Equal Usage

console.log("----------------------------------------------");

let number = "9"
console.log(number == 9); // True - Loose equality check
console.log(number === 9); // False - Strict equality check

// Logical Operator
let email = "despitch74@gmail.com"
let password = "123456789"

// The Logical And(&&) Operator - Only return true when both both conditions are  true true
console.log(email === "desoboy74@gmail.com" && password === "123456789"); // False
console.log(email === "despitch74@gmail.com" && password === 123456789);  //False
console.log(email === "despitch74@gmail.com" && password === "123456789"); //True

console.log("******************************************");


// The Logical OR(||) - Only returns true when at least one condition is true and false when all conditions are false
console.log(email === "desoboy74@gmail.com" || password === "123456789"); // True
console.log(email === "despitch74@gmail.com" || password === 123456789);  // True
console.log(email === "desoboy74@gmail.com" || password === "12345679"); // False

// The Logical NOt(!) - This operator negate a variable's value.
let abuAge = 34
let mariAge = 23
let fodayAge = "34"
console.log(abuAge != mariAge); // True
console.log(abuAge != fodayAge); // False
console.log(abuAge !== fodayAge); // True
