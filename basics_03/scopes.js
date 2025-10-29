// {
//     scope
// }

let a = 500; // global
var c = 100;

if (true) {
  let a = 10; // block scope
  const b = 20; // block scope
  var c = 30;

  //   console.log("Inner: ", a);
}
// console.log(a); // 500
// console.log(b);
// console.log(c); // 30; This is the problem of var

// +++++++++++++++++++++     Scope in Nested function   ++++++++++++++++++++++++
// Must Know: child function can access parent function variable; but parent function can't access child function variable.

function one() {
  const userName = "har"; // for two() userName is global

  function two() {
    const website = "github";
    console.log(userName);
  }
  //   console.log(website);    //error

  two();
}
one();

// Same as function:
if (true) {
  const username = "abul";

  if (username === "abul") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);  //error
}
// console.log(username);   //error

// ++++++++++++++++++     interesting     ++++++++++++++++++

// function declaration 1:
console.log(addOne(5)); // 6; So, by this we can access 'addOne' before initialization

function addOne(num) {
  return num + 1;
}
// addOne(5);

// function declaration 2:

// addTwo(5); // error: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // 7

// Must know: JS variable can hold anything in it like JSON, function etc.
