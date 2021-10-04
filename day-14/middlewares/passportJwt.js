const User = require('../models/user');
const { secret } = require('../config');
const { Strategy, ExtractJwt } = require('passport-jwt');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: secret,
};

module.exports = passport => {
	passport.use(
		new Strategy(options, async (payload, done) => {
			await User.findOne({ where: { id: payload.user_id } })
				.then(user => {
					console.log('User: ', user);
					if (user) return done(null, user);
					return done(null, false);
				})
				.catch(err => {
					return done(null, false);
				});
		})
	);
};
