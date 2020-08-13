module.exports = function (sequelize, DataTypes) {
  const importantToBusiness = sequelize.define('importantToBusiness', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  importantToBusiness.associate = function (models) {
    importantToBusiness.belongsTo(models.businesses, {
      onDelete: 'cascade',
    });
  };

  return importantToBusiness;
};
