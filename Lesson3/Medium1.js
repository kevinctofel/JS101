// QUESTION 1: For this practice problem, write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it. 
// MY ANSWER:
// let text = "The Flintstones Rock!"
// let padding = " ";
// let counter = 0;

// while (counter < 10) {
//   console.log(`${padding.repeat(counter)}${text}`);
//   counter++;
// }
// LS ANSWER (more concise)
// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }

// QUESTION 2: Return a new string that swaps the case of all of the letters:
// let munstersDescription = "The Munsters are creepy and spooky.";
// ANSWER: 
// let newString = munstersDescription.split('').map((char) => {
//   if ((char) === char.toUpperCase())
//     return char.toLowerCase();
//   else
//     return char.toUpperCase(); 
// }).join('');
// console.log(newString);
