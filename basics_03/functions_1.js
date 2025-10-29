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

function loginMessage(userName = "No one") {
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
console.log(loginMessage()); // Please enter a valid userName (it will show with if condition)
