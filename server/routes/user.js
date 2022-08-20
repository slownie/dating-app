const express = require('express');
const router = express.Router();
const {signupUser, loginUser, updateUser, getUser, getAll} = require('../controllers/userController');
const AuthRequire = require('../AuthRequire');

//router.use(AuthRequire);

// Signup Route '/api/users/signup'
router.post('/signup', signupUser);

// Login Route 'api/users/login'
router.post('/login', loginUser);

// Update Route 'api/users/update'
router.patch('/update/:id', updateUser);

// Get Route 'api/users/get'
router.get(':/id', getUser);

// Get All Route 'api/users/getall'
router.get('/getall', getAlls);

module.exports = router;