let distance = 150;
let fuel = 100;
let distanceCondition = distance <= 200 && distance >= 100;
let isEngineBroken = true;
let isEngineFunctioning = false;

// console.log(distanceCondition);
if(!isEngineFunctioning || distance >= 200) {
    console.log('wont make it');
}

else if(distanceCondition && fuel >= 100) {
    console.log('will make it');
}

else if(distance < 100 && fuel >= 25) {
    console.log('will make it');
}

// let distance = 250;
// let fuel = 100;

// these are boolean variables
// let distanceCondition = distance <= 200 && distance >= 100; 
// let isEngineFunctioning = true;

// console.log(distanceCondition);

// if(!isEngineFunctioning || distance > 200) {
//   console.log('wont make it');
// }

// else if(distanceCondition && fuel >= 100) {
//   console.log('you will make it');
// }

// else if (distance < 100 && fuel >= 25) {
//   console.log('you will make it');
// }

// Boolean Variables
// Can have a value of true or false
// let inOrbit = true;
// let isBroken = true;

// We can save the result of a conditional statement
// "result" will be true
// let result = 10 > 3;

// "anotherResult" will be false
// let anotherResult = "A" == "B";

// Boolean Operators - AND
// Represented by &&
// Both conditions need to be true, in order for the expression to be true
// if(fuel >= 50 && distance <= 30) {
    // BOTh expressions are true for this to be executed
// }

// Boolean Operators - OR
// Represented by ||
// if(inOrbit || fuel > 1000) {
    // Either one or both expressions need to be true for this to be executed
// }

// Boolean Operators - NOT
// Add ! befor the expression you want to negate
// A true expression becomes false
// A false expression becomes true
// if(!inOrbit) {
    // This will only be executed if inOrbit is false,
    // as that makes !inOrbit true
// }
