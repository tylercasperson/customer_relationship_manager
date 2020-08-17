module.exports = function (sequelize, DataTypes) {
  const serviceBusinesses = sequelize.define('serviceBusinesses', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  serviceBusinesses.associate = function (models) {
    serviceBusinesses.belongsTo(models.services, {
      onDelete: 'cascade',
    }),
      serviceBusinesses.belongsTo(models.businesses, {
        onDelete: 'cascade',
      });
  };

  return serviceBusinesses;
};
