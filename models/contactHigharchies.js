module.exports = function (sequelize, DataTypes) {
  const contactHigharchies = sequelize.define('contactHigharchies', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    xplot: DataTypes.INTEGER,
    yplot: DataTypes.INTEGER,
    groupName: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  contactHigharchies.associate = function (models) {
    contactHigharchies.belongsTo(models.contacts, {
      onDelete: 'cascade',
    });
  };

  return contactHigharchies;
};
