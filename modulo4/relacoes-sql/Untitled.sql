SELECT * FROM Actor;
SELECT * FROM Movies;
SELECT * FROM Rating;
SELECT * FROM MovieCast;

 USE `ailton-larissa-utermohl`;
 
 CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id)
        REFERENCES Movies (id)
);

-- a)
-- Chave estrangeira é um valor que referencia a chave primaria de uma tabela para a tabela onde está sendo criada.

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("001","Muito bom, nota 1",1,"001");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("002","Um filme já feito",5,"003");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("003","Muito bom",9,"004");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("004","Bom",6,"004");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("005","Muito bom",7,"004");

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("004","Melhor filme já feito!",100,"002");

 -- Erro ocorre pelo fato de não existir um id com o valor informado, não tem como referenciar algo que não existe.
ALTER TABLE Movies DROP COLUMN score;

DELETE FROM Movies
WHERE
    movie = 'Se Eu Fosse Você';
    
    -- o acontece pelo fato que id do filme está referenciado em outra tabela(FK), para deletar esse filme é importante antes deletar o tirar a referencia criada com seu id em outra tabela.
    
    
    CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
    
    CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a)
 -- Essa query irá criar uma tabela que pega por referencia dois id, sendo uma da tabela Movies e a outra da tabela Actor, basicamente uma tabela que mostra um filme e o ator principal.

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","123");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","005");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","002");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","002");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","1661360901513");


INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","001");

DELETE FROM Actor
WHERE
    id = '004';

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","001");