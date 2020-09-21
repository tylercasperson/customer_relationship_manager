module.exports = function (sequelize, DataTypes) {
  const placeholders = sequelize.define('placeholders', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    placeholder: DataTypes.INTEGER,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  return placeholders;
};
