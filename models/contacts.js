module.exports = function(sequelize, DataTypes) {
    const contacts = sequelize.define("contacts", {
      contactName: {
          type: DataTypes.STRING,
          allowNulls: false
        },
      phoneNumber: DataTypes.STRING,
      email: {
          type: DataTypes.STRING,
          isEmail: true,
          required: true,
          inNull: false
      },
      contactWhen: DataTypes.STRING,
      notes: DataTypes.TEXT,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    contacts.associate = models => {
        contacts.belongsTo(models.businesses, {
            onDelete: 'cascade'
        });
        contacts.belongsTo(models.roles, {
            onDelete: 'cascade'
        }),
        contacts.belongsTo(models.businessFunctions, {
            onDelete: 'cascade'
        }),
        contacts.belongsTo(models.contactTypes, {
            onDelete: 'cascade'
        });
    };
  
    return contacts;
  };
