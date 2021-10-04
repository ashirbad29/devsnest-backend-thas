const router = require('express').Router();
const {
	userAuth,
	userLogin,
	checkRole,
	userRegister,
	serializeUser,
} = require('../utils/auth');

// register for user
router.post('/register-user', async (req, res) => {
	await userRegister(req.body, 'user', res);
});

// login for user
router.post('/login-user', async (req, res) => {
	await userLogin(req.body, 'user', res);
});

// user protected route
router.get(
	'/user-proteced',
	userAuth,
	checkRole(['user']),
	async (req, res) => {
		return res.json('hello user');
	}
);

module.exports = router;
