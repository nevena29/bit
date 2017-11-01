(function () {
    
function createFlight(frelation, fdate) {
    
    return new Flight(frelation, fdate)
}

function createPassenger(fName, sName, sNum, sCat){

        var person = new Person (fName, sName);
        var seat = new Seat (sNum, sCat);
        return new Passenger (person, seat);
}

var airport = new Airport();

var linija1 = createFlight("Belgrade - NewYork", "Oct 25 2017");
var linija2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

var putnik1 = createPassenger("John", "Snow", 1, "b");
var putnik2 = createPassenger("Cersei", "Lannister", 2, "b");
var putnik3 = createPassenger("Daeneris", "Targaryen", 14);
var putnik4 = createPassenger("Tyrion", "Lannister");

linija1.addPassenger(putnik1);
linija1.addPassenger(putnik2);
linija2.addPassenger(putnik3);
linija2.addPassenger(putnik4);

airport.addFlight(linija1);
airport.addFlight(linija2);


console.log(airport.getData());
}());




function Person(name, surname) {
    this.name = name;
    this.surname = surname;

    this.getData = function () {
        return this.name + " " + this.surname;
    }
}

function Seat(number, category) {
    this.number = number || Math.round((((100 - 10) * Math.random()) + 10));
    this.category = category || "e";

    this.getData = function () {
        return this.number + ", " + this.category.toUpperCase();
    }
}



function Passenger(person, seat) {
    this.person = person;
    this.seat = seat;

    this.getData = function () {
        return this.seat.getData()  + ", " + this.person.getData();
    }

}

function Flight(relation, date) {
    this.relation = relation;
    this.date = date;
    this.listOfPassengers = [];
    this.numberofpassengers = 0;

    this.addPassenger = function (passenger) {
        
        this.listOfPassengers.push(passenger);
        this.numberofpassengers ++;
        
    }

    this.getData = function () { 
    var output = "";
    output += "\t" + "Date : " + this.date + ". Relation : " + this.relation + "\n";

    for (var i = 0; i < this.listOfPassengers.length; i++) {
        var passenger = this.listOfPassengers[i];
        output += "\t\t" + passenger.getData() + "\n";
        
    }
    return output
}

}

function Airport() {
    this.name = "Nikola Tesla";
    this.listOfFlights = [];
    this.numberofpassengers = 0;

    this.addFlight = function (flight) {
        this.listOfFlights.push(flight);
        this.numberofpassengers += flight.numberofpassengers;

    }

    this.getData = function (){
       
        var output = "";
        output += "Airport: " + this.name + ", " + "total passengers: " + this.numberofpassengers + "\n";
        
            for( var i = 0; i < this.listOfFlights.length; i++){
                var flight = this.listOfFlights[i];
                
                output += "\t" + flight.getData() + "\n";

            }

        return output;
    }
    
}
console.log(JSON.stringify());