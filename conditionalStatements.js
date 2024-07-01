// Conditinals allows you to make decissions or choose between two values or expression based on a Condition.

// Syntax:
// condition ? value : value
// If the condition is true, the first value is returned, otherwise the second value is returned.

let drinkingAge = 62;

// let canDrink = drinkingAge >= 18 ? "Can" : "Not";
let canDrink = drinkingAge > 0 && drinkingAge < 18 ? "Soda" : drinkingAge > 18 && drinkingAge <= 60 ? "Beer" : "Wine";


console.log(canDrink);


