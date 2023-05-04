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

// QUESTION 3:  Code fails when the input is 0 or a negative number, and asked Alan to change the loop. How can he make this work without using a do/while loop?
// MY ANSWER:
// function factors(number) {
//   // let divisor = number;
//   let factors = [];
//   if (number > 0) {
//     for (index = number; index > 0; index--){
//       if (number % index === 0) {
//         factors.push(number / index);
//     }
//   }
// }
//   return factors;
// }
// LS ANSWER:
// while (divisor > 0) {
//   if (number % divisor === 0) {
//     factors.push(number / divisor);
//   }
//   divisor -= 1;
// }

// QUESTION 4: Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.
// She wrote two implementations of the code for adding elements to the buffer. In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".
// Is there a difference between these implementations, other than the method she used to add an element to the buffer? 

// function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
//   buffer.push(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }

// function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
//   buffer = buffer.concat(newElement);
//   if (buffer.length > maxBufferSize) {
//     buffer.shift();
//   }
//   return buffer;
// }
// My answer: Concat() returns the buffer contents in a new array, while push() returns the length of the array and mutates it.
// LS answer: Yes, there is a difference. While both functions have the same return value, the first implementation mutates the argument represented by buffer. That is, the caller will see that the array is different when the function returns. The rollingBuffer2 implementation doesn't mutate the argument specified by the value of buffer.

// QUESTION 5: What is the output
// console.log(0.3 + 0.6);
// console.log(0.3 + 0.6 === 0.9);
// My answer:
// 0.9
// true
// LS Answers:
// 0.8999999999999
// false
// This is due to JS using floating point numbers for all numeric operations

// QUESTION 6: What will this code output?
// let nanArray = [NaN];
// console.log(nanArray[0] === NaN);
// false

// QUESTION 7: What is the output:
// let answer = 42;
// function messWithIt(someNumber) {
//   return (someNumber += 8);
// }
// let newAnswer = messWithIt(answer);
// console.log(answer - 8);
// 34
// QUESTION 8: One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" }
// };

// function messWithDemographics(demoObject) {
//   Object.values(demoObject).forEach(familyMember => {
//     familyMember["age"] += 42;
//     familyMember["gender"] = "other";
//   });
// }

// After writing this function, he typed the following code:
// messWithDemographics(munsters);
// console.log(munsters);
// Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?
// MY ANSWER: Yes, because the function passes a reference to the original munsters object.

// QUESTION 9: Function and method calls can take expressions as arguments. Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, but with a slight twist: in the event of a tie, it just returns the choice made by both players.
// function rps(fist1, fist2) {
//   if (fist1 === "rock") {
//     return fist2 === "paper" ? "paper" : "rock";
//   } else if (fist1 === "paper") {
//     return fist2 === "scissors" ? "scissors" : "paper";
//   } else {
//     return fist2 === "rock" ? "rock" : "scissors";
//   }
// }
// //What does the following code output?
// console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
// Paper

// QUESTION 10: consider this code
// function foo(param = "no") {
//   return "yes";
// }

// function bar(param = "no") {
//   return param === "no" ? "yes" : "no";
// }
// what does this return?
// console.log(bar(foo()));
// No because foo() always returns 'yes'