module.exports = function(sequelize, DataTypes) {
    const Industries = sequelize.define("Industries", {
      industry: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Industries.associate = function(models) {
        Industries.hasMany(models.Businesss, {
            onDelete: 'cascade'
        });
    };
  
    return Industries;
  };
