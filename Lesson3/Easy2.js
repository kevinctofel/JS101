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
let nums = [1, 2, 3, 4, 5]
// Answer:
nums.splice(2, 1);
console.log(nums);