module.exports = function (sequelize, DataTypes) {
  const eventDeals = sequelize.define('eventDeals', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    deal: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  eventDeals.associate = function (models) {
    eventDeals.belongsTo(models.businessEvents, {
      onDelete: 'cascade',
    }),
      eventDeals.belongsTo(models.businesses, {
        onDelete: 'cascade',
      });
  };

  return eventDeals;
};
