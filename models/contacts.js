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
  
    Contacts.associate = function(models) {
        Contacts.belongsTo(models.business, {
            onDelete: 'cascade'
        }),
        Contacts.belongsTo(models.roles, {
            onDelete: 'cascade'
        }),
        Contacts.belongsTo(models.businessFunctions, {
            onDelete: 'cascade'
        }),
        Contacts.belongsTo(models.contactType, {
            onDelete: 'cascade'
        });
    };
  
    return Contacts;
  };
