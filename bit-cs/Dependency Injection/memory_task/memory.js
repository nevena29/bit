var os = require('os');

var observers = [];
function addObserver(observer) {
    observers.push(observer);
}

function notifyAll(msg) {
    for (var i = 0; i < observers.length; i++) {
        observers[i].notify(msg);
    }

}

function checkMem() {
    setInterval(function () {
        if (os.freemem < 2) {
            consolee.log("Alert!")
        }
    }, 3000);
}
module.exports.addObserver = addObserver;

module.exports.checkMem = checkMem;

