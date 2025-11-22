// Object Literal:
const user = {
  username: "har",
  loginCount: 10,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this); // Refers to the current object 'user'
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // Refers to the global object {}, (window in browsers, global in Node.js)

// Constructor Function:
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}

// Creating instances of User without 'new' keyword:
// const userOne = User("har", 12, true);
// const userTwo = User("anjum", 11, false);

// console.log(userOne); // overwrite global object properties

// Creating instances of User with 'new' keyword:
const userOne = new User("har", 12, true);
const userTwo = new User("anjum", 11, false);

console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor); // Refers to the User function
