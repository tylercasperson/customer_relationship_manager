module.exports = function (sequelize, DataTypes) {
  const businessTypes = sequelize.define('businessTypes', {
    businessType: {
      type: DataTypes.STRING,
      allowNulls: false,
      required: true,
    },
  });

  // businessTypes.associate = function (models) {
  // businessTypes.hasMany(models.events, {
  //   onDelete: 'cascade',
  // });
  // businessTypes.hasMany(models.contactTypes, {
  //   onDelete: 'cascade',
  // });
  // };

  return businessTypes;
};
