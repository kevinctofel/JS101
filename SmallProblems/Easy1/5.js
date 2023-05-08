// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

let input = require('readline-sync');

let billAmount = parseInt(input.question("What is the bill total? "), 10);
let tipPercent = parseInt(input.question("What is the tip percentage? "), 10);

let tipAmount = billAmount * (tipPercent / 100);
let totalBill = billAmount += tipAmount;

console.log(`The tip is $${tipAmount}.`);
console.log(`The total bill is $${totalBill}.`);
