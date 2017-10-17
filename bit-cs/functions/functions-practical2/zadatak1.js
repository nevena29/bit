function countVowels(str){
    var result=0;
    for(var i = 0; i < str.length; i++){
    
    switch (str[i]) {
        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
        result++;
        break;

    }
    }
if(result <1 ){
    return "There are no vowels in the sentence";
 }
else{
return "There are " + result + " vowels in sentence";
}
}
console.log(countVowels("koliko ovde ima samoglasnika?"));