function arrayOfDigits(num){
    var NumString= num + "";
    var output=[];
    for(i =0;i < NumString.length;i++){
        output[i]=NumString[i];
        i++;
    }
    return output;


}
console.log(arrayOfDigits(12));