function multipleBy5(num) {
  return num * 5;
}
// In JavaScript, functions are also Objects.
// So, we can directly assign properties or variables to a function.
multipleBy5.power = 2; // Setting a custom property 'power' on the function itself.

// Calling the function
console.log(multipleBy5(5)); // 25

// Accessing the custom property of the function
console.log(multipleBy5.power); // 2

// Every function has a default 'prototype' property. It is essentially an empty object {}.
console.log(multipleBy5.prototype);

// ---------------------------------------------------------

// Creating a Constructor Function.
// It acts somewhat like a class, used to create user objects.
function createUser(username, score) {
  // 'this' refers to the new object instance that will be created later using 'new'.
  this.username = username; // Setting the username for the new object.
  this.score = score; // Setting the score for the new object.
}

// Using Prototype:
// Instead of defining methods directly inside 'createUser', we add them to its 'prototype'.
// Benefit: Saves memory. Even if we create thousands of users, these functions are stored only once in memory.
createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`price is ${this.score}`);
};

// Creating an object using the 'new' keyword (Preferred way):
// A new object named 'coffe' is created.
// The 'new' keyword does 3 things: creates a new object, links the prototype, and binds 'this'.
const coffe = new createUser("coffe", 25);

// Calling the function without 'new' (Wrong way):
// Since 'new' is missing, no new object is created.
// 'tea' will be undefined because the function returns nothing.
// Also, 'this' inside the function will refer to the global object (window in browsers).
const tea = createUser("tea", 250);

// Since 'coffe' was created correctly and has the prototype link,
// it can successfully access and use the printMe function.
coffe.printMe(); // Output: price is 25

// tea.printMe(); // throw an error because 'tea' was not properly created as an object instance.

/*
Here's what happens behind the scenes when the new keyword is used ===>

A new object is created--> The new keyword initiates the creation of a new JavaScript object.

A prototype is linked--> The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called--> The constructor function is called with the specified arguments and this is bound to the newly created object.
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned--> After the constructor function has been called, if it doesn't return a non-primitive value (object, array, 
function, etc.), the newly created object is returned.
*/
