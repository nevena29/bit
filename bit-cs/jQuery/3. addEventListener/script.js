var $body = $('body');
var $player = $('#player'); 
var $stopMovingButton = $('#stop-moving');

$body.on('click', function(event) {
    var playerElmentDisplacement = $player.width() / 2;
        
    $player.css({
        "top": (event.clientY - playerElmentDisplacement) + "px", 
        "left":(event.clientX - playerElmentDisplacement) + "px"
    });
    $stopMovingButton.on("click", function(){
        $body.off("click");
        $player.fadeTo("slow", 0.15);
    });
});
