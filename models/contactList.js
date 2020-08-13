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

  businessIndustries.associate = (models) => {
    businessIndustries.belongsTo(models.businesses, {
      onDelete: 'cascade',
    }),
      businessIndustries.belongsTo(models.contacts, {
        onDelete: 'cascade',
      }),
      businessIndustries.belongsTo(models.businessEvents, {
        onDelete: 'cascade',
      }),
      businessIndustries.belongsTo(models.contactTypes, {
        onDelete: 'cascade',
      });
  };

  return contactList;
};
