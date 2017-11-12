var doSomeWork = function (transportService) {
    var place = "Greece";
    transportService.transportTo(place);
}
var carTransportService = function () {
    var drive = function (place) {
        console.log("I am driving to " + place)
    }
    var driveTo = function (place) {
        drive(place);

    }
    return {
        driveTo: driveTo
    }
    var planeTransportService = function () {
         var flyTo = function (place) {

         console.log("Flying to: " + place);


        }
             var transportTo = function (place) {
            flyTo(place);
         };
            return {
             transportTo: transportTo
            }
        }
    };
    doSomeWork(new carTransportService());
    doSomeWork(new planeTransportService());