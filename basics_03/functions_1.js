// Syntax:
// function sayMyName() {
//   console.log("har");
// }

// sayMyName(); //har

function sum(num1, num2) {
  console.log(num1 + num2);
}
// sum(5, 5); //10
// sum(5, "A"); //5A
// sum(10, null); //10
// sum("Hello", 101); //Hello101

function sum1(num1, num2) {
  return num1 + num2;
}
// const ans = sum1(6, 8);
// console.log("Sum of numbers: ", ans);
// console.log(`Sum of numbers: ${ans}`); //see the difference

function sum2(num1, num2) {
  return num1 + num2;
  console.log("This statement will not execute"); // after return statement, no statement will execute.
}
// console.log("Result =", sum2(5, 3));

function loginMessage(userName) {
  // !userName ≈ userName === undefined || userName === null || userName === ""
  // means if userName is falsy (such as undefined, null, "", 0, false, etc.), then the if block will execute.
  if (!userName) {
    console.log("Please enter a valid userName");
    return;
  }
  return `${userName} just logged in`;
}
// console.log(loginMessage("har"));    // har just logged in
// console.log(loginMessage()); // undefined just logged in (it will show without if condition)
// console.log(loginMessage()); // Please enter a valid userName (it will show with if condition)

function greetings(user = "Unknown") {
  return `Welcome! ${user}`;
}
// console.log(greetings("har")); //Welcome! har

// if we don't pass any attribute Unknown will be the default user.
// console.log(greetings()); //Welcome! Unknown;

// Imagine shopping cart:

// ###################      rest parameter(...)      ############################
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 400, 500, 2000)); //[ 200, 400, 500, 2000 ] if we need to pass unlimited argument, we use rest(...) parameter

function calculateCartPrice2(val1, val2, ...num1) {
  return num1;
}
// The first two parameters (val1, val2) will receive their values individually.
// All the remaining values will be collected into an array inside ...num1.

console.log(calculateCartPrice2(200, 400, 500, 2000)); // [ 500, 2000 ]

// ###################       Handle Object      ########################

const user = {
  username: "har",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user);
// we can pass direct obj:
handleObject({
  username: "abul",
  price: 399,
});

// ###################       Handle Arry      ########################

const myArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myArray));
// we can pass direct array:
console.log(returnSecondValue([100, 300, 500, 1000]));
