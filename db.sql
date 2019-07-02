CREATE TABLE movie(
    id serial PRIMARY KEY,
    year int,
    movie_name VARCHAR(100),
    category VARCHAR(50)
);

INSERT INTO movie(year, movie_name, category) VALUES ('2018', 'Aquaman', 'Animaton');
INSERT INTO movie(year, movie_name, category) VALUES ('1997', 'Titanic', 'Drama');
INSERT INTO movie(year, movie_name, category) VALUES ('2019', 'Avengers', 'Action');
