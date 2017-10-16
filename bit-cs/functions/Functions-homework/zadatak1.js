function Insert(str1, str2, position) {
    var result = "";
    if(position===undefined){
        position=1;
    }
    for (var i = 0; i < str1.length; i++) {
        if (i === position - 1) {
            result +=  str2+str1[i];
        }
        else {
            result += str1[i];
        }
    }
    return result;
}


console.log(Insert("Neca pereca", "je"));