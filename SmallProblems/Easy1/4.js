// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

let input = require('readline-sync');
const SQUARE_FEET_ONE_METER = 10.7639;

let length = parseInt(input.question("Enter the length of the room: "), 10);
let width = parseInt(input.question("Enter the width of the room: "), 10);

let areaInMeters = (length * width) / SQUARE_FEET_ONE_METER;

console.log(`The room is ${areaInMeters} meters square (${length * width} square feet).`);
