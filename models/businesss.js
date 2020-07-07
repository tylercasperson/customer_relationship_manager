module.exports = function(sequelize, DataTypes) {
    var Businesss = sequelize.define("Businesss", {
      businessName: {
          type: DataTypes.STRING,
          allowNulls: false
        },
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zip: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      notes: DataTypes.TEXT,
      businessTypeID: {
          type: DataTypes.INTEGER,
          required: true,
          allowNulls: false
      },
      industryID: {
          type: DataTypes.INTEGER,
          required: true,
          allowNulls: false
      },
      priority: DataTypes.INTEGER
    });
  
    Businesss.associate = models => {
        Businesss.hasMany(models.Contacts, {
            foreignKey: 'businessID',
            sourceKey: 'id',
            onDelete: 'cascade'
        }),
        Businesss.belongsTo(models.BusinessTypes, {
            onDelete: 'cascade'
        }),
        Businesss.belongsTo(models.Industries, {
            onDelete: 'cascade'
        });
    };
  
    return Businesss;
  };
