function JoinElements(array){
    var result=[];
    for (var i = 0; i< array.length;i++) {
        if(array[i]) {
         result.push(array[i]);
    }  else{
        
    } 
    
    }
    return result;
}    
    

console.log(JoinElements([NaN, 0, 15, false, -22, '', undefined, 47, null]));
