module.exports = function(sequelize, DataTypes) {
    const BusinessTypes = sequelize.define("BusinessTypes", {
      businessType: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      }
    });

    BusinessTypes.associate = function(models) {
        BusinessTypes.hasMany(models.Businesss, {
            onDelete: 'cascade'
        });
    };
  
    return BusinessTypes;
  };
