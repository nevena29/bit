var res = 0;

for ( var i = 0; i <= 1000; i++){
    if (i % 3 === 0 && i % 5 === 0) {
        res += i; 
    }
}
console.log(res);