module.exports = function (sequelize, DataTypes) {
  const contacts = sequelize.define('contacts', {
    contactName: {
      type: DataTypes.STRING,
      allowNulls: false,
    },
    notes: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  contacts.associate = (models) => {
    contacts.hasMany(models.contactBusinessFunctions, {
      onDelete: 'cascade',
    }),
      contacts.hasMany(models.contactList, {
        onDelete: 'cascade',
      }),
      contacts.hasMany(models.contactWhenContacts, {
        onDelete: 'cascade',
      }),
      contacts.hasMany(models.contactHigharchy, {
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
