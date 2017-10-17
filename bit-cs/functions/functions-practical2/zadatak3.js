function rotation(array,n){
     var result=[];
    for(i = n; i< array.length; i++){
        result[i-n]=array[i];

    }
    for(i = 0;i < n; i++){
        result[result.length]=array[i];
    }
    return result;

}
console.log(rotation([10,11,12,13,14], 2));

