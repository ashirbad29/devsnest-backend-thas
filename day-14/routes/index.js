var express = require('express');
var router = express.Router();

var registerCheck = require('../middlewares/registerChecks');
const register = require('../controllers/register');
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

/**
 * @requires { email, firstname, lastName, password, confirmPassoword } = req.body
 * Security, performance and edge cases
 * email vlaidate - string
 * password validate
 * JS / SQL injection
 * check if email already exists
 * password hash
 */

router.post('/register', registerCheck, register);

module.exports = router;
