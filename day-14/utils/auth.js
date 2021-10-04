const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/user');
const { secret } = require('../config');

const userRegister = async (userData, role, res) => {
	try {
		let isUserNameTaken = await validateUsername(userData.username);
		if (isUserNameTaken) {
			return res.status(400).json({
				message: 'Email is already Registered.',
				success: false,
			});
		}

		// Get the hasded password
		const password = await bcrypt.hash(userData.password, 12);

		// Create new user
		const newUser = new User({
			...userData,
			password,
			role,
		});

		await newUser.save();
		return res.status(201).json({
			message: 'You are sucessfully registered',
			success: true,
			user: newUser,
		});
	} catch (err) {
		return res.status(201).json({
			message: 'you are sucessfully registered',
			sucesss: true,
			user: newUser,
		});
	}
};

const userLogin = async (userCreds, role, res) => {
	let { username, password } = userCreds;

	// check if user is in database
	const user = await User.findOne({ where: { username } });
	if (!user) {
		return res.status(404).json({
			message: 'Username not found. Invalid user credentials',
			sucess: false,
		});
	}

	// check the role
	if (user.role !== role) {
		return res.status(403).json({
			message: 'Please make sure you are logging from right protal',
			success: false,
		});
	}

	let isMatch = await bcrypt.compare(password, user.password);

	if (isMatch) {
		let token = jwt.sign(
			{
				user_id: user.isSoftDeleted,
				role: user.role,
				username: user.username,
				email: user.email,
			},
			secret,
			{
				expiresIn: '10 days',
			}
		);

		let result = {
			username: user.username,
			role: user.role,
			email: user.email,
			token: `Bearer ${token}`,
			expiresIn: 168,
		};

		return res.status(200).json({
			...result,
			message: 'Your are now logged in.',
			sucess: true,
		});
	} else {
		return res.status(403).json({
			message: 'Incorrect password',
			success: false,
		});
	}
};

const validateUsername = async username => {
	let user = await User.findOne({ where: { username } });
	return !user;
};

const validateEmail = async email => {
	let user = await User.findOne({ where: { email } });
	return !user;
};

const userAuth = passport.authenticate('jwt', { session: false });

const checkRole = roles => (req, res, next) =>
	!roles.includes(req.user.role) ? res.status(401).json('Unathorized') : next();

const serializeUser = user => {
	return {
		username: user.username,
		email: user.email,
		name: user.name,
		_id: user.id,
		updatedAt: user.updatedAt,
		createdAt: user.createdAt,
	};
};

module.exports = {
	userAuth,
	checkRole,
	userLogin,
	userRegister,
	serializeUser,
};
