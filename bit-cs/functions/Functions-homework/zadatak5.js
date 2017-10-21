function LastElement(array, n){
    var result=[]
    for(i=array.length-n; i<array.length; i++){
        result+=array[i];
    }
    return result;

}
console.log(LastElement([1,4,7,0],2));