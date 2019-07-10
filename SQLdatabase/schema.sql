DROP DATABASE IF EXISTS lorendell;
CREATE DATABASE lorendell;

\connect lorendell;

CREATE TABLE lorendell (
  character_name VARCHAR(255),
  wood INT,
  ore INT,
  food INT,
  gold INT,
  available_citizens INT,
  wood_citizens INT,
  ore_citizens INT,
  food_citizens INT,
  gold_citizens INT,
  army_footmen INT,
  army_archers INT,
  army_calvary INT,
  armor_helm INT,
  armor_glove INT,
  armor_chest INT,
  armor_pants INT,
  armor_shoes INT,
  armor_weapon INT,
  armor_offhand INT
);

CREATE TABLE users (
  id int PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);