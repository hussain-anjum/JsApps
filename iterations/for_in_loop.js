// Syntx:
// for (const key in object) {   // here, object means array, string, map, set, object etc. But mostly used for objects
//   // code block to be executed
// }

const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //   console.log(key); // In array key is the index.
  //   console.log(programming[key]);
}

const map = new Map();
map.set("BN", "Bangladesh");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("BN", "Bangladesh");

for (const key in map) {
  console.log(key);
}
// NB: for...in loop is not recommended for Maps and Sets as they are iterable objects. Use for...of loop instead.
