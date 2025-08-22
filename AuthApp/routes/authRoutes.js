const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');
const getAllUsers = authControllers.getAllUsers;
const createUser = authControllers.createUser;
const getAllEmployees = authControllers.getAllEmployees;
const createEmployee = authControllers.createEmployee;
const deleteEmployee = authControllers.deleteEmployee;
const updateEmployee = authControllers.updateEmployee;
const getEmployeeById = authControllers.getEmployeeById;


// User Routes
router.get('/users', getAllUsers);
router.post('/users', createUser);


// Employee Routes
router.get('/employees', getAllEmployees);
router.get('/employees/:id', getEmployeeById);
router.post('/employees', createEmployee);
router.delete('/employees/:id', deleteEmployee);
router.put('/employees/:id', updateEmployee);

module.exports = router;
