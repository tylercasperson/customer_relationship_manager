module.exports = function(sequelize, DataTypes) {
    const BusinessFunctions = sequelize.define("BusinessFunctions", {
      businessFunctions: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      }
    });
  
    BusinessFunctions.associate = function(models) {
        BusinessFunctions.hasMany(models.business, {
            onDelete: 'cascade'
        });
    };
  
    return BusinessFunctions;
  };
