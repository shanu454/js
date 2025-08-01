let score = 33

console.log(typeof score) 
console.log(typeof(score)) 

let valueInNumber = Number(score) // convert string to number
//console.log(typeof valueInNumber) // number
//console.log(valueInNumber) // NaN(not a number)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "shanu" => true

let someNumber = 52

let stringNumber = String(someNumber)
console.log(typeof stringNumber)