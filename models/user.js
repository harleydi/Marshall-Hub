'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    digiCode: DataTypes.INTEGER,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Case, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })

    User.hasMany(models.Post, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
  };
  return User;
};