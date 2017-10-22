function swapCase(string){
var result="";
for(i=0; i<string.length; i++){
    if(string.charAt(i)===string[i].toUpperCase()){
    result+=string[i].toLowerCase();
    }
    else{
     result+=string[i].toUpperCase();
    }


}
return result;

}



console.log(swapCase("The Quick Brown Fox"));