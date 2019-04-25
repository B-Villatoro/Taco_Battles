DROP DATABASE IF EXISTS taco_battle_db;
CREATE DATABASE taco_battle_db;

DROP DATABASE IF EXISTS taco_battle_db;
CREATE DATABASE taco_battle_db;

USE taco_battle_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name_user VARCHAR(100) NOT NULL,
  taco_count INTEGER(10),
  join_date DATETIME,
  rating INTEGER(10),
  PRIMARY KEY(id)
);

CREATE TABLE tacos (
  id INT NOT NULL AUTO_INCREMENT,
  taco_name VARCHAR(100),
  ingredients VARCHAR(100),
  attack INTEGER(10),
  health INTEGER(10),
  wins INTEGER(10),
  losses INTEGER(10),
  PRIMARY KEY(id)
);

CREATE TABLE ingredients (
  id INT NOT NULL AUTO_INCREMENT,
  ingred_name VARCHAR(50),
  attack INTEGER(10),
  health INTEGER(10),
  PRIMARY KEY(id)
);
