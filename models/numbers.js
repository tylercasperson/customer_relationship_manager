module.exports = function(sequelize, DataTypes) {
    const numbers = sequelize.define("numbers", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    numbers.associate = function(models) {
        numbers.hasMany(models.businesses, {
            onDelete: 'cascade'
        });
    };
  
    return numbers;
  };
