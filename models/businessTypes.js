module.exports = function(sequelize, DataTypes) {
    const businessTypes = sequelize.define("businessTypes", {
      businessType: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      }
    });

    businessTypes.associate = function(models) {
        businessTypes.hasMany(models.businesses, {
            onDelete: 'cascade'
        });
    };
  
    return businessTypes;
  };
