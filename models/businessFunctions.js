module.exports = function(sequelize, DataTypes) {
    const businessFunctions = sequelize.define("businessFunctions", {
      businessFunction: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    businessFunctions.associate = function(models) {
        businessFunctions.hasMany(models.contacts, {
            onDelete: 'cascade'
        });
    };
  
    return businessFunctions;
  };
