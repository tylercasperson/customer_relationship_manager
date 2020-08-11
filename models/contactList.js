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
      businessIndustries.belongsTo(models.industries, {
        onDelete: 'cascade',
      });
  };

  return contactList;
};
