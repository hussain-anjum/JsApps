// singleton: Object.create (constructor)

const VsUser = new Object(); //Singleton, because we use constructor
// const VsUser = {};   //Non - Singleton

VsUser.id = 1001;
VsUser.name = "har";
VsUser.isLoggedIn = true;

// console.log(VsUser);

//Nested Obj:
const adobeUser = {
  name: {
    fullName: {
      fName: "abul",
      lName: "hossen",
    },
  },
};

// console.log(adobeUser);
// console.log(adobeUser.name); //{ fullName: { fName: 'abul', lName: 'hossen' } }
// console.log(adobeUser.name.fullName); //{ fName: 'abul', lName: 'hossen' }
// console.log(adobeUser.name.fullName.fName); //abul

console.log(adobeUser.name.fullName?.fName);
// ?.(optional chaining operator) means it tells JS to check 'fullName' exists or not. If exists then access, if not then just show undefiened not error.
// console.log(adobeUser.name.motherName?.fName); // undefined

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const newObj = { obj1, obj2 }; // Same as array: it can inserts an Obj as another key: value pair into another Obj.
// console.log(newObj);

//++++++++++++      Marge or Concat Object    ++++++++++++

const newObj2 = Object.assign(obj1, obj2); // target = obj1, source = obj2
// console.log(newObj2);
// console.log(newObj2 === obj1); //true

const newObj3 = Object.assign({}, obj1, obj2, obj3); // target = {}empty obj, source = obj1, obj2, obj3
// console.log(newObj3);
console.log(obj1 === newObj3); //false

// Perfect way is to use Spread Operator:
const newObj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(newObj4);

//###############       Array of Objects    #################

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "a@gmail.com",
  },
  {
    id: 3,
    email: "r@gmail.com",
  },
];

// console.log(users[1].email);

const googleUsers = {
  1: "har",
  2: "abul",
  3: "kalam",
};

// console.log(Object.keys(googleUsers)); // [ '1', '2', '3' ]
// console.log(Object.values(googleUsers)); // [ 'har', 'abul', 'kalam' ]
// console.log(Object.entries(googleUsers)); // [ [ '1', 'har' ], [ '2', 'abul' ], [ '3', 'kalam' ] ]

// console.log(googleUsers.hasOwnProperty(6)); //false : Checks whether the object has a property(key) named 6

// #####################    Object de-structure   #######################

const course = {
  courseName: "JS",
  price: "1050",
  courseInstructor: "har",
};

// console.log(course.courseInstructor); // normal way to access value

const { courseInstructor: teacher } = course; // This is Destructuring
console.log(teacher);

// Syntax:
// const obj = { prop1: x, prop2: y, prop3: z };
// const { prop1: x, prop2: y, prop3: z } = obj;

// ################     JSON(JavaScript Object Notation) API    ###################

//  format:
// Here, Key will be in "string".

//  {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": 1000
// }

// if there are multiple JSON objects:

// [
//     {},
//     {},
//     {}
// ]
