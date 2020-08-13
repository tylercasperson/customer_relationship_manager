module.exports = function (sequelize, DataTypes) {
  const locks = sequelize.define('locks', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNulls: false,
      required: true,
    },
    lockType: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  locks.associate = (models) => {
    locks.hasMany(models.users, {
      onDelete: 'cascade',
    }),
      locks.hasMany(models.businesses, {
        onDelete: 'cascade',
      }),
      locks.hasMany(models.contacts, {
        onDelete: 'cascade',
      });
  };

  return locks;
};
