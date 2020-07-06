module.exports = function(sequelize, DataTypes) {
    const Business = sequelize.define("Business", {
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
  
    Business.associate = function(models) {
        Business.hasMany(models.contacts, {
            onDelete: 'cascade'
        }),
        Business.belongsTo(models.businessTypes, {
            onDelete: 'cascade'
        }),
        Business.belongsTo(models.indutries, {
            onDelete: 'cascade'
        });
    };
  
    return Business;
  };
