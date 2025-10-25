let myDate = new Date();

// console.log(myDate); //2025-10-24T18:52:41.365Z
// console.log(myDate.toString()); //Sat Oct 25 2025 00:52:41 GMT+0600 (Bangladesh Standard Time)
// console.log(myDate.toDateString()); //Sat Oct 25 2025
// console.log(myDate.toLocaleString()); //10/25/2025, 12:52:41 AM
// console.log(myDate.toLocaleDateString()); //10/25/2025

let myOwnDate = new Date(2025, 0, 25); // in this form month starts from 0 = Jan in Js
// console.log(myOwnDate.toLocaleString()); // 1/25/2025, 12:00:00 AM

let myOwnDate2 = new Date(2025, 0, 0);
// console.log(myOwnDate2.toLocaleString()); // 12/31/2024, 12:00:00 AM

let myCreatedDate = new Date(2025, 0, 23, 5, 3); // 1/23/2025, 5:03:00 AM
let myCreatedDate2 = new Date("2023-01-14"); // 1/14/2023; in this case month starts with 1, not 0.

// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate2.toLocaleDateString());

let myTimeStamp = Date.now(); // gives the present time in milli seconds

console.log(myTimeStamp); // 1761384394580 (ms value)

console.log(myCreatedDate.getTime()); // it returns the ms value as a time of that date
console.log(Math.floor(Date.now() / 1000)); // returns present time in sec.

// ++++++++++++++++ Do comparision in ms ++++++++++++++++++++

let newDate = new Date();

console.log(newDate.getMonth() + 1); // return current month
console.log(newDate.getDay()); // return current day(starts from MONDAY = 0)
console.log(newDate.getFullYear()); // return current year

let dayName = newDate.toLocaleString("default", {
  weekday: "long",
});
console.log(dayName);
