var movies = [];

function createMovies() {

    var titleElement = document.getElementById("mTitle");
    var lengthElement = document.getElementById("mLength");
    var genreSelectedElement = document.getElementById("genre-select");
    var genreOptionElement = genreSelectedElement[genreSelectedElement.selectedIndex];



    var title = titleElement.value;
    var length = lengthElement.value;
    var genre = genreOptionElement.value;

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

    if (!title || !length || genre === "none") {
        var error = document.getElementById("error");
        error.textContent ="Please enter all info!";
    }
}