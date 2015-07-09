CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT(11) NOT NULL auto_increment,
  text VARCHAR(250),
  user_id INT(11),
  room_id INT(11),
  date timestamp,
  PRIMARY KEY (id)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT(11) NOT NULL auto_increment,
  name VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT(11) NOT NULL auto_increment,
  name VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE friends (
  user_id INT(11) DEFAULT '0' NOT NULL,
  friend_id INT(11) DEFAULT '0' NOT NULL,
  PRIMARY KEY (user_id, friend_id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

