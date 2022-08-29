USE `ailton-larissa-utermohl`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- a) VARCHAR strings de no máximo n caracteres
--  PRIMARY KEY é o identificador único de um registro na tabela
--  DATE representa uma data, como de nascimento
-- NOT NULL o campo é obrigatório, não pode ser deixado em branco

SHOW DATABASES;
-- Exibe todos os bancos de dados disponíveis no sistema, 
-- deve aparecer o banco de dados que acabamos de criar.

SHOW TABLES;

-- Exibe a definição de uma tabela, incluindo atributos de tabela, 
-- restrições de tabela, atributos de coluna e restrições de coluna.

DESCRIBE Actor;

-- Este comando descreve a estrutura de tabelas com suas colunas e tipo de dados.


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES( 
"002",
"Glória Pires",
1.200000,
"1963-08-23", 
"female" );


-- A coluna de chave primária é exclusiva e não aceitará a entrada duplicada. 
-- Então, quando você está tentando inserir uma nova linha que já está presente em sua tabela, produzirá esse erro.
-- Para resolver isso, defina a coluna de chave primária como AUTO_INCREMENT. 
-- E quando você estiver tentando inserir uma nova linha, ignore a coluna da chave primária ou insira 
-- NULLo valor na chave primária.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  3.00000,
  "1929-10-19", 
  "female"
);
-- ERRO 1136 Está faltando a descrição do campo birth_date e gender na descrição dos campos. Para consertar somente é necessário adicionar.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Zé pequeno",
  400000,
  "1949-04-18",
  "male"
);
-- ERRO 1364 Indicates that the value of the particular field should be something other than NULL. 
-- One way to resolve the error forever is to make the column as DEFAULT NULL

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- ERRO 1292 a data de aniver'sario está sem aspas. Para corrigir precisamos por as aspas. 

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Brad Pitt",
  800000,
  "1970-05-20", 
  "male"
);

SELECT * FROM Actor
 WHERE gender = "female";
 
 SELECT id, salary from Actor
 WHERE name = "Tony Ramos";
 
 SELECT id, name, salary, birth_date, gender from Actor
 WHERE gender = "invalid";
 -- retorna null pois todos os gender estão declarados. 
 
 SELECT id, salary from Actor
 WHERE salary <= 500000;
 
 SELECT * FROM Actor
 WHERE id  = "002";
 
 -- faltou o ponto e virgula
 
 
 SELECT * FROM Actor
 WHERE name LIKE "B%" OR name LIKE "J%";
 
 SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  
    CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
 INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"001",
    "Se eu fosse você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    9
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões"
"2012-12-27",
10
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho"
"2017-11-02",
8
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

SELECT id, title, rating FROM Movie 
WHERE id = "004";

SELECT * FROM Movie 
WHERE  title = "Deus é Brasileiro";

SELECT id, title, synopsis FROM Movie 
WHERE rating > 7;

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
	"005",
    "A vida é Bela",
    " blablablablablabla.",
    "2005-06-06",
    8
);

SELECT * FROM Movie
WHERE title LIKE "%vida%";

SELECT * FROM Movie
WHERE title LIKE "%VIDA%" OR
      synopsis LIKE "vida";
      
      SELECT * FROM Movie
WHERE release_date < "2020-05-04";

SELECT * FROM Movie
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%DEUS%" OR
      synopsis LIKE "%deus%") AND rating > 7;