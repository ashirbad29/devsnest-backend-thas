const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('learningdb', 'ashirbad', '116ef012', {
	host: 'localhost',
	dialect: 'postgres',
});

sequelize.sync();

(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection established with DB');
	} catch (err) {
		console.log('Unable to connect to db');
		console.log(err);
	}
})();

module.exports = sequelize;
