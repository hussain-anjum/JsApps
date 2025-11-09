const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The map() method of Array instances creates a new array populated with the results of calling a provided function
// on every element in the calling array.
// Using map, we just do some operation on each element of the array and return a new array.

// const newNums = myNumers.map((num) => {
//   return num + 10;
// });
// console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// chainning multiple map() and filter() methods:

const newNums = myNumers
  .map((num) => num * 10) // [10,20,30,40,50,60,70,80,90,100]
  .map((num) => num + 1) // [11,21,31,41,51,61,71,81,91,101]
  .filter((num) => num >= 40);

console.log(newNums); // [ 41, 51, 61, 71, 81, 91, 101 ]
