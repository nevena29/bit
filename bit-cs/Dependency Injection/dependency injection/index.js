var doSomeWork=function(transportService){
 var place="Greece";
 transportService.transportTo(place);
}
var carTransportService=function(){
    var drive=function(place){
   console.log("I am driving to " + place)
    }
    var driveTo=function(place){
      drive(place);

    }
    return{
        driveTo:driveTo
    }
};