module.exports = function(sequelize, DataTypes) {
    const Numbers = sequelize.define("Numbers", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Numbers.associate = function(models) {
        Numbers.hasMany(models.Businesss, {
            onDelete: 'cascade'
        });
    };
  
    return Numbers;
  };
