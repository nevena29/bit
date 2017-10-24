"use strict";

var Printing = function () {
    var drama = new Genre("Drama");
    console.log(drama);
    var movie1 = new Movie("Betmen", drama, 123);
    console.log(movie1.getMovieData());
    var elCuerpo = new Movie("El Cuerpo", drama, 140);
    console.log(elCuerpo.getMovieData());
}();

function Genre(name) {
    this.name = name;
    this.getGenreData = function () {
        return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
    }
}

function Movie(name, genre, length) {
    this.name = name;
    this.genre = genre;
    this.length = length;
    this.getMovieData = function () {
        return this.name + " " + this.length + " min" + " " + this.genre.getGenreData();
    }

}

function Program(date) {
    this.date = date;
    this.listOfMovies = [];
    this.totalNumMovies = 0;
    this.totalLength = 0;

    this.getProgramData = function () {
        var result = " ";
        return this.date.getDate() + ", " + this.totalLength;
    }
}

function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numOfAllMovies = 0;
    this.getFestivalData() = function () {
        var result= " ";
        return result+= this.name + this.totalNumMovies;
    }
}


