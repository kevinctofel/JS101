/* eslint-disable max-len */
// m = monthly payment
// p = loan amount
// j = monthly interest rate
// n = loan duration in months

const MESSAGES = require('./mortgageCalculator-messages.json');

let loanAmount, monthlyIntRate, loanDurationYears, monthlyPayment;

const readline = require('readline-sync');
// Refactor the prompt
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return   number.trim() === '' ||
  Number(number) < 0   ||
  Number.isNaN(Number(number));
}

console.clear();
prompt(MESSAGES["welcome"]);
prompt(MESSAGES["loanAmount"]); // ask for loan amount
loanAmount = (readline.question());
while (invalidNumber(loanAmount)) {
  prompt(MESSAGES["invalidNumber"]);
  loanAmount = (readline.question());
}

prompt(MESSAGES.intRate); // ask for annual interest rate
let annualIntRate = (readline.question());
while (invalidNumber(annualIntRate)) {
  prompt(MESSAGES.invalidNumber);
  annualIntRate = ((readline.question()));
}
monthlyIntRate = annualIntRate / 100 / 12;

prompt(MESSAGES.loanDuration); // ask for mortgage duration in years
loanDurationYears = (readline.question());
while (invalidNumber(loanDurationYears)) {
  prompt(MESSAGES.invalidNumber);
  loanDurationYears = (readline.question());
}
let loanDurationMonths = loanDurationYears * 12;

monthlyPayment = Number(loanAmount) * (monthlyIntRate / (1 - Math.pow((1 + monthlyIntRate), (-(loanDurationMonths))))); // formula for monthly payment

console.log('This loan will be ' + loanDurationMonths + " payments of " + monthlyPayment.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
