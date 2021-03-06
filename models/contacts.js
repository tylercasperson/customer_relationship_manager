module.exports = function (sequelize, DataTypes) {
  const contacts = sequelize.define('contacts', {
    contactName: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  contacts.associate = (models) => {
    contacts.hasMany(models.contactBusinessFunctions, {
      onDelete: 'cascade',
    }),
      contacts.hasMany(models.contactLists, {
        onDelete: 'cascade',
      }),
      contacts.hasMany(models.contactWhenContacts, {
        onDelete: 'cascade',
      }),
      contacts.hasMany(models.contactHigharchies, {
        onDelete: 'cascade',
      }),
      contacts.belongsTo(models.businesses, {
        onDelete: 'cascade',
      }),
      contacts.belongsTo(models.locks, {
        onDelete: 'cascade',
      });
  };

  return contacts;
};
