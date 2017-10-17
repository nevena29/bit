function combiningArrays(arr1,arr2){
    var sum=[];
    var count=0;
    
    for(i=0; i<arr1.length; i++){
        sum[count]=arr1[i];
        sum[count+1]=arr2[i];
        count+=2
    }return sum;


}






console.log(combiningArrays(["a","b","c", "d"], [1,2,3, 4]));