function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2; // Adding a property to the function object

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);
