module.exports = function(sequelize, DataTypes) {
    const ContactTypes = sequelize.define("ContactTypes", {
      contactType: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    ContactTypes.associate = function(models) {
        ContactTypes.hasMany(models.Contacts, {
            onDelete: 'cascade'
        });
    };
  
    return ContactTypes;
  };
