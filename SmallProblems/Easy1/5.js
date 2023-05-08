// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

let input = require('readline-sync');

let billAmount = parseFloat(input.question("What is the bill total? "));
let tipPercent = parseFloat(input.question("What is the tip percentage? "));

let tipAmount = (billAmount * (tipPercent / 100))
let totalBill = (billAmount += tipAmount);

console.log(`The tip is $${tipAmount.toFixed(2)}.`);
console.log(`The total bill is $${totalBill.toFixed(2)}.`);
