function creatingElement(elementA,arrayOfOptions){
    
    var content ="<select>";
    for (var i = 0; i < arrayOfOptions.length; i++) {
        content += '<option value="' + arrayOfOptions[i] + '" > ' + arrayOfOptions[i] + '</option>';
        
    }

    elementA.innerHTML = content + "</select>";
   
}




var selectedElement =document.querySelector("div");
creatingElement(selectedElement,["ananas","kruska","jabuka"]);