// Must Read doc in MDN  about strings and its prototypes.

const userName = "har";
const idCount = 30;

// console.log(userName + "has " + idCount + " accounts"); // avoid this syntax for concat
// console.log(`${userName} has ${idCount} accounts`); // use this syntax, where it starts with backtick(`)

// using Obj:
const gameName = new String("Mini-Militia");
// console.log(typeof gameName); // object

// console.log(gameName[2]); // here 2 is a key of the obj, it'll return its value

// console.log(gameName.__proto__); // {}; It refers to String.prototype; that contains all string methods

// console.log(gameName.length); // 12
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(1)); // i
// console.log(gameName.indexOf("n")); // 2

const newStr = gameName.substring(2, 5); // ni- (start, end)
console.log(newStr);

const anotherString = gameName.slice(0, 3); // Min  (indexStart, indexEnd)
console.log(anotherString);

console.log(gameName); // Stack: [String: 'Mini-Militia']

const newStr2 = gameName.slice(-4); // it log(prints) in reverse. N.B: only slice can take neg index.
console.log(newStr2);

const newStr3 = "   world   !";
console.log(newStr3.trim());

const url = "https://har.com//hussain%20anjum";

console.log(url.replace("%20", "-"));

console.log(url.includes("har")); //true

console.log(gameName.split("-")); // (separator). It will divide the string and return an array.
