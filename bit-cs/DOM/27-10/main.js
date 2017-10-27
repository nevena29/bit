/*function changeAtr () {

    var inputs = document.querySelectorAll("input");

    for (var input of inputs) {
        if (input.hasAttribute("required") && !input.value) {
            input.classList.add('red');
        }
    }

}*/

// function change() {

//     var changediv = document.querySelector("body")
//     changediv.classList.toggle("secondcolor");

// }



// function blink() {
//    stop = setInterval(change, 3000);
// }



// function stopBlink () {

//     clearInterval(stop);
// }


// var stop;

// function auto() {
//     if (!stop) {
//         stop = setInterval(change, 1000);
//     } else {
//         clearInterval(stop);
//         stop = null;
//     }
// }


    


        document.querySelector("#send").onclick = function () {
        var userinput = document.querySelector("#text").value;
        var board = document.querySelector("div");
        
        var messages = document.createElement("p");
        messages.textContent = userinput;

        board.appendChild(messages);

    }


    
