// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log(5 > "1"); //before comparing Js tries to convert them to a common type(usually number)
// console.log("5" < 1);
// console.log(5 < "har");

// console.log("2" === 2); //In strict equal(===) it also check the data type.

// ###############################  Confusion Comparisions(try to avoid)  #####################################

console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true
console.log(null == 0); //false, because here null is treated as NaN not num

//The reason is that an equality == check and comparisons > < >= <= work differently.
//Comparisons convert null to a number, treating it as O.That's why null >= O is true and null == O is false.
