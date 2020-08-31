DROP DATABASE IF EXISTS BusinessRelationshipManagerDB;
CREATE DATABASE BusinessRelationshipManagerDB;
USE BusinessRelationshipManagerDB;
CREATE TABLE numbers (
    id int auto_increment,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE industries (
    id int auto_increment,
    industry varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE businessTypes (
    id int auto_increment,
    businessType varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE businessFunctions (
    id int auto_increment,
    businessFunction varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE services (
    id int auto_increment,
    service varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE businesses (
    id int auto_increment,
    businessName varChar (255),
    imageURL varChar(255),
    introduction varChar (255),
    tagLine varChar (255),
    slogan varChar (255),
    address1 varChar (255),
    address2 varChar (255),
    city varChar (255),
    state varChar (255),
    zip varChar (255),
    country varChar (255),
    businessTypeID int,
    lockID int,
    numberID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE notes (
    id int auto_increment,
    businessID int,
    contactID int,
    note varChar(255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE contactTypes (
    id int auto_increment,
    contactGroup varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE roles (
    id int auto_increment,
    title varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE reports (
    id int auto_increment,
    businessID int,
    reportName varChar(255),
    description varChar(255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE businessRatings (
    id int auto_increment,
    businessID int,
    contactID int,
    rating int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE useContactWhens (
    id int auto_increment,
    contactWhen varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE contactLists (
    id int auto_increment,
    contactTypeID int,
    businessID int,
    contactID int,
    eventID int,
    contactInfo varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE contacts (
    id int auto_increment,
    contactName varChar (255),
    imageURL varChar (255),
    businessFunctionID int,
    businessID int,
    lockID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE locks (
    id int auto_increment,
    lockType varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE users (
    id int auto_increment,
    name varChar (255),
    email varChar (255),
    password varChar (255),
    lockID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE eventDeals (
    id int auto_increment,
    businessEventID int,
    deal varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE businessEvents (
    id int auto_increment,
    businessID int,
    eventID int,
    booth varChar (255),
    contactTypeID int,
    startDateTime datetime,
    endDateTime datetime,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE products (
    id int auto_increment,
    name varChar (255),
    imageURL varChar(255),
    price decimal (13, 2),
    businessID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE businessIndustries (
    id int auto_increment,
    businessID int,
    industryID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE serviceBusinesses (
    id int auto_increment,
    businessID int,
    serviceID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE contactBusinessFunctions (
    id int auto_increment,
    contactID int,
    businessFunctionID int,
    roleID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE contactWhenContacts (
    id int auto_increment,
    contactID int,
    contactWhenID int,
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE importantToBusinesses (
    id int auto_increment,
    businessID int,
    description varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);
CREATE TABLE contactHigharchies (
    id int auto_increment,
    contactID int,
    xplot int,
    yplot int,
    groupName varChar (255),
    createdAt datetime,
    updatedAt datetime,
    PRIMARY KEY (id)
);