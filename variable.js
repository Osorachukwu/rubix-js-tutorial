// Variable named containers for storing data. 
// keywords for decalring variables: 
// var can be redeclared and reassigned.
// let cannot be redeclared but can be reassigned.
// const cannot be redeclared or be reassigned. Must be initialized on the same line.

// varible declaration
// var myName;
// let today;
// const nigeria = "Corrupt";

// var myName; //var redeclared

// variable initialization
// myName = "John Doe";
//myName = "Jane Doe"; //var reassigned
// today = "Monday";
// today = "Tuesday"; //let reassigned

// Single line declaration and initialization
// let timeOfDay = "Evening";

// console.log(myName);
// console.log(today);

// 💥Variable naming conventions...


// DataTypes(strings, number, boolean, undefined, null, arrays, objects);
// Strings is sequences of characters... (text) and are written in qoutes(single, double, backticks)
let myName = "John Doe";
// Number(1 - 9)
let todaysDate = 24;
// boolean used to represent true or false values
let iAmADeveloper = false;
// undefined uninitialized variables
let tommorrow;
// null
let goodGovernance = null;
// Array for storing a list of items, array items are written square brackets and seperated by coma(,).
// Array items are zero index based
// An array can be manipulated using square brackets and array methods.
let fruit = ["Orange", "Mango", "Guava", "Udara", "Pineapple"];
// fruit.push("Cashew"); //add an item to the end of the array
// fruit.pop(); //remove the last item
// fruit.shift(); //remove the first item
// fruit.unshift("Kiwi"); //add an item to the beginning of the array
// fruit.splice(1, 3);

// Object use to store key(name) - value pairs, object properties are seperated by coma. Object can be manipulated using dot notation. 
let myPhone = {
    brand: "Huawie",
    model: "Y7 prime",
    color: "Black",
};
myPhone.screenSize = "5inches";
myPhone.screenSize = "6";
delete myPhone.brand;
console.log(myPhone);
