function FindEmail(address){
    var result=""
    for(i = 0; i< address.length; i++){
        if(address[i]==="@")
        var position=i;
    }
    for(i = 0; i< address.length; i++){
        if(i>= position-3 && i<position){
        result+= ".";
    }
        else{
        result+=address[i];
    }
}
return result;
}
console.log(FindEmail("nevenav.29@gmail.com"));