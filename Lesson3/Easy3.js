// QUESTION 1: Write three different ways to remove all of the elements from the following array:
// let numbers = [1, 2, 3, 4];
// ANSWERS:
// numbers.splice(0, numbers.length);
// console.log(numbers);
// numbers = [1, 2, 3, 4];
// numbers.length = 0;
// console.log(numbers);
// numbers = [1, 2, 3, 4];
// while (numbers.length > 0) numbers.pop();
// console.log(numbers);

// QUESTION 2: What will the following code output?
// console.log([1, 2, 3] + [4, 5]); // coerced to strings then concatenation
// ANSWER:
// [1, 2, 34, 5];

// QUESTION 3: What will the following code output?
// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);
// ANSWER: strings are primitive values
// hello there

// QUESTION 4: What will the following code output?
// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice(); // <= copy to the reference of arr1
// arr2[0].first = 42; // <= updates both arr1 and arr2
// console.log(arr1);

// [{ first: 42}, second: "value2"} , 3, 4, 5]

// QUESTION 5: rewrite this function so it only has one return statement and does not explicitly use either true or false?

// function isColorValid(color) {
  // if (color === "blue" || color === "green") {
  //   return true;
  // } else {
  //   return false;
  // }
  // ANSWER
//   return (color === "blue" || color === "green");
// }

// console.log(isColorValid('blue'));