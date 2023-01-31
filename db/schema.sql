SET FOREIGN_KEY_CHECKS=0;
DROP DATABASE IF EXISTS employee_info_db;

CREATE DATABASE employee_info_db;
SET FOREIGN_KEY_CHECKS=0;

USE employee_info_db;

CREATE TABLE department (

    id INT NOT NULL AUTO_INCREMENT,

    name VARCHAR(30) NOT NULL,

    PRIMARY KEY(id)

);

CREATE TABLE role (

  id INT NOT NULL AUTO_INCREMENT,

  title VARCHAR(30) NOT NULL,

  salary DECIMAL(10,2) NOT NULL,

  department_id INT NOT NULL,

  PRIMARY KEY (id)

);

CREATE TABLE employee (

  id INT NOT NULL AUTO_INCREMENT,

  first_name VARCHAR(30) NOT NULL,

  last_name VARCHAR(30) NOT NULL,

  role_id INT NOT NULL,

  manager_id INT,

  PRIMARY KEY (id)

);