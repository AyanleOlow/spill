CREATE DATABASE card_game;

\c card_game; -- Connect to the database

CREATE TABLE cards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    mana_cost INT NOT NULL,
    attack INT DEFAULT 0,
    defense INT DEFAULT 0
);
