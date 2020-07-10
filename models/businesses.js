module.exports = function(sequelize, DataTypes) {
    var businesses = sequelize.define("businesses", {
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
      numberID: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    });
  
    businesses.associate = models => {
        businesses.hasMany(models.contacts, {
            onDelete: 'cascade'
        }),
        businesses.belongsTo(models.businessTypes, {
            onDelete: 'cascade'
        }),
        businesses.belongsTo(models.industries, {
            onDelete: 'cascade'
        });
    };
  
    return businesses;
  };
