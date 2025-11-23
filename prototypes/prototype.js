// let myName = "har     ";
// let myGithub = "hussain-anjum     ";

// console.log(myName.trueLength);  // undefined

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.har = function () {
  console.log(`har is present in all objects`);
};

Array.prototype.heyHAR = function () {
  console.log(`HAR says hello`);
};

// heroPower.har();
// myHeros.har();
// myHeros.heyHAR();
// heroPower.heyHAR();
