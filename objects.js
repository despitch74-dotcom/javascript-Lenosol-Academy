let dog = {
    colour : "Black" ,
    age : 34 ,
    legs : 4 ,
    weight : "50kg" ,
    dateOfBirth : "2000" ,
    name : "Musa"
}
console.log(dog);

console.log(dog.weight);
dog.weight = "70kg"
console.log(dog.weight);

console.log("===================================");

dog.owner = "foday"

console.log(dog.owner);

console.log("===================================");
let myObjects = {
    firstName: "Despitch",
    middleName: "Brian",
    lastName: "Allieu",
    nameOfFather: "Leonard",
    nameOfMother: "Gladys",
    hobbis: ["Eat", "Sleep", "Soccer"],
    food: {
        morning: "Bread",
        afternoon: "Rice"
    },
    action: function() {
        return "Hello World!"
    }
}
console.log(myObjects.action());
console.log(myObjects.hobbis[0]);
console.log(myObjects.food.afternoon);