module.exports = function(sequelize, DataTypes) {
    const Numbers = sequelize.define("Numbers", {
      id: {
          type: DataTypes.INTEGER,
          allowNulls: false,
          required: true
      }
    });
  
    Numbers.associate = function(models) {
        Numbers.hasMany(models.business, {
            onDelete: 'cascade'
        });
    };
  
    return Numbers;
  };
