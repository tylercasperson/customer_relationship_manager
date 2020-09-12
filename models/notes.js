module.exports = function (sequelize, DataTypes) {
  const notes = sequelize.define('notes', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      autoIncrement: true,
      required: true,
    },
    note: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  notes.associate = function (models) {
    notes.belongsTo(models.businesses, {
      onDelete: 'cascade',
    });
  };

  return notes;
};
