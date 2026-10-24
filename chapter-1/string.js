let university = "limkokwing University";
console.log(university);
let fullName = "Despitch Allieu";
let Role = "Student";
let id = "905006029";
let gender = "Male";
let faculty = "BSEM Department";

console.log(fullName);
console.log(Role);
console.log(id);
console.log(gender);

// 1. String Concatenation
console.log("**** PERSON INFORMATION ****");
console.log("university" + university);
console.log("Person Name: " + fullName);
console.log("Role: " + Role);
console.log("Faculty: " + faculty);

let sentence =
  "My name is " +
  fullName +
  ". I am a " +
  Role +
  " at " +
  university +
  ". and I am in " +
  faculty +
  "." ;

console.log(sentence);

// String length
let personName = "Despitch Allieu"
console.log(personName.length)


// Getting a character from a string by its index
console.log(personName[3]);
console.log(personName[7]);
console.log(personName[10]);
console.log(personName[11]);

// EXERCISE
// Create an abbrevation of five variable names that has two or three words in them and let the abbreviated variables of those variables have just the starting characters of the values of those variables to be abbreviated.

let MyNameVariable1 = "Despitch Brian Allieu"
let MyNameVariable2 = "Marian Kargbo"
let MyNameVariable3 = "Franklyn Danner"
let MyNameVariable4 = "Franklina Nylander"
let MyNameVariable5 = "Jeneba Njai"

let abvr1 = MyNameVariable1[0] + MyNameVariable1[9] + MyNameVariable1[15]
let abvr2 = MyNameVariable2[0] + MyNameVariable2[7]
let abvr3 = MyNameVariable3[0] + MyNameVariable3[9]
let abvr4 = MyNameVariable4[0] + MyNameVariable4[10]
let abvr5 = MyNameVariable5[0] + MyNameVariable5[7]

console.log(abvr1);
console.log(abvr2);
console.log(abvr3);
console.log(abvr4);
console.log(abvr5);

// String Methods
let MyNameNow = "Despitch Brian Allieu"
console.log(MyNameNow.toUpperCase());
console.log(MyNameNow.toLowerCase());

// String formatting
console.log("\t Despitch Brian Allieu"); //\t is used to tab
console.log("\n Despitch Brian Allieu"); //\n is used to break to a new line

// Template Literal / String Literal
let num1 = 20
let num2 = 30
let num3 = 50
let average = (num1 + num2 + num3) / 3
console.log(`The average of ${num1} + ${num2} + ${num3} = ${average}`);

// Checking if a value exists in a string
let email = "despitch74@gmail.com"
console.log(email.includes("@"));

// Method Chaining
console.log(email.toLowerCase().includes("despitch")); //True

