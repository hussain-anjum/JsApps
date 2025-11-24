let myName = "har     ";
let myGithub = "hussain-anjum     ";

// console.log(myName.trueLength);  // undefined because trueLength is not a default property of String

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// ----------------------------------------
// MAGIC HAPPENS HERE (Prototype Injection)
// ----------------------------------------

// Injecting a method into the top-level 'Object'.
// Since EVERYTHING in JS (Arrays, Functions, Strings) inherits from Object, everyone will get this 'har' method.
Object.prototype.har = function () {
  console.log(`har is present in all objects`);
};

// Injecting a method specifically into 'Array'.
// Only Arrays will have access to 'heyHAR'. Plain Objects (like heroPower) will NOT have access to this.
Array.prototype.heyHAR = function () {
  console.log(`HAR says hello`);
};

// Test 1: Can the object access the method added to Object.prototype?
// YES. Object inherits from Object.
heroPower.har(); // Output: har is present in all objects

// Test 2: Can the Array access the method added to Object.prototype?
// YES. Because Array is technically an Object too.
myHeros.har(); // Output: har is present in all objects

// Test 3: Can the Array access the method added to Array.prototype?
// YES. Because myHeros is an Array.
myHeros.heyHAR(); // Output: HAR says hello

// Test 4: Can the Object access the method added to Array.prototype?
// NO. Access blocked!
// An Object is NOT an Array. It is the parent of Array. The parent cannot access the child's exclusive properties.
// heroPower.heyHAR(); // Error: heroPower.heyHAR is not a function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// -----------------------------------------------------------------
// PART 1: Prototypal Inheritance (Sharing features between objects)
// -----------------------------------------------------------------

const User = {
  name: "har",
  email: "har@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  // OLD SYNTAX: Inheriting directly inside the object definition.
  __proto__: TeachingSupport, // TASupport will now have access to properties of TeachingSupport.
};

// OLD SYNTAX (Legacy): Inheriting outside the object definition.
Teacher.__proto__ = User; // Now 'Teacher' can access properties of 'User'

// MODERN SYNTAX:
Object.setPrototypeOf(TeachingSupport, Teacher); // This does the same thing as __proto__ but is the standard way now.
// TeachingSupport inherits from Teacher.
// So, the chain is: TeachingSupport ---> Teacher ---> User

// Testing inheritance chain ==>
console.log(TeachingSupport.makeVideo); // true (Inherited from Teacher)
console.log(TeachingSupport.name); // "har" (Inherited from Teacher -> User)

// ------------------------------------------------
// PART 2: Extending Native Objects Using Prototype
// ------------------------------------------------

let anotherUsername = "hussain-anjum      ";

// Here we are adding a NEW power/method to ALL String objects in JavaScript.
// 'String.prototype' is the blueprint for every string.
String.prototype.trueLength = function () {
  // 'this' refers to the string on which trueLength() is called.
  console.log(`${this}`); // Prints the original string with spaces.

  // We trim the string and then find its length.
  console.log(`True length is: ${this.trim().length}`);
};

// Testing new super-power method:
anotherUsername.trueLength(); // Output: True length is: 13
myName.trueLength(); // Output: True length is: 3

"anjum".trueLength(); // Output: True length is: 5

/* EXPLANATION OF 'THIS':
When you call "anjum".trueLength(), the 'this' inside the function automatically points to the string "anjum". This is why we can write 
generic methods that work for any string. 
*/
