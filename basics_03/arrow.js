const user = {
  username: "har",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to darkweb!`);
    console.log(this); // refers to current(user) obj.
  },
};

// user.welcomeMessage();
// user.username = "abul"; // Now changed the context
// user.welcomeMessage();

// console.log(this); // {}; refers to empty obj
// But in console, it refers to Window obj. which is a global obj

const checkThis2 = function () {
  console.log(this); // this can be only used in object
};
// checkThis2(); // check the output

function checkThis1() {
  let username = "har";
  console.log(this.username); // this can be only used in object
}
// checkThis1(); //check the output: Undefined

// ########################     arrow function      #######################

const checkThis3 = () => {
  console.log(this);
};
// checkThis3(); // {}

// Syntax:
// 1. () => expression

// 2. (param) => expression

// 3. (param1, paramN) => expression

// 4. () => {
//      statements
//      }

// 5. (param1, paramN) => {
//      statements
//      }

const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(5, 5));
// Must Know: if use {}, then use return statement

const addTwo2 = (num1, num2) => num1 + num2;
// Must Know: if don't use {}, then don't use return statement
console.log(addTwo2(7, 5));

const addOne = (num) => ({ userName: "har" }); // returns { userName: 'har' }; but we no need to write return.
console.log(addOne(5));
