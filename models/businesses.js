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
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  businesses.associate = (models) => {
    businesses.hasMany(models.businessIndustries, {
      onDelete: 'cascade',
    }),
      businesses.hasMany(models.products, {
        onDelete: 'cascade',
      }),
      businesses.hasMany(models.eventDeals, {
        onDelete: 'cascade',
      }),
      businesses.hasMany(models.businessEvents, {
        foreignKey: 'eventID',
        onDelete: 'cascade',
      }),
      businesses.hasMany(models.businessEvents, {
        as: 'event',
        onDelete: 'cascade',
      });
    businesses.hasMany(models.serviceBusinesses, {
      onDelete: 'cascade',
    }),
      businesses.hasMany(models.importantToBusinesses, {
        onDelete: 'cascade',
      }),
      businesses.hasMany(models.contactLists, {
        // as: 'businessContactLists',
        onDelete: 'cascade',
      }),
      businesses.hasMany(models.contacts, {
        onDelete: 'cascade',
      }),
      businesses.hasMany(models.notes, {
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
