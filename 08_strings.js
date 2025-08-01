const name = "Shanu"; // String
const repoCount = 50

console.log(name + repoCount +" Value"); // String concatenation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template literals

const gameName = new String('BG-MI'); // String object
console.log(gameName[0]); // String object
console.log(gameName.__proto__); // String object prototype

console.log(gameName.length); // String object length
console.log(gameName.toLowerCase()); // String object toLowerCase
console.log(gameName.charAt(2)); // String object charAt
console.log(gameName.indexOf('M')); // String object indexOf

const newString = gameName.substring(0, 4); // String object substring
console.log(newString);

const anotherString = gameName.slice(-4, 5); // String object slice
console.log(anotherString); // String object slice

const newStringOne = "   Shanu   "; // String with spaces
console.log(newStringOne);
console.log(newStringOne.trim()); // String object trim

const url = "https://shanu.com/shanu%20bgmi"

console.log(url.replace('%20', '-')); // String object replace

console.log(url.includes('shanu')); // String object includes

console.log(gameName.split('-')); // String object split