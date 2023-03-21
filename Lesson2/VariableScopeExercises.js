// 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

// My answer: 10 because num has global scope.

// 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

// My answer: 5 and then 10. The global variable num is logged, reassigned and then logged.

// 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// My answer: 5 because the myFunc() num variable is shadowing the num global variable. 

// 4. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// My answer: I thought it would log 5 and 10. However, it throws a ReferenceError because the function scope num is called before it is defined.

// 5. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 5;

function myFunc(num) { // a function scope "num" variable is created here
  num = 10;
}

myFunc();
console.log(num);

// My answer: This logs 5 because myFunc(num) initializes a function scope "num" variable that the global scope doesn't know about.

// 6. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

// My answer: This logs 3 to the console because the 'num' variable is global and reassigned in the while loop.

// 7. What will the following code log to the console and why? Don't run it until you have tried to answer.

let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// My answer: This is an infinite loop as the inner 'num' is incremented while the out 'num' never changes.