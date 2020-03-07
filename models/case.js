'use strict';
module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    digiCode: DataTypes.INTEGER,
    victim_name: DataTypes.STRING,
    victim_age: DataTypes.INTEGER,
    victim_ethnic: DataTypes.STRING,
    incident_location: DataTypes.STRING,
    charges: DataTypes.STRING,
    description: DataTypes.TEXT,
    detained: DataTypes.BOOLEAN,
    cops_present: DataTypes.INTEGER,
    photo_url: DataTypes.STRING,
    officer_name: DataTypes.STRING,
    officer_age: DataTypes.INTEGER,
    officer_ethnic: DataTypes.STRING,
    officer_nature: DataTypes.TEXT,
    miranda_rights: DataTypes.BOOLEAN
  }, {});
  Case.associate = function(models) {
    // associations can be defined here
    Case.belongsTo(models.User, {
      foreignKey: 'userid',
      onDelete: 'CASCADE'
    })
  };
  return Case;
};