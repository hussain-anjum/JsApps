//################      array declaration:      ################
const myArray = [5, 6, 2, 8, 9];
// console.log(myArray);
// console.log(myArray[3]);

const myArray2 = [1, "har", 3, "abul", true];
// console.log(myArray2);

const myArray3 = new Array(5, 6, 1, 5, 8);
// console.log(myArray3);

// ################     Methods:    ################
myArray.push(7); // insert element at the last position of array.
myArray.push(3);
// console.log(myArray);

myArray.pop(); // remove element from the last position of array.
myArray.pop();

myArray.unshift(4); // insert element at the first position of array; shift other elements
myArray.shift(); // remove element from the first position of array; shift other elements
// console.log(myArray);

// console.log(myArray.includes(3)); // false; means not exists.
// console.log(myArray.indexOf(9)); //4
// console.log(myArray.indexOf(10)); // -1; means the element 10 not exists in this array

//+++++++++++++     join: syntax--> join(separator);    ++++++++++++++++++
const elements = ["Fire", "Air", "Water"];
const newElement = elements.join(); // return string by joining elements

// console.log(newElement); //"Fire,Air,Water"
// console.log(typeof newElement); // string

// console.log(elements.join(" ")); //"Fire Air Water"
// console.log(elements.join("-")); //"Fire-Air-Water"

//++++++++++++++++++    slice & splice: ++++++++++++++++++++
console.log("A: ", myArray); //A:  [ 5, 6, 2, 8, 9 ]

const myn1 = myArray.slice(1, 3);

console.log(myn1); // [ 6, 2 ]
console.log("B: ", myArray); //B:  [ 5, 6, 2, 8, 9 ]; no change in the array.

const myn2 = myArray.splice(1, 3);
console.log(myn2); //[ 6, 2, 8 ]
console.log("C: ", myArray); // C:  [ 5, 9 ]; splice manipulates the array.
