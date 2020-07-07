module.exports = function(sequelize, DataTypes) {
    const ContactTypes = sequelize.define("ContactTypes", {
      contactType: {
          type: DataTypes.STRING,
          allowNulls: false,
          required: true
      }
    });
  
    ContactTypes.associate = function(models) {
        ContactTypes.hasMany(models.Contacts, {
            foreignKey: 'contactTypeID',
            sourceKey: 'id',
            onDelete: 'cascade'
        });
    };
  
    return ContactTypes;
  };
