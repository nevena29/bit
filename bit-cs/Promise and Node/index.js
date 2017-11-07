var promise1 = new Promise(function (resolve, reject) {

    for (i = 0; i <= 100; i++) {
        setTimeout(function(i){
            console.log("Promise1: " + i);
            if(i===99){
                resolve();
            }

        },i, i);
        
    }
   
});

var promise2 = new Promise(function (resolve, reject) {

    for (i = 0; i <= 1000; i++) {
        setTimeout(function(i){
            console.log("Promise2: " + i);
            if(i===999){
                resolve();
            }

        },i, i);
        
    }
   
});

promise1.then(function(input) {
    console.log("Promise 1 se izvrsio " + input);
    
}).catch(function(output) {
    console.log("Promise 1 se nije izvrsio " + output);
});

promise2.then(function(input) {
    console.log("Promise 2 se izvrsio " + input);
    
}).catch(function(output) {
    console.log("Promise 2 se nije izvrsio " + output);
});


var allPromises = Promise.race([promise1, promise2]);

allPromises.then(function() {
    console.log("All promises done");
    
});

console.log("Not done");
