var os = require('os');
var getMemory = require("./memory");

console.log((os.totalmem() / 1073741824).toFixed(2) + " GB");
console.log((os.freemem() / 1073741824).toFixed(2) + " GB");


module.exports.os = os;








