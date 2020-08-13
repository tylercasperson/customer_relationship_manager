module.exports = function (sequelize, DataTypes) {
  const contactList = sequelize.define('contactList', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    contactInfo: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  contactList.associate = (models) => {
    contactList.belongsTo(models.businesses, {
      onDelete: 'cascade',
    }),
      contactList.belongsTo(models.contacts, {
        onDelete: 'cascade',
      }),
      contactList.belongsTo(models.businessEvents, {
        onDelete: 'cascade',
      }),
      contactList.belongsTo(models.contactTypes, {
        onDelete: 'cascade',
      });
  };

  return contactList;
};
