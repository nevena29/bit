function reverseANumber(num){
    num=num+"";
    var res=num.split("").reverse().join("");
    return res;

}
console.log(reverseANumber(1583));
