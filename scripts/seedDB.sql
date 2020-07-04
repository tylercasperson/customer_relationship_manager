DROP DATABASE IF EXISTS CustomerRelationshipManagerDB;
CREATE DATABASE CustomerRelationshipManagerDB;
USE CustomerRelationshipManagerDB;

CREATE TABLE businesss (
  id int auto_increment,
  businessName varChar(255),
  address varChar(255),
  city varChar(255),
  state varChar(255),
  zip varChar(255),
  phoneNumber varChar(30),
  notes longtext,
  customerRank varChar(255),
  businessTypeID int,
  industryID int,
  priority int,
  PRIMARY KEY (id)
);

CREATE TABLE industries (
  id int auto_increment,
  industry varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE businessTypes (
  id int auto_increment,
  businessType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE contacts (
  id int auto_increment,
  contactName varChar(255),
  phoneNumber varChar(30),
  contactWhen varChar(255),
  notes longtext,
  roleID int,
  customerID int,
  contactTypeID int,
  supplierID int,
  businessID int,
  PRIMARY KEY (id)
);

CREATE TABLE contactTypes (
  id int auto_increment,
  contactType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id int auto_increment,
  role varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE surveyHeaders (
  id int auto_increment,
  surveyDate datetime,
  description varChar(255),
  surveyTypeID int,
  PRIMARY KEY (id)
);

CREATE TABLE surveyDetails (
  id int auto_increment,
  surveyHeaderID int,
  question varChar(255),
  answerTypeID int,
  PRIMARY KEY (id)
);

CREATE TABLE answerTypes (
  id int auto_increment,
  answerGroup varChar(255),
  answerType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE surveyTypes (
  id int auto_increment,
  surveyType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE numbers (
  id int auto_increment,
  PRIMARY KEY (id)
);

CREATE TABLE invoiceTypes (
  id int auto_increment,
  invoiceType varChar(255),
  PRIMARY KEY (id)
);

CREATE TABLE invoiceHeaders (
  id int auto_increment,
  invoiceDate date,
  invoiceTypeID int,
  customerID int,
  supplierID int,
  contactID int,
  PRIMARY KEY (id)
);

CREATE TABLE invoiceDetails (
  id int auto_increment,
  invoiceHeaderID int,
  itemID int,
  qty int,
  price int,
  PRIMARY KEY (id)
);

CREATE TABLE items (
  id int auto_increment,
  itemTypeID int,
  description varChar(255),
  cost decimal(15,2),
  price decimal(15,2),
  supplierID int,
  PRIMARY KEY (id)
);

ALTER TABLE surveyDetails ADD FOREIGN KEY (surveyHeaderID) REFERENCES surveyHeaders (id);
ALTER TABLE surveyDetails ADD FOREIGN KEY (answerTypeID) REFERENCES answerTypes (id);
ALTER TABLE surveyHeaders ADD FOREIGN KEY (surveyTypeID) REFERENCES surveyTypes (id);
ALTER TABLE invoiceDetails ADD FOREIGN KEY (invoiceHeaderID) REFERENCES invoiceHeaders (id);
ALTER TABLE invoiceHeaders ADD FOREIGN KEY (invoiceTypeID) REFERENCES invoiceTypes (id);
ALTER TABLE invoiceDetails ADD FOREIGN KEY (itemID) REFERENCES items (id);
ALTER TABLE contacts ADD FOREIGN KEY (customerID) REFERENCES contacts (id);
ALTER TABLE contacts ADD FOREIGN KEY (supplierID) REFERENCES contacts (id);
ALTER TABLE contacts ADD FOREIGN KEY (contactTypeID) REFERENCES contactTypes (id);
ALTER TABLE contacts ADD FOREIGN KEY (roleID) REFERENCES roles (id);
ALTER TABLE contacts ADD FOREIGN KEY (businessID) REFERENCES businesss (id);
ALTER TABLE businesss ADD FOREIGN KEY (businessTypeID) REFERENCES businessTypes (id);
ALTER TABLE businesss ADD FOREIGN KEY (industryID) REFERENCES industries (id);
ALTER TABLE businesss ADD FOREIGN KEY (priority) REFERENCES numbers (id);
ALTER TABLE invoiceHeaders ADD FOREIGN KEY (customerID) REFERENCES businesss (id);
ALTER TABLE invoiceHeaders ADD FOREIGN KEY (supplierID) REFERENCES businesss (id);

