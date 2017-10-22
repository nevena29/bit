function splitEmail(email){
var findMonkey=email.split("@");
var x=findMonkey[0].substring(0,findMonkey[0].length-3);
return x+ "...@"+ findMonkey[1];
}




console.log(splitEmail("alexpantex@gmail.com"))