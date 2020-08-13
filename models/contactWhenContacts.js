module.exports = function (sequelize, DataTypes) {
  const contactWhenContacts = sequelize.define('contactWhenContacts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  contactWhenContacts.associate = function (models) {
    contactWhenContacts.belongsTo(models.contacts, {
      onDelete: 'cascade',
    }),
      contactWhenContacts.belongsTo(models.useContactWhen, {
        onDelete: 'cascade',
      });
  };

  return contactWhenContacts;
};
