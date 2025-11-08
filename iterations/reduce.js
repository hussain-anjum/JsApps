const array = [1, 2, 3, 4];

//Syntax:
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial); // 10
// Explanation:
// Step 1: accumulator = 0, currentValue = 1 => 0 + 1 = 1
// Step 2: accumulator = 1, currentValue = 2 => 1 + 2 = 3
// Step 3: accumulator = 3, currentValue = 3 => 3 + 3 = 6
// Step 4: accumulator = 6, currentValue = 4 => 6 + 4 = 10

const myNums = [1, 2, 3, 4, 5];

// Using regular function:
const total = myNums.reduce(function (acc, curr) {
  //   console.log(`acc: ${acc} and currentValue: ${curr}`);
  return acc + curr;
}, 0);
// console.log(total); // 15

// Using arrow function for smart work:
const total2 = myNums.reduce((acc, curr) => acc + curr, 0); // auto return
// console.log(total2); //15

// ++++++++++++++++++   Example:  ++++++++++++++++++

const shoppingCart = [
  { product: "phone", qty: 1, price: 500 },
  { product: "laptop", qty: 1, price: 800 },
  { product: "tablet", qty: 2, price: 300 },
];

// Calculate total cost of items in shopping cart:

let initialPrice = 0;
const totalAmount = shoppingCart.reduce(
  (acc, item) => acc + item.price,
  initialPrice
);
console.log(`Total amount to pay is ${totalAmount} Taka`);
