console.log("hi");


var promise1 = new Promise(function (resolve, reject) {
    var m = 0;
    for (var i = 0; i < 100000000; i++) {
        var m = i * i;
    }

    var now = new Date();

    if (now.getMilliseconds() % 2 === 0) {
        reject("Deljivo sa 2. HAOS");
    }


    console.log("I am done");
    resolve(m);
});


console.log("keep working!");



promise1.then(function (result) {
    console.log("P1 is done with " + result);
}).catch(function (reason) {

    console.log(reason);

});



console.log("keep working2!");