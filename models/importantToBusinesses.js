module.exports = function (sequelize, DataTypes) {
  const importantToBusinesses = sequelize.define('importantToBusinesses', {
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

  importantToBusinesses.associate = function (models) {
    importantToBusinesses.belongsTo(models.businesses, {
      onDelete: 'cascade',
    });
  };

  return importantToBusinesses;
};
