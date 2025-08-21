const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/authController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/register', authControllers.register);
router.post('/login', authControllers.login);

router.get('/users', verifyToken, authControllers.getUsers);
router.delete('/users/:id', authControllers.deleteUser);
router.put('/users/:id', authControllers.updateUser);

module.exports = router;
