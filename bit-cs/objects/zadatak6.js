function abbreviation(str){
    var result=str.trim().split(" ");
    if(result.length>1){
        return (result[0]+ " " + result[1].charAt(0));
    }
    return result[0];
}
console.log(abbreviation("Petar Petrovic"));