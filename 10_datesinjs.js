let myDate = new Date();
console.log(myDate); // Current date and time 
console.log(myDate.toString()); // Convert Date to string
console.log(myDate.toJSON()); // Convert Date to JSON string
console.log(myDate.toLocaleString()); // Convert Date to localized string
console.log(myDate.toLocaleDateString()); // Convert Date to localized date string
console.log(myDate.toLocaleTimeString()); // Convert Date to localized time string
console.log(myDate.toISOString()); // Convert Date to ISO string
console.log(myDate.getTimezoneOffset()); // Get timezone offset in minutes
console.log(typeof myDate); // Check type of myDate


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // Specific date and time

let mynewdate = new Date("2023-01-14")
console.log(mynewdate.toLocaleString()); // Convert specific date to localized string+

let myTimeStamp = Date.now()

console.log(myTimeStamp); // Get current timestamp in milliseconds
console.log(myCreatedDate.getTime()); // Get timestamp of specific date in milliseconds
console.log(Math.floor(myTimeStamp / 1000)); // Get current timestamp in seconds


let newDAte = new Date()
console.log(newDAte.getMonth()); // Get current month (0-11)
console.log(newDAte.getFullYear()); // Get current year
console.log(newDAte.getDate()); // Get current day of the month (1-31)