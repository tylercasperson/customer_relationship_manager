module.exports = function (sequelize, DataTypes) {
  const serviceBusiness = sequelize.define('serviceBusiness', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return serviceBusiness;
};
