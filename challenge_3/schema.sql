CREATE DATABASE checkout;
USE checkout;

CREATE TABLE record (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100),
  line1 VARCHAR(100),
  line2 VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
  zip VARCHAR(100),
  ccnum INT,
  expdate VARCHAR(100),
  cvv INT,
  billingzip INT
);