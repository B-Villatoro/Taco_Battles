
DROP DATABASE IF EXISTS taco_battle_db;
CREATE DATABASE taco_battle_db;

USE taco_battle_db;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name_user VARCHAR(100) NOT NULL, # user must creat a unique user name
  taco_count INTEGER(10), # how many tacos the user has on their roster
  join_date DATETIME, # date/time a user signed up
  purchase_credits INTEGER(10), #amount of credits or points a user has to buy/select ingredients
  rating INTEGER(10),
  PRIMARY KEY(id)
);

CREATE TABLE tacos (
  id INT NOT NULL AUTO_INCREMENT,
  taco_name VARCHAR(100), # User names their taco
  name_user VARCHAR(100), # User must enter their user name and it must match EACTLY the name_user in the 'users' table
  ingredients VARCHAR(100), /* maybe we will use this or not. It is an array, but not supported in 
  mysql workebench. 'health' is the sum of ingredients in the 'ingredients table' */
  attack INTEGER(10),
  health INTEGER(10), # is the sum value from the 'ingredients' table
  wins INTEGER(10), # how many battles won
  losses INTEGER(10), # how many battles lost
  created_date DATETIME, # the tacos birthday
  PRIMARY KEY(id)
);

CREATE TABLE ingredients (
  id INT NOT NULL AUTO_INCREMENT,
  ingred_name VARCHAR(50), #name of the ingredient i.e. lettuce, chicken, guacomole
  attack INTEGER(10), # attack score deteremined by?
  health INTEGER(10), # health score is determined total sum of the ingredients values selected
  purchase_value INTEGER(10), #how many credits or points it costs to add to your taco
  PRIMARY KEY(id)
);
