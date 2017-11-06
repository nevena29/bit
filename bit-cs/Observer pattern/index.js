var count=0;
var counter = function (){
    var storage = localStorage.getItem("counter");
    //JSON.parse(storage);
    // if(storage){
    //     count=storage;
    // }else {
    //         count=0;
    //     }
    
    count++;
    document.querySelector("button").textContent=count;
    localStorage.setItem("counter",count)
}

