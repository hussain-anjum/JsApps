const score = 500;

const balance = new Number(100); // Obj

// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString()); // convert into string
// console.log(balance.toString().length); // now we can use our string methods on it.

// console.log(balance.toFixed(2)); // 100.00

const num = 25.58;

// console.log(num.toPrecision(3)); //25.6, need to understand more from MDN

const amount = 100000;
// console.log(amount.toLocaleString()); //100,000; return in US stand.
// console.log(amount.toLocaleString("en-IN")); //1,00,000; Indian Stan

// Number.MAX_SAFE_INTEGER; // 9007199254740991

// ++++++++++++++++++++++++++++++++++++   Maths   +++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //use google console to check Math related methods.

// console.log(Math.abs(-5));
// console.log(Math.round(10.5));
// console.log(Math.ceil(6.4));
// console.log(Math.floor(8.9));
// console.log(Math.min(5, 3, 6));
// console.log(Math.max(5, 3, 6));

console.log(Math.random()); // In between 0 to 0.999
console.log(Math.random() * 100);
console.log(Math.random() * 10 + 1); // To start the range from 1 not 0.Now in between 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // To get decimal vlaue

// Need to know this formula must:
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
