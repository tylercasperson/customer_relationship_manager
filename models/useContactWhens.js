module.exports = function (sequelize, DataTypes) {
  const useContactWhens = sequelize.define('useContactWhens', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    contactWhen: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  useContactWhens.associate = function (models) {
    useContactWhens.hasMany(models.contactWhenContacts, {
      onDelete: 'cascade',
    });
  };

  return useContactWhens;
};
