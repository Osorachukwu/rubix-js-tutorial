// A JavaScript function is reusable a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes, triggers it (calls it). 

// Syntax
// function funcName(parameters1, parameter2) {
// code to executed
// }

// function addNumber(num1, num2) {
//     return num1 + num2;
// };

// let result = addNumber(20, 10);
// console.log(result)
//console.log(addNumber(5, 10)); // 15
//console.log(addNumber(10, 10)); // 20


// function greetUser (name) {
//     console.log (`Welcome ${name}`)
// }
// greetUser("Osorachukwu");

// let myVar = function() {
//     console.log("Hello World");
// }
// myVar();

// let myVar = (name1, name2 )=> console.log("Hello World" + " " + name);
// myVar("Osorachukwu");


// Classes blueprint
class Car {
    constructor(engine, color, year) {
        this.engine = engine;
        this.color = color;
        this.year = year;
    }
    drive() {
        console.log("Driving a car");
    }
}






class EV extends Car {
    constructor(engine, color, year, battery) {
        super(engine, color, year);
        this.battery = battery;
    }
    charging() {
        console.log("Charging the battery");
    }
}
let carOne = new Car("v4", "red", 2009); 
let carTwo = new EV("v6", "white", 2022, "Li-ion");
console.log(carTwo.charging())
console.log(carOne);

