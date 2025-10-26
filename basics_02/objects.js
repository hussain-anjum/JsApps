// singleton: Object.create (constructor)

// object literals:

const user = {};
// console.log(typeof user); //object

const mySymbol = Symbol("key1");

const JsUser = {
  name: "har",
  id: 1001,
  age: 17,
  email: "har@github.com",
  isLoggedIn: true,
  mySymbol: "mykey",
};

// console.log(JsUser);

// console.log(JsUser.name);
// console.log(JsUser.mySymbol);

//But there is another way to access obj value and That is more efficient:
// console.log(JsUser["id"]);
// console.log(JsUser["name"]);

JsUser.email = "har@google.com"; //it will the email of JsUser
// console.log(JsUser);

//But if we freeze the Obj. No value will be change of this Obj:
// Object.freeze(JsUser);

// JsUser.name = "abul";
// console.log(JsUser); // No change in name

// ++++++++++++     Adding function to Object, to create Method     ++++++++++++++

JsUser.greeting = function () {
  console.log("Hello there!");
};

console.log(JsUser.greeting()); // Now greeting() is a method

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`); // use 'this' to refer the same Obj.
};

console.log(JsUser.greetingTwo());
