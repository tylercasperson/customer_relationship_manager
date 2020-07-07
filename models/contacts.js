module.exports = function(sequelize, DataTypes) {
    const Contacts = sequelize.define("Contacts", {
      ContactsName: {
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
      roleID: {
          type: DataTypes.INTEGER,
          allowNulls: false,
          required: true
      },
      businessFunctionID: {
          type: DataTypes.INTEGER,
          allowNulls: false,
          required: true
      },
      contactTypeID: {
          type: DataTypes.INTEGER,
          allowNulls: false,
          required: true
      },
      businessID: {
          type: DataTypes.INTEGER,
          allowNulls: false,
          required: true
      }
    });
  
    Contacts.associate = models => {
        Contacts.belongsTo(models.Businesss, {
            onDelete: 'cascade'
        });
        Contacts.belongsTo(models.Roles, {
            onDelete: 'cascade'
        }),
        Contacts.belongsTo(models.BusinessFunctions, {
            onDelete: 'cascade'
        }),
        Contacts.belongsTo(models.ContactTypes, {
            onDelete: 'cascade'
        });
    };
  
    return Contacts;
  };
