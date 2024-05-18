// ! primitive datatypes : call by value
// * 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt=> scintific values

// JS is Dynamically typed

const score = 100
const scoreValue = 99.4

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const otherId = Symbol('123')

// console.table([score,scoreValue,isLoggedIn,outsideTemp,userEmail,id,otherId]);
// console.log(id == otherId);
// console.log(id === otherId);

const bigNumber = 8765432187595626164n
// console.log(bigNumber);


// --------------------------------------------------------------------------------------------------------------


// ! non-primitive datatypes : call by reference (Reference type)
// * Array ,  objects , functions

const heros = ["daman", "shaktiman", "nageraj"]
const myObj = {
    name:"Dhairya",
    age:22,
    email:"dhairya@gmail.com"
};

// console.log(heros);
// console.log(myObj);

const myFunction = function(){
    console.log("Hello-World");
}
// console.log(typeof bigNumber); bigInt
// console.log(typeof outsideTemp); object

// ---------------------------------------------------------------------------------------------------------------------------

// ! Stack memory used in Primitive types => copy mitla h => chages copied file then 
// ! Heap memory used in Non-Primitive types => original value milti h => changes directly to original file

let myName = "Dhairya"
let anotherName = myName
anotherName = "Coding"
console.log(anotherName)
console.log(myName)

let userOne ={
    email : "user@MediaList.com",
    UPI : "user@axil"
}

let userTwo = userOne

userTwo.email = "dg@mail.com"

console.log(userOne.email);
console.log(userTwo.email);