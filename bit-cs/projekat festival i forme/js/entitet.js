function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}
Movie.prototype.getInfo = function () {
    return this.title + ", " + this.length + ", " + this.genre;

};