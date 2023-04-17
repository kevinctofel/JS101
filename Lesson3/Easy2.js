// QUESTION 1:
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
// let advice = "Few things in life are as important as house training your important pet dinosaur.";

// Answer:
// console.log(advice.replaceAll('important', 'urgent'));

// QUESTION 2:  Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
// let numbers = [1, 2, 3, 4, 5];
// let num1 = [...numbers].reverse();
// console.log(num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 4, 5];
// let sortedNums = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]
// console.log(sortedNums);
// Answer: use shallow copies of the arrays, i.e.: [...numbers] to preserve the original arrays.

// QUESTION 3: Given a number and an array, determine whether the number is included in the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true
 // Answer:
// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// QUESTION 4: show two different ways to put the expected "Four score and " in front of this string.
// let famousWords = "seven years ago...";
// Answer:
// console.log('Four score and '.concat(famousWords));
// console.log(`Four score and ${famousWords}`);

// QUESTION 5: Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].
// let nums = [1, 2, 3, 4, 5]
// // Answer:
// nums.splice(2, 1);
// console.log(nums);

// QUESTION 6: Create a new array that contains all of the above values, but in an un-nested format.
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// let newNames = flintstones.flat();
// console.log(newNames);

// QUESTION 7: Create an array from this object that contains only two elements: Barney's name and Barney's number.
// ANSWER: 
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// let barneyArray = [];
// Object.entries(flintstones).forEach (([key, value]) => {
//   if(key == 'Barney') {
//     barneyArray.push(key, value);
//   }
// })
// console.log(barneyArray);
// LS ANSWER:
// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// QUESTION 8: How would you check whether the objects assigned to variables numbers and table below are arrays?
// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// ANSWER:
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// QUESTION 9: f we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?
// let title = "Flintstone Family Members";
// ANSWER:
// let pad = Math.floor((40 - title.length) / 2);
// console.log(pad);
// console.log(title.padStart(pad + title.length));

// QUESTION 10: Write a one-line expression to count the number of lower-case t characters in each of the following strings:
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";
// ANSWER
// console.log(statement1.split('').filter(char => char === 't').length);
// console.log(statement2.split('').filter(char => char === 't').length);
// filter returns an array that matches the callback, so the length of that array is the answer
