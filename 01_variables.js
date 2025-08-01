const accountId = 144553
let accountEmail = "shanu2@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

//accountId = 2 // not allowed

accountEmail = "ab@s.com"
accountPassword = "123456"
accountCity = "Noida"

/*
Prefer not to use var
beacuse of issue in block scope and function scope
Use let and const instead
*/



console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);