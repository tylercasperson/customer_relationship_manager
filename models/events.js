module.exports = function (sequelize, DataTypes) {
  const events = sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    booth: DataTypes.STRING,
    startDateTime: DataTypes.DATE,
    endDateTime: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  events.associate = (models) => {
    events.hasMany(models.events, {
      onDelete: 'cascade',
    }),
      events.belongsTo(models.events, {
        onDelete: 'cascade',
      }),
      events.hasMany(models.eventSpecials, {
        onDelete: 'cascade',
      }),
      events.belongsTo(models.businesses, {
        onDelete: 'cascade',
      }),
      events.belongsTo(models.contactTypes, {
        onDelete: 'cascade',
      });
  };

  return events;
};
