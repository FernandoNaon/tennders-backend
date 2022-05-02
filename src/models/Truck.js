const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('truck', {
    name: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
};
