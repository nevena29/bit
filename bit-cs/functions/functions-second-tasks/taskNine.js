function checkPrime(num){
    if(num / num !== 1 && num / 1 !== num){
        console.log(num);
    } else {
        console.log("Its not");
    }
}
console.log(checkPrime(13));