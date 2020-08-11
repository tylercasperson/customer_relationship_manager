module.exports = function (sequelize, DataTypes) {
  const events = sequelize.define('events', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    booth: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    startTime: DataTypes.TIME,
    endDate: DataTypes.DATEONLY,
    endTime: DataTypes.TIME,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return events;
};
