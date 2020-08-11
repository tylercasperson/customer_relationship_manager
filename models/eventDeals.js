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

  return eventDeals;
};
