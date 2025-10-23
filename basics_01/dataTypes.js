// number -> upto 2^53
// bigInt
// string -> "string"
// boolean -> true/false
// null -> object but it is a standalone value
// undefined
// symbol -> unique

//object

// ###############################  Primitive  #####################################
// 7 types: number, bigInt, string, boolean, null, undefined, symbol

let userId = 1001;
let bigNum = 3456543576654356754n;
const userName = "har";
let isLoggedIn = true;
let userAdd = null;
let loc; // or let loc = undefined;

const idOne = Symbol("1002");
const idTwo = Symbol("1002"); //these two will return diff values, Symbol make them unique

// console.log(idOne === idTwo); //false

// console.log(typeof userId);
// console.log(typeof bigNum);
// console.log(typeof userName);
// console.log(typeof isLoggedIn);
// console.log(typeof userAdd); // null is a standalone value, typeof return value is object
// console.log(typeof loc);

// ###############################  Reference (Non-primitive)  #####################################
// Array, Objects, Functions

const dept = ["cse", "eee", "ese", "swe", "ict"];

let myObj = {
  name: "har",
  age: 22,
  id: 1001,
};

const myFunc = function () {
  console.log("Hello Js!");
};

// console.log(typeof dept); //object
// console.log(typeof myObj); //object
// console.log(typeof myFunc); //function

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++   Memory    +++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2 types: Stack (Premitive), Heap (Non-Primitive)

// Stack:
let userMail = "abc@gmail.com";
let anotherUserMail = userMail;

anotherUserMail = "xyz@gmail.com";

console.log(userMail);
console.log(anotherUserMail);

//Heap:
let userOne = {
  name: "har",
  mail: "yui@google.com",
};

let userTwo = userOne;

userTwo.name = "abul"; // both user's name will change to abul

console.log(userOne);
console.log(userTwo);
