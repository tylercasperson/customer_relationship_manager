module.exports = function(sequelize, DataTypes) {
    const Industries = sequelize.define("Industries", {
      industry: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      }
    });
  
    Industries.associate = function(models) {
        Industries.hasMany(models.Businesss, {
            foreignKey: 'industryID',
            sourceKey: 'id',
            onDelete: 'cascade'
        });
    };
  
    return Industries;
  };
