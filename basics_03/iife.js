// Immediately Invoked Function Expressions (IIFE)

// named IIFE:
(function chai() {
  console.log(`DB CONNECTED`);
})(); // if we need to write multiple iife, must put ; at the end

//unnamed:
((name) => {
  console.log(`DB CONNECTED BY ${name}`);
})("har");
