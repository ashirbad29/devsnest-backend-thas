const bcrypt = require('bcrypt');
const User = require('../models/user');
const express = require('express');
/**
 * Check if email already exits
 * password hash
 * email lowercase
 * save
 */

const saltRounds = 10;
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const register = async (req, res) => {
	const { email, password, fullName } = req.body;
	try {
		const alreadyExists = await User.findOne({ where: { email } });
		if (alreadyExists) {
			res.status(401).send('Email Already Exists');
			return;
		}

		const salt = bcrypt.genSaltSync(saltRounds);
		const hash = bcrypt.hashSync(password, salt);

		const newUser = new User({
			fullName,
			email: email.toLowerCase(),
			password: hash,
		});
		const savedUser = await newUser.save();
		res.status(201).send('User Registered');
	} catch (err) {
		console.error(err);
		res.status(500).send('something went wrong');
	}
};

module.exports = register;
