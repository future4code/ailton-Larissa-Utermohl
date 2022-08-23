var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function organizeFilms(filmName, releaseYear, genre, reviewScore) {
    if (reviewScore !== undefined) {
        const newFilm = {
            name: filmName,
            year: releaseYear,
            genre: genre,
            reviewScore: reviewScore,
        };
        return newFilm;
    }
    else {
        const newFilm2 = {
            name: filmName,
            year: releaseYear,
            genre: genre,
        };
        return newFilm2;
    }
}
console.log(organizeFilms("Filme de ação", 2020, GENERO.ACAO, 20));
console.log(organizeFilms("Filme de terro4", 2022, GENERO.TERROR, 50));
console.log(organizeFilms("Filme drama", 2021, GENERO.ROMANCE));
//# sourceMappingURL=exercicio3.js.map