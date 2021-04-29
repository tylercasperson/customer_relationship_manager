'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

console.log('basename: ', basename);
console.log('dirname: ', __dirname);
console.log('db: ', db);

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

console.log('db: ', db);

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(function (file) {
    var model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

console.log('keys: ', Object.keys(db));
Object.keys(db).forEach(function (modelName) {
  //   console.log('modelName: ', modelName);
  //   console.log('222: ', db[modelName]);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// console.log('db1: ', db);

console.log('db123: ', db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

console.log('db123: ', db);

// console.log('db1: ', db);

module.exports = db;
