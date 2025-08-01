// Primitive 

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100; // Number
const scoreValue= 100.3; // Number with decimal`

const isLoggedIn = true; // Boolean
const outsideTemp = null;
let userEmail; // undefined 

const id = Symbol('123'); // Symbol
const anotherId = Symbol('123'); // Different Symbol, even though description is same

console.log(id === anotherId); // false

const bigNumber = 1648932351649465189n; // BigInt



// Refernce (Non Primitive)

// Array, Object, Function

const heros = ["shaktiman", "batman", "superman"]; // Array
let myObj = {
    name: "shanu",
    age: 20,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber); // bigint
console.log(typeof outsideTemp); // object
console.log(typeof myFunction); // function
console.log(typeof anotherId); // symbol 