module.exports = function (sequelize, DataTypes) {
  const businessIndustries = sequelize.define('businessIndustries', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  businessIndustries.associate = (models) => {
    businessIndustries.belongsTo(models.businesses, {
      onDelete: 'cascade',
    }),
      businessIndustries.belongsTo(models.industries, {
        onDelete: 'cascade',
      });
  };

  return businessIndustries;
};
