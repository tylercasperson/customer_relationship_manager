module.exports = function (sequelize, DataTypes) {
  const contactLists = sequelize.define('contactLists', {
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

  contactLists.associate = (models) => {
    contactLists.belongsTo(models.businesses, {
      foreignKey: 'businessID',
      onDelete: 'cascade',
    }),
      contactLists.belongsTo(models.contacts, {
        onDelete: 'cascade',
      }),
      // contactLists.belongsTo(models.businessEvents, {
      //   as: 'eventContactList',
      //   onDelete: 'cascade',
      // }),
      contactLists.belongsTo(models.contactTypes, {
        onDelete: 'cascade',
      });
  };

  return contactLists;
};
