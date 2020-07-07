module.exports = function(sequelize, DataTypes) {
    const Numbers = sequelize.define("Numbers", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNulls: false,
          required: true
      }
    });
  
    Numbers.associate = function(models) {
        Numbers.hasMany(models.Businesss, {
            foreignKey: 'priority',
            sourceKey: 'id',
            onDelete: 'cascade'
        });
    };
  
    return Numbers;
  };
