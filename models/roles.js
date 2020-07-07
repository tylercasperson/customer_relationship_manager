module.exports = function(sequelize, DataTypes) {
    const Roles = sequelize.define("Roles", {
      role: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Roles.associate = function(models) {
        Roles.hasMany(models.Contacts, {
            onDelete: 'cascade'
        });
    };
  
    return Roles;
  };
