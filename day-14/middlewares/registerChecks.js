const { emialValidate, passwordValidate } = require('../utils/validates');

const registerCheck = (req, res, next) => {
	const { email, password, confirmPassword } = req.body;

	if (
		typeof email === 'string' &&
		typeof password === 'string' &&
		typeof confirmPassword === 'string' &&
		email.length > 1 &&
		password.length >= 8 &&
		confirmPassword === password &&
		emialValidate(email) &&
		passwordValidate(password)
	) {
		next();
	} else {
		res.status(401).send('Initial checks fail');
	}
};

module.exports = registerCheck;
