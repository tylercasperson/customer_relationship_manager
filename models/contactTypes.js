module.exports = function(sequelize, DataTypes) {
    const contactTypes = sequelize.define("contactTypes", {
      contactType: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    contactTypes.associate = function(models) {
        contactTypes.hasMany(models.contacts, {
            onDelete: 'cascade'
        });
    };
  
    return contactTypes;
  };
