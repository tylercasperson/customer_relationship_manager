DROP DATABASE IF EXISTS CustomerRelationshipManagerDB;
-- Creates the "blogger" database --
CREATE DATABASE CustomerRelationshipManagerDB;

USE CustomerRelationshipManagerDB;
CREATE TABLE customers (
    id int AUTO_INCREMENT,
    businessName varchar(255) NOT NULL,
    address varchar(255),
    phoneNumber varchar(255),
    businessTypeID int NOT NULL,
    PRIMARY KEY (id) 
);


INSERT INTO customers (businessName, address, phoneNumber, businessTypeID)
VALUES ("ABC cleaning", "123 dirty st", "111-111-1111", 2);

INSERT INTO customers (businessName, address, phoneNumber, businessTypeID)
VALUES ("XYZ accounting", "932 Numbers ct", "123-456-7890", 5);
