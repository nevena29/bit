function creatingElement(elementA,arr){
    
    var createdElement = document.createElement("select");
    var option1= document.createElement("option");
    var option2= document.createElement("option");
    var option3= document.createElement("option");
    var optionArr = [option1,option2,option3];
    var text ;
    for(var i = 0; i < arr.length; i++){
        var element = arr[i]
        text = document.createTextNode(element);
        optionArr[i].appendChild(text);
    }
    for (var j = 0; j < optionArr.length; j++) {
        var element = optionArr[j];
        createdElement.appendChild(element);
        
    }
    var place = document.querySelector("div");
    place.appendChild(createdElement)
}




var selectedElement =document.querySelector("div");
creatingElement(selectedElement,["ananas","kruska","jabuka"]);