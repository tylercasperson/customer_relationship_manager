module.exports = function(sequelize, DataTypes) {
    const Roles = sequelize.define("Roles", {
      role: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      }
    });
  
    Roles.associate = function(models) {
        Roles.hasMany(models.contacts, {
            onDelete: 'cascade'
        });
    };
  
    return Roles;
  };
