// 1. forEach loop is a method that executes a provided function once for each array element.

// Syntx:
// using regular function:
// array_name.forEach( function(currentValue, index, arr) { //code block } )    NB: callback fuction has no name

// callbackFn: A function to execute for each element in the array. Its return value is added as a single element in the new array.

// using arrow function:
// array_name.forEach( (currentValue, index, arr) => { //code block } )

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach(function (item) {
  //   console.log(item);
});

coding.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(item);
  // console.log(item.languageName);
  // console.log(item.languageFileName);
});
