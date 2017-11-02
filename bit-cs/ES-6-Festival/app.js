const dataController = (() => {

    let data = {
        movies: [],
        totalMoviesLength: 0
    };

    // Movie constructor
    class Movie {

        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getInfo() {
            return `${this.title}, duration: ${this.length} min, genre: ${getGenreAbbreviation(this.genre)}`;
        }
    }



    // Private functions used within this module
    // Not exposed to the public
    function getGenreAbbreviation(genreStr) {
        const firstIndex = 0;
        const lastIndex = genreStr.length - 1
        const output = genreStr.charAt(firstIndex) + genreStr.charAt(lastIndex);
        return output.toUpperCase();
    }

    function calculateTotalLength() {
        let total = 0;

        // Iterate trough movies and calculate length
        data.movies.forEach(currentMovie => {
            total += currentMovie.length;
        });

        // Set our new total to our data object
        data.totalMoviesLength = total;
    }

    // Functions to be exported to public
    function addMovie({ title, length, genre }) {
        var movie = new Movie(title, parseFloat(length), genre);

        data.movies.push(movie);

        return movie;
    }

    function getTotalLength() {

        // calculate total data before returning
        calculateTotalLength();

        return data.totalMoviesLength;
    }

    // This is only for TEST
    function logData() {
        console.log(data);
    }

    return {
        addMovie,
        getTotalLength,
        // ONLY FOR TEST
        log: logData
    };

})();

const UIController = (() => {

    const DOMStrings = {
        inputTitle: '.movie-title',
        inputLength: '.movie-length',
        selectGenre: '.genre-select',
        containerMovieList: '.movie-list ul',
        containerError: '.movie-error',
        buttonAddMovie: '.create-movie',
        formElement: 'form',
        containerTotalLength: '.total-length span'
    }

    function getInput() {
        const titleElement = document.querySelector(DOMStrings.inputTitle);
        const lengthElement = document.querySelector(DOMStrings.inputLength);
        const genreSelectElement = document.querySelector(DOMStrings.selectGenre);
        const genreOptionElement = genreSelectElement.options[genreSelectElement.selectedIndex];

        return {
            title: titleElement.value,
            length: lengthElement.value,
            genre: genreOptionElement.value
        }
    }

    const displayListItem = (movie) => {
        const listEl = document.querySelector(DOMStrings.containerMovieList);

        let htmlItem = `<li> ${movie.getInfo()} </li>`

        listEl.insertAdjacentHTML('beforeend', htmlItem);
    }

    function clearInputs() {

        // Reset forma data
        document.querySelector(DOMStrings.formElement).reset();

        // Reset error if any
        document.querySelector(DOMStrings.containerError).textContent = "";

        // Set focus to title input
        document.querySelector(DOMStrings.inputTitle).focus();
    }

    function showError({ title, length, genre }) {
        const errorMsg = 'Unknown error!';

        if (!title) {
            errorMsg = "Enter title!"
        } else if (!length) {
            errorMsg = "Enter length!"
        } else if (!genre) {
            errorMsg = "Select genre!"
        }

        document.querySelector(DOMStrings.containerError).textContent = errorMsg;
    }

    function displayTotalLength(tLength) {

        // If length is not passed set default value
        tLength = tLength || '-';

        document.querySelector(DOMStrings.containerTotalLength).textContent = String(tLength);
    }

    function getDOMStrings() {
        return DOMStrings;
    }

    return {
        getInput,
        displayListItem,
        displayTotalLength,
        getDOMStrings,
        clearInputs,
        showError
    };

})();

const mainController = ((dataCtrl, UICtrl) => {

    function setupEventListeners() {
        const DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.buttonAddMovie).addEventListener('click', function () {
            ctrlAddMovieItem();
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode === 13) {
                ctrlAddMovieItem();
            }
        });
    }

    function ctrlUpdateTotalLength() {

        // 1. Get calculated length
        let totalLength = dataCtrl.getTotalLength();

        // 2. Update the UI with new total length
        UICtrl.displayTotalLength(totalLength);
    }

    function ctrlAddMovieItem() {
        // 1. get form data (UI)
        let { genre, length, title } = UICtrl.getInput();
        // console.log(input);

        // 1.1 Validate data validity
        if (!title || !length || !genre) {
            // throw new Error('Something bad happened');
            // alert("Error!")
            UICtrl.showError({ genre, length, title });
            return;
        }

        // 2. Add movie to list
        const input = { title, length, genre }
        let movie = dataCtrl.addMovie(input);
        // console.log(movie);

        // 3. Clear form inputs
        UICtrl.clearInputs();

        // 4. show list on UI
        UICtrl.displayListItem(movie);

        // 5. Update total length UI
        ctrlUpdateTotalLength();

    }

    return {
        init: function () {
            console.log("App has started");
            setupEventListeners();
        }
    }

})(dataController, UIController);

mainController.init();