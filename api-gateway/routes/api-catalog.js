/**
* API Routes
*/
var express = require('express'); 
var router = express.Router();
var checkToken = require('../check-token'); 
var auth_controller = require('../controllers/authController');

// POST request for registering a user 

router.post('/auth/register',
auth_controller.user_register);

router.post('/auth/login', auth_controller.user_login);

// GET request for verifying user tokens 

router.get('/auth/token', checkToken, auth_controller.user_token); 

router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;