module.exports = function (sequelize, DataTypes) {
  const roles = sequelize.define('roles', {
    title: {
      type: DataTypes.STRING,
      allowNulls: false,
      required: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  roles.associate = function (models) {
    roles.hasMany(models.contactBusinessFunctions, {
      onDelete: 'cascade',
    });
  };

  return roles;
};
