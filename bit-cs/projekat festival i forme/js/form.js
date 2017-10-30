var movies = [];

function createMovies() {

    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreSelectedElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectedElement[genreSelectedElement.selectedIndex];



    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

    if (!title || !length || genre === "none") {
        var error = document.getElementById("error");
        error.textContent ="Please enter all info!";
    }  
    errorElement.textContent="";

    var movie = new Movie(title, length, genre);
    // console.log(movie);
    movies.push(movie);

    var movieListHTML = "<ul>";

    for (var i = 0; i < movies.length; i++) {
        var film = movies[i];
        console.log(film)
        movieListHTML += "<li>" + film.getInfo() + "</li>";
    }

    movieListHTML += "</ul>";

    var listOfMovies = document.getElementById("listOfMovies");
    listOfMovies.innerHTML = movieListHTML;

      
}
var programs=[];

function createProgram(dateStr) {

var datumElement=document.getElementById("pDate");
var dateStr=datumElement.value;

var date = new Date(dateStr);
var program = new Program(date)
    return program;
}