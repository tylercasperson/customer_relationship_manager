module.exports = function (sequelize, DataTypes) {
  const services = sequelize.define('services', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    service: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  services.associate = function (models) {
    services.hasMany(models.serviceBusiness, {
      onDelete: 'cascade',
    });
  };

  return services;
};
