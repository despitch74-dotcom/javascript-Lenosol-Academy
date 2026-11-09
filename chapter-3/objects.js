// JS - OBJECTS
const student = {
  firstName: "Despitch",
  lastName: "Allieu",
  age: 19,
  walk: true,
  girlfriend: false,
  university: "Limkokwing",
  program: "BSEM",
  occupation: "Web Designer",
  photo: "https://www.pixabay.com/mohamed-pic-002",
  website: "https://despitch-allieu.netlify.app/",
};

// Printing the objects
console.log(student);

// accessing a property of an objects
console.log(student.age);

// Uopdating an attribute in an object
student.occupation = "website designer";
console.log(student);

// Adding a new property to the object
student.gender = "Male";
console.log(student);

let citizen1 = {
  citizenFirstName: "Angella",
  citizenLastName: "Allieu",
  citizenLocation: "murraytown",
  citizenIdNumber: 90523549,
  citizenAge: 67,
};
// console.log(citizen1); wrong

let citizen = `First Name: ${citizen1.citizenFirstName} \n Last Name: ${citizen1.citizenLastName} \n Location: ${citizen1.citizenLocation} \n ID Number: ${citizen1.citizenIdNumber} \n Age: ${citizen1.citizenAge}`;

console.log("** SIERRA LEONE NATIONAL ID CARD **");
console.log(citizen);
console.log("*********** SL ID CARD ***********");

const house = {
  location: "Lumley",
  numberOfRooms: 4,
  Parlour: 2,
  bathrooms: 5,
  owner: "Angella Allieu",
  pricePerNight: 100,
  facilities: [
    "Internet",
    "One Mobile - Wifi",
    "Kitchen",
    "TV",
    "Car Park",
    "Pool",
    "Beach Access",
    "No Smoking",
  ],
  apartment: {
    name: "Block D Appartment",
    numberOfRooms: 2,
    gamingTv: 1,

  }
};
console.log(house);
console.log(house.apartment);
console.log(house.facilities[0]);
console.log(house.facilities[1]);
console.log(house.facilities[2]);
console.log(house.facilities[3]);
console.log(house.facilities[4]);
console.log(house.facilities[5]);
console.log(house.facilities[6]);
