module.exports = function (sequelize, DataTypes) {
  var businesses = sequelize.define('businesses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    businessName: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    introduction: DataTypes.STRING,
    tagLine: DataTypes.STRING,
    slogan: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    country: DataTypes.STRING,
    notes: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  businesses.associate = (models) => {
    businesses.hasMany(models.contacts, {
      onDelete: 'cascade',
    }),
      businesses.hasMany(models.industries, {
        onDelete: 'cascade',
      }),
      businesses.belongsTo(models.businessTypes, {
        onDelete: 'cascade',
      }),
      businesses.belongsTo(models.locks, {
        onDelete: 'cascade',
      }),
      businesses.belongsTo(models.numbers, {
        onDelete: 'cascade',
      });
  };

  return businesses;
};
