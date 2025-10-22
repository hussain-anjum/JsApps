const clientId = 1001;
let clientName = "har";
var clientPass = "3210"; // need to avoid this keyword for variable define
clientLoc = "Bangladesh"; // need to avoid this also

let clientAge;

// clientId = 1002; because the keyword is constant.
clientPass = "1234";
clientLoc = "Canada";

console.log(clientId);
console.table([clientId, clientName, clientAge, clientPass, clientLoc]);
