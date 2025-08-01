const score = 400
console.log(score); // 400

const balance = new Number(100)
console.log(balance); // Number object

console.log(balance.toString()); // Convert Number object to string
console.log(balance.toString().length); // Get length of string
console.log(balance.toFixed(2)); // Convert Number object to fixed decimal string

const otherNumber = 429.8566

console.log(otherNumber.toPrecision(3)); // Convert Number to string with 3 significant digits

const hundreds = 10000004
console.log(hundreds.toLocaleString('en-US')); // Convert Number to localized string
console.log(hundreds.toLocaleString('en-IN')); // Convert Number to localized string in Indian format



//-------------Maths-------------


console.log(Math); // Math object 
console.log(Math.abs(-10)); // Absolute value
console.log(Math.round(4.7)); // Round up
console.log(Math.ceil(4.1)); // Round down
console.log(Math.floor(4.9)); // Round down
console.log(Math.min(72, 40, 58, 60)); // Minimum value
console.log(Math.max(72, 40, 58, 60)); // Maximum value

console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random()*10) + 1); // Random number between 1 and 11


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))