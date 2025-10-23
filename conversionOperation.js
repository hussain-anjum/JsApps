//Type conversion:

let uId1 = 50;
let uId2 = "50abc";
let uId3 = "uIdab";
let uId4 = 50;
let isLoggedIn = true;
const alwaysTrue = 1;

// console.log(typeof uId1);

let numToString = String(uId1);
// console.log(typeof numToString);

// console.log(typeof uId2);

let stringToNum = Number(uId2);
console.log(stringToNum); // 50abc is Not a Number. uId3 is also same.

// console.log(typeof isLoggedIn);

let boolToNum = Number(isLoggedIn);
// console.log(typeof boolToNum);

// console.log(typeof alwaysTrue);

let numToBool = Boolean(alwaysTrue);
// console.log(typeof numToBool);

let isTrue = "har";
let isFalse = "";

let strToBool1 = Boolean(isTrue); // any string to bool -> true
// console.log(strToBool1);

let strToBool2 = Boolean(isFalse); // empty sting to bool -> false
// console.log(strToBool2);

let temp = null;

let nullToNum = Number(temp); // it will return 0
console.log(typeof nullToNum);

let score;

let undefineToString = String(score);
// console.log(undefineToString);

// undefined To String -> it will retuen undefined
// undefined To Number -> it will retuen NaN
