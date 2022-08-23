// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. Os gêneros da plataforma se limitam aqueles encontrados no seguinte ENUM de gêneros: 

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }

// Além dessas informações presentes em todos os filmes, alguns deles possuem uma informação opcional: 4. pontuação em site de resenha (ex. Metacritic, RotenTomatoes).

// Considerando todas estas informações, crie uma função que receba todas essas informações como parâmetros( 3 essenciais + 1 opcional) e retorne todas informações organizadas em um `type`

// input: string, number, ENUM, number(opcional)
// output: type

// Entradas: "Duna", 2021, GENERO.ACAO, 74
// Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação", pontuacao: 74}

// Entradas: "Duna", 2021, GENERO.ACAO
// Saída: {nome: "Duna", anoLancamento: 2021, genero: "ação"}

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror"
}
function organizeFilms(filmName: string, releaseYear: number, genre: GENERO, reviewScore?: number) {
  type organizedFilms = {
    name: string;
    year: number;
    genre: GENERO;
    reviewScore?: number;
  };

  if (reviewScore !== undefined) {
    const newFilm: organizedFilms = {
      name: filmName,
      year: releaseYear,
      genre: genre,
      reviewScore: reviewScore,
    }
    return newFilm
  } else {
    const newFilm2: organizedFilms = {
      name: filmName,
      year: releaseYear,
      genre: genre,
    }
    return newFilm2
  }
}
console.log(organizeFilms("Filme de ação", 2020, GENERO.ACAO, 20))
console.log(organizeFilms("Filme de terro4", 2022, GENERO.TERROR, 50))
console.log(organizeFilms("Filme drama", 2021, GENERO.ROMANCE))