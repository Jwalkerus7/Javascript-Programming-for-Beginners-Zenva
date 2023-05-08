// Function declaration
// 1 hour = 60 minutes
function hourToMinutes(hours) {
    let result = hours * 60;
    console.log(result);
    return result;
}

let a = hourToMinutes(10);
let b = hourToMinutes(20);
// Can call here outside of block or inside block as shown above. Can do both at the same time
// console.log(a);
// console.log(b);

let dayToHours = function(days) {
    return days * 24
}
let c = dayToHours(1);
console.log(c);

// Shop orders
// Orders come in
// Check wether there is enough stock
// Increase account balance
// variables declaration
let balance = 100;
let stock = 50;
let price = 5;
// let quanity = 8;

function sellItem(quanity) {
    // check if we have stock
    if(quanity <= stock) {
        // reduce stock, increase balance
        // stock = stock - quanity;
        stock -= quanity;
        // balance = balance + price * quanity;
        balance += price * quanity;

        console.log('purchase completed', balance, stock);
    }
    else {
        console.log('not enough stock');
    }
}
// executing or calling the function
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);
sellItem(10);



