// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.
const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');
// Refactor the prompt
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// prompt('Welcome to calculator!');
prompt(MESSAGES["welcome"]);

let repeat = true;
// Ask user for another calculation
while (repeat) {
  // prompt('What\'s the first number?');
  prompt(MESSAGES["firstNumber"]);
  let number1 = readline.question();
  // Add input validation
  while (invalidNumber(number1)) {
    prompt(MESSAGES["invalidNumber"]);
    number1 = readline.question();
  }

  prompt(MESSAGES.secondNumber);
  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidNumber);
    number2 = readline.question();
  }

  console.log(`${number1} , ${number2}`);

  prompt(MESSAGES.selectOperation);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES.invalidOp);
    operation = readline.question();
  }

  let output; // Refactor if/else to switch statement
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`The result is: ${output}`);

  prompt('Do you want to do another calculation? Y)es or N)o');
  let doAnother = readline.question();
  if (doAnother !== 'Y') {
    repeat = false;
  }
  console.clear();
}