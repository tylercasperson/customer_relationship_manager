module.exports = function (sequelize, DataTypes) {
  const products = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  products.associate = (models) => {
    products.belongsTo(models.businesses, {
      onDelete: 'cascade',
    });
  };

  return products;
};
