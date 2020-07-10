module.exports = function(sequelize, DataTypes) {
    const industries = sequelize.define("industries", {
      industry: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    industries.associate = function(models) {
    industries.hasMany(models.businesses, {
            onDelete: 'cascade'
        });
    };
  
    return industries;
  };
