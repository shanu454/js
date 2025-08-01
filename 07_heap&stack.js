// Stack (Primitive) vs Heap (Non-Primitive)


let myNickname = "sam";

let myname = myNickname
myname = "shanu";

console.log(myNickname); // sam
console.log(myname); // shanu

let userone = {
    email: "userone@google.com",
    upi: "userone@upi"
}

let usertwo = userone
usertwo.email = "shanu@google.com"

console.log(userone.email); 
console.log(usertwo.email);// userone.email = "shanu@google.com"