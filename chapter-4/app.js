// ARRAY
// CREATING AN ARRAY
let students = new Array("Amadu", "Brian", "Foday");
console.log(students);

// ARRAY OF FRUITS
let fruits = ["Apple", "Banana", "Orange", "Lemon", "Guava"];
console.log(fruits);

// NOTE:
/* 
1. The data stored in an array are called elements
2. Array stores elements of any data type (Mixed collection of elements)
3. Elements stored in an array are positional indexed based
4. The first element in an array is indexed at 0th position
5. Elements stored in are seperated with comma(,)
*/

let mixedData = [
  "Programming in Java",
  23,
  null,
  undefined,
  NaN,
  { name: "Samuel", age: 67 },
  { name: "Angella", age: 16 },
  { name: "Brian's Crush", age: 24 },
  ["Apple", "Banana", "Orange"],
  students,
];
console.log(mixedData);

// ACCESSING ELEMENTS IN AN ARRAY
console.log(fruits[1]); //Printing the second element of the array
console.log(fruits[3]); //Printing the fourth element of the array
console.log(mixedData[5]); //Printing the sixth element of the array
console.log(mixedData[5].name); //Printing the fifth element's object's property(name) of the array
console.log(mixedData[5].age); //Printing the fifth element's object's property(age) of the array
console.log(mixedData[6].name); //Printing the sixth element's object's property(name) of the array.

// Adding elements to the Array
let emptyFruits = [];

// push() method
emptyFruits.push("Banana");
emptyFruits.push("Mango");
emptyFruits.push("Orange");
console.log(emptyFruits);

// Removing elements from an Array
// Use the pop() method
emptyFruits.pop(); // Removes the last element in the array
emptyFruits.push("Isatu", "Fatu"); // Adding two elements to the end of the array
emptyFruits.pop(); //Removes the last element from the array
console.log(emptyFruits);

// Adding elements to the start/begining of the new array
// unshift() method
emptyFruits.unshift("Plaintain"); //Adds element to the begining of the array
emptyFruits.unshift("Beans"); //Adds element to the begining of the array

console.log(emptyFruits);

// Removing an element at the start/begining of an array
emptyFruits.shift(); //Removes elements to the begining of the array
emptyFruits.shift(); //Removes element ton the begining of the array
console.log(emptyFruits);

// EXERCISE 1
let studentsDb = [];

studentsDb.push({
  id: 90909090,
  name: "Despitch Brian Allieu",
  email: "ddddd@gmail.com",
  phoneNumber: 975345698,
});
studentsDb.push({
  id: 90909090,
  name: "Despitch Brian Allieu",
  email: "ddddd@gmail.com",
  phoneNumber: 975345698,
});

studentsDb.push({
  id: 90909090,
  name: "Despitch Brian Allieu",
  email: "ddddd@gmail.com",
  phoneNumber: 975345698,
});

studentsDb.push({
  id: 90909090,
  name: "Despitch Brian Allieu",
  email: "ddddd@gmail.com",
  phoneNumber: 975345698,
});
console.log(studentsDb);
