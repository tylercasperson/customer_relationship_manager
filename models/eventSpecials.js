module.exports = function (sequelize, DataTypes) {
  const eventSpecials = sequelize.define('eventSpecials', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    special: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  eventSpecials.associate = function (models) {
    eventSpecials.belongsTo(models.events, {
      onDelete: 'cascade',
    }),
      eventSpecials.belongsTo(models.businesses, {
        targetKey: 'id',
        foreignKey: 'eventId',
        onDelete: 'cascade',
      });
  };

  return eventSpecials;
};
