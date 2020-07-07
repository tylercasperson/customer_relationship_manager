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
      priority: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    Businesss.associate = models => {
        Businesss.hasMany(models.Contacts, {
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
