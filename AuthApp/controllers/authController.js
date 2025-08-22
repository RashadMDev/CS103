// const Joi = require('joi');
// const jwt = require('jsonwebtoken');
// const SECRET = process.env.SECRET

const User = require('../models/userModel');
const Employee = require('../models/employeeModel')
const { Op } = require('sequelize')

async function getAllUsers(req, res) {
      try {
            const users = await User.findAll({
                  order: [['createdAt', 'DESC']]
            });
            res.status(200).json({
                  message: "Users retrieved successfully",
                  data: users,
                  count: users.length
            });
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
      }
}

async function createUser(req, res) {
      try {
            const newUser = await User.create(req.body);
            res.status(201).json({
                  message: 'User successfully created',
                  data: newUser,
            })
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
      }

}

async function getAllEmployees(req, res) {
      try {
            const employees = await Employee.findAll();

            res.status(200).json({
                  message: "Employees retrieved successfully",
                  data: employees,
                  count: employees.length
            });
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(500).json({ message: "Server error" });
      }
}

async function getEmployeeById(req, res) {
      const { id } = req.params;
      try {
            const employee = await Employee.findByPk(id);
            if (employee) {
                  res.status(200).json({
                        message: "Employee retrieved successfully",
                        data: employee
                  });
            } else {
                  res.status(404).json({
                        message: "Employee not found"
                  });
            }
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            res.status(500).json({ message: "Server error" });
      }
}

async function createEmployee(req, res) {
      try {
            const newEmployee = await Employee.create(req.body);
            res.status(201).json({
                  message: 'Employee successfully created',
                  data: newEmployee,
            })
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
      }
}

async function deleteEmployee(req, res) {
      try {
            const { id } = req.params;
            const deletedEmployee = await Employee.destroy({
                  where: { id }
            });
            if (deletedEmployee) {
                  res.status(200).json({
                        data: deletedEmployee,
                        message: `Employee with id ${id} deleted successfully`,
                  });
            } else {
                  res.status(404).json({
                        message: 'Employee not found',
                  });
            }
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
      }
}

async function updateEmployee(req, res) {
      const { id } = req.params
      try {
            const updatedEmployee = await Employee.update(req.body, {
                  where: { id },
                  returning: true
            });
            if (updatedEmployee[0]) {
                  res.status(200).json({
                        message: `Employee with id ${id} updated successfully`,
                        data: updatedEmployee[1]
                  });
            } else {
                  res.status(404).json({
                        message: 'Employee not found',
                  });
            }
      } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
      }
}

module.exports = {
      getAllUsers,
      createUser,
      getAllEmployees,
      getEmployeeById,
      createEmployee,
      deleteEmployee,
      updateEmployee,
}