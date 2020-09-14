module.exports = function (sequelize, DataTypes) {
  const eventSpecials = sequelize.define('eventSpecials', {
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

  eventSpecials.associate = function (models) {
    eventSpecials.belongsTo(models.businessEvents, {
      onDelete: 'cascade',
    }),
      eventSpecials.belongsTo(models.businesses, {
        onDelete: 'cascade',
      });
  };

  return eventSpecials;
};
