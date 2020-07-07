module.exports = function(sequelize, DataTypes) {
    const BusinessFunctions = sequelize.define("BusinessFunctions", {
      businessFunction: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    BusinessFunctions.associate = function(models) {
        BusinessFunctions.hasMany(models.Contacts, {
            onDelete: 'cascade'
        });
    };
  
    return BusinessFunctions;
  };
