module.exports = function (sequelize, DataTypes) {
  const contactBusinessFunctions = sequelize.define(
    'contactBusinessFunctions',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNulls: false,
        required: true,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    }
  );

  contactBusinessFunctions.associate = (models) => {
    contactBusinessFunctions.belongsTo(models.contacts, {
      onDelete: 'cascade',
    }),
      contactBusinessFunctions.belongsTo(models.businessFunctions, {
        onDelete: 'cascade',
      });
  };

  return contactBusinessFunctions;
};
