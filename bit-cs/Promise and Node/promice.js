let myFirstPromise = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("Success!");
    },250)
});
myFirstPromise.then((succsessMsg)=>{
    console.log("Yey" + succsessMsg)
});