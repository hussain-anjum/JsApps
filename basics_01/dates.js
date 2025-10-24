let myDate = new Date();

// console.log(myDate); //2025-10-24T18:52:41.365Z
// console.log(myDate.toString()); //Sat Oct 25 2025 00:52:41 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString()); //Sat Oct 25 2025
// console.log(myDate.toLocaleString()); //10/25/2025, 12:52:41 AM
// console.log(myDate.toLocaleDateString()); //10/25/2025

let myOwnDate = new Date(2025, 0, 25); // in this form month starts from 0 = Jan in Js
console.log(myOwnDate.toLocaleString()); // 1/25/2025, 12:00:00 AM

let myOwnDate2 = new Date(2025, 0, 0);
console.log(myOwnDate2.toLocaleString()); // 12/31/2024, 12:00:00 AM

let myCreatedDate = new Date(2025, 0, 23, 5, 3); // 1/23/2025, 5:03:00 AM
let myCreatedDate2 = new Date("2023-01-14");

console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate2.toLocaleDateString()); // 1/14/2023
