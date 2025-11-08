const coding = ["js", "ruby", "java", "python", "cpp"];

const values = coding.forEach((item) => {
  //console.log(item);  //
  return item;
});
// console.log(values); // undefined because forEach doesn't return anything

// ########################     filter() method      #######################

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Like user filter products by price in a website.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const newNums = myNums.filter((num) => num > 4); // shorthand arrow function. filter also take callback function like forEach
// console.log(newNums);    // [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// Without using filter() method:
const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});
// console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]

// ++++++++++++++++++   Example:  ++++++++++++++++++

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");
// console.log(userBooks);

// A user wants to see all the history books published after 1995. So he decides to filter out the books from the books array.
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History"; // we use return because we use {}.
});
console.log(userBooks);
