const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize;

const User = sequelize.define('User', {
      id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
      },
      userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
      },
      email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
      },
      password: {
            type: DataTypes.STRING,
            allowNull: false
      },
      fullName: {
            type: DataTypes.STRING,
            allowNull: false
      },
      createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
      },
      updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
      }
});

module.exports = User;


