SHOW DATABASES;

USE sakila;

CREATE TABLE Filme(
	FilmeId INT NOT NULL AUTO_INCREMENT,
    Descricao VARCHAR(100) NOT NULL,
    AnoLancamento INT NOT NULL,
    Nota INT,
    PRIMARY KEY ( FilmeId )
);