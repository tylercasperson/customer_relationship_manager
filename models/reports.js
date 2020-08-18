module.exports = function (sequelize, DataTypes) {
  const reports = sequelize.define('reports', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    reportName: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  reports.associate = (models) => {
    reports.belongsTo(models.businesses, {
      onDelete: 'cascade',
    });
  };

  return reports;
};
