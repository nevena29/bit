var move=document.getElementById("player");
var selectBody=document.getElementsByTagName("body")[0];
selectBody.addEventListener("click", function(event){
    var xPosition=event.offsetX -60;
    var yPosition=event.offsetY -60;

    move.style.top=yPosition + "px";
    move.style.left=xPosition + "px";

})
