function CheckForLetters(str,char){
    varCharInd=0;
    for(i = 0; i < str.length; i++)
    if (str[i]===char) {
        return i+1;
        
    }
}
console.log(CheckForLetters("nevena", "n"));