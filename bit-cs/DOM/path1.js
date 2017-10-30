(function(){
    var firstNode =document.querySelector("div img");
    var remove = firstNode.className = "";
    var traversing = firstNode.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
    traversing.className = "selected";
})();

/*document.querySelector("body").textContent="somenew paragraph";
(function(){
var removeElement=document.querySelector("li").innerHTML;
alert(removeElement);
})();

function textArg(text){
    document.getElementsByTagName("li")[2].textContent = text;
}*/