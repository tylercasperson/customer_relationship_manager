module.exports = function (sequelize, DataTypes) {
  const businessRatings = sequelize.define('businessRatings', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    rating: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  businessRatings.associate = (models) => {
    businessRatings.belongsTo(models.businesses, {
      onDelete: 'cascade',
    });
    // businessRatings.belongsTo(models.contacts, {
    //   onDelete: 'cascade',
    // });
  };

  return businessRatings;
};
