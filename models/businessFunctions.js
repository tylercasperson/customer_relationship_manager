module.exports = function (sequelize, DataTypes) {
  const businessFunctions = sequelize.define('businessFunctions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    businessFunction: {
      type: DataTypes.STRING,
      allowNulls: false,
      required: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  businessFunctions.associate = function (models) {
    businessFunctions.hasMany(models.contactBusinessFunctions, {
      onDelete: 'cascade',
    });
  };

  return businessFunctions;
};
