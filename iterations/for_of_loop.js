// ["", "", ""]
// [{}, {}, {}]

//Syntx:
// for (const element of object) {  // here, object means array, string, map, set etc.
//   // code block to be executed
// }

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello world!";
for (const greet of greetings) {
  if (greet == " ") {
    // console.log("Space detected");
    continue;
  }
  //   console.log(`The char is ${greet}`);
}

// Maps: Map object holds key-value pairs and remembers the original insertion order of the keys.
// A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map();
map.set("BN", "Bangladesh");
map.set("USA", "United States of America");
map.set("FR", "France");
map.set("BN", "Bangladesh");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, "->", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
  game3: "Batman",
};

// Objects are not iterable by default in for...of loops

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
