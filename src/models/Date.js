const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('date', {
    date: {
      type: DataTypes.STRING,
      AllowNull: false,
    },
    time: {
      type: DataTypes.ENUM('morning', 'evening'),
      AllowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      AllowNull: true,
    },
    free: {
      type: DataTypes.BOOLEAN,
    },
    load: {
      type: DataTypes.STRING,
      AllowNull: true,
    },
    truckId: {
      type: DataTypes.INTEGER,
      AllowNull: false,
    },
  });
};
