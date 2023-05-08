// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

let input = require('readline-sync');
let productValue = 1;
let productSum = 0;
let userNumber = parseInt(input.question("Enter an integer greater than zero: "), 10);
let userFunction = input.question(`Enter "s" to compute the sum, or "p: to computer the product. `);
const calcProductValue = (userNumber) => {
  for (let i = 1; i <= userNumber; i++) {
    productValue = productValue * (productValue * i);
  }
}


if (userFunction === 'P'.toLowerCase()){
  console.log(`The product of the integers between 1 and ${userNumber} is ${productValue}`);
} 
