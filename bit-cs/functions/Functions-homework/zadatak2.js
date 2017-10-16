function JoinElements(array){
var result="";
for (var i = 0; i< array.length;i++) {
    if(isNaN(array[i])===true || array[i]===null || array[i]=== Infinity ||array[i]=== undefined) {

       
        
}  else{
    result+=array[i];

} 

}
return result;

}


console.log(JoinElements([NaN, 0, 15, -22, '', undefined, 47, null]))

