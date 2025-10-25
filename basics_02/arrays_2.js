const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["batman", "superman", "flash"];

// marvel_heros.push(dc_heros); // As an Array can contain any data types, So it inserts an array as another element into the main array.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //superman

const allHeros = marvel_heros.concat(dc_heros); // Now, it returns a new array by concating two array. But In this method we can use two array to concat.
// console.log(allHeros);

//+++++++++++++     ... (Spread Operator)   +++++++++++++
// by this we can concat multiple array as a new single array.

const cartoon = ["oggy", "ben10", "doremon"];
const all_new_heros = [...marvel_heros, ...dc_heros, ...cartoon];

// console.log(all_new_heros);

// ++++++++     Need to read documentation from MDN first   ++++++++

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(3); // combine into a single array. here, 3 = depth. We can use (Infinity) as depth.
// console.log(real_another_array);

// console.log(Array.isArray(marvel_heros)); //true
// console.log(Array.from("Hussain")); //create an array by string char.
// console.log(Array.from({ name: "hitesh" })); // []; return empty array, because We need to define for which(key or value) we want to create an array.

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]
