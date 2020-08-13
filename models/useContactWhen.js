module.exports = function (sequelize, DataTypes) {
  const useContactWhen = sequelize.define('useContactWhen', {
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

  useContactWhen.associate = function (models) {
    useContactWhen.hasMany(models.contactWhenContacts, {
      onDelete: 'cascade',
    });
  };

  return useContactWhen;
};
