const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').sequelize

const Employee = sequelize.define('Employee', {
      id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
      },
      email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
      },
      position: {
            type: DataTypes.STRING,
            allowNull: false
      },
      salary: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
      },
      age: {
            type: DataTypes.INTEGER,
            allowNull: false
      },
      experience: {
            type: DataTypes.INTEGER,
            allowNull: false
      }
}, {
      timestamps: true
});

module.exports = Employee;
